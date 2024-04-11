"use client";
import { cn } from "../../utils/cn";
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const Wavy = ({
  children,
  className,
  containerClassName,
  colors,
  blur,
}) => {
  const noise = createNoise3D();
  let w, h, nt, i, x, ctx, canvas;
  const canvasRef = useRef(null);

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#b7dfea",
    "#308aaa",
    "#85c7db",
    "#294e61",
    "#4aa6c4",
    "#264253",
    "#4aa6c4",
  ];
  const drawWave = (n) => {
    nt += 0.0017;
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = 77;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 1000, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.55);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId;
  const render = () => {
    ctx.fillStyle = "#070e13";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 0, w, h);
    drawWave(7);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <section
      id="hero"
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-20", className)}>{children}</div>
    </section>
  );
};
