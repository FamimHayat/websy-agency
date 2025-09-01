"use client";

import { useEffect, useRef } from "react";
import { TweenLite, Circ } from "gsap";

export default function BannerBack({ children, baseColor = "63,63,63" }) {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    let width, height, points, target;
    let animateHeader = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const largeHeader = headerRef.current;

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;

      // start cursor at center
      target = { x: width / 2, y: height / 2 };

      largeHeader.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;

      // create points
      points = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          let px = x + Math.random() * (width / 20);
          let py = y + Math.random() * (height / 20);
          points.push({ x: px, originX: px, y: py, originY: py });
        }
      }

      // find closest points
      for (let i = 0; i < points.length; i++) {
        let closest = [];
        let p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          let p2 = points[j];
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed && !closest[k]) {
                closest[k] = p2;
                placed = true;
              }
            }
            for (let k = 0; k < 5; k++) {
              if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
        p1.closest = closest;
      }

      // assign circles
      for (let i in points) {
        points[i].circle = new Circle(points[i], 2 + Math.random() * 2);
      }
    }

    function addListeners() {
      if (!("ontouchstart" in window)) {
        window.addEventListener("mousemove", mouseMove);
      }
      window.addEventListener("scroll", scrollCheck);
      window.addEventListener("resize", resize);
    }

    function mouseMove(e) {
      const posx = e.pageX || e.clientX || width / 2;
      const posy = e.pageY || e.clientY || height / 2;
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      animateHeader = document.body.scrollTop <= height;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;

      // reset target to center
      target.x = width / 2;
      target.y = height / 2;
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i in points) {
          const p = points[i];
          const dist = Math.abs(getDistance(target, p));

          if (dist < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
          } else if (dist < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
          } else if (dist < 40000) {
            p.active = 0.02;
            p.circle.active = 0.1;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }

          drawLines(p);
          p.circle.draw();
        }
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
      for (let i in p.closest) {
        const c = p.closest[i];
        const color = `rgba(${baseColor},${p.active})`; // 🎯 dynamic + stored
        p.lineColor = color;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = color;
        ctx.stroke();
      }
    }

    function Circle(pos, rad) {
      this.pos = pos;
      this.radius = rad;
      this.active = 0;
      this.color = `rgba(${baseColor},0)`; // default

      this.draw = () => {
        if (!this.active) return;
        this.color = `rgba(${baseColor},${this.active})`; // 🎯 dynamic + stored
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      };
    }

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    // initialize
    initHeader();
    initAnimation();
    addListeners();

    function initAnimation() {
      animate();
      for (let i in points) {
        shiftPoint(points[i]);
      }
    }

    // cleanup
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, [baseColor]);

  return (
    <div
      ref={headerRef}
      className="relative w-full min-h-screen overflow-hidden "
    >
      {/* Canvas animation */}
      <canvas ref={canvasRef} className="block" />

      {/* Content wrapper */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {children}
      </div>
    </div>
  );
}
