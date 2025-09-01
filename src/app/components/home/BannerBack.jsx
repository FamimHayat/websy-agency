"use client";

import { useEffect, useRef } from "react";
import { TweenLite, Circ } from "gsap";

export default function BannerBack({ children }) {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    let width, height, points, target;
    let animateHeader = true;
    const canvas = canvasRef.current;
    const largeHeader = headerRef.current;
    const ctx = canvas.getContext("2d");

    // Soft pastel palette for lines/circles
    const colors = [
      "255,100,100",
      "100,255,150",
      "100,200,255",
      "255,255,100",
      "255,150,255",
      "200,200,255",
      "150,255,200",
    ];

    function randomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function initHeader() {
      width = window.innerWidth;
      height = largeHeader.offsetHeight;
      target = { x: width / 2, y: height / 2 };

      canvas.width = width;
      canvas.height = height;

      // Denser grid: more points for complexity
      points = [];
      const stepX = width / 35;
      const stepY = height / 35;
      for (let x = 0; x < width; x += stepX) {
        for (let y = 0; y < height; y += stepY) {
          let px = x + Math.random() * stepX;
          let py = y + Math.random() * stepY;
          points.push({ x: px, originX: px, y: py, originY: py });
        }
      }

      // Assign closest points (up to 8 neighbors)
      points.forEach((p1) => {
        let closest = [];
        points.forEach((p2) => {
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 8; k++) {
              if (!placed && !closest[k]) {
                closest[k] = p2;
                placed = true;
              }
            }
            for (let k = 0; k < 8; k++) {
              if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        });
        p1.closest = closest;
        p1.color = randomColor();
      });

      // Assign circles with variable radius
      points.forEach((p) => {
        p.circle = new Circle(p, 1.5 + Math.random() * 3);
      });
    }

    function addListeners() {
      if (!("ontouchstart" in window)) window.addEventListener("mousemove", mouseMove);
      window.addEventListener("scroll", scrollCheck);
      window.addEventListener("resize", resize);
    }

    function mouseMove(e) {
      target.x = e.pageX || e.clientX || width / 2;
      target.y = e.pageY || e.clientY || height / 2;
    }

    function scrollCheck() {
      animateHeader = document.body.scrollTop <= height;
    }

    function resize() {
      width = window.innerWidth;
      height = largeHeader.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      target.x = width / 2;
      target.y = height / 2;
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        points.forEach((p) => {
          const dist = Math.abs(getDistance(target, p));

          // Glow effect based on distance
          if (dist < 5000) {
            p.active = 0.4 + Math.random() * 0.2;
            p.circle.active = 0.7 + Math.random() * 0.3;
          } else if (dist < 25000) {
            p.active = 0.1 + Math.random() * 0.1;
            p.circle.active = 0.3 + Math.random() * 0.2;
          } else if (dist < 50000) {
            p.active = 0.02 + Math.random() * 0.03;
            p.circle.active = 0.1 + Math.random() * 0.1;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }

          drawLines(p);
          p.circle.draw();
        });
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      TweenLite.to(p, 1 + Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => shiftPoint(p),
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      p.closest.forEach((c) => {
        const color = `rgba(${p.color},${p.active})`;
        ctx.lineWidth = 0.5 + Math.random(); // variable thickness
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = color;
        ctx.stroke();
      });
    }

    function Circle(pos, rad) {
      this.pos = pos;
      this.radius = rad;
      this.active = 0;
      this.color = `rgba(${pos.color},0)`;

      this.draw = () => {
        if (!this.active) return;
        this.color = `rgba(${pos.color},${this.active})`;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      };
    }

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    initHeader();
    initAnimation();
    addListeners();

    function initAnimation() {
      animate();
      points.forEach((p) => shiftPoint(p));
    }

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div ref={headerRef} className="relative w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
