"use client";

import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  color: string;
  type: "square" | "circle" | "triangle" | "pentagon" | "star";
  filled: boolean;
}

export default function AnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const animationRef = useRef<number | null>(null);

  // Opacity constant for shapes
  const SHAPE_OPACITY = 0.25;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Shape colors with good contrast against dark background
    const colors = [
      "#ff5733", // Coral
      "#33ff57", // Green
      "#3357ff", // Blue
      "#ff33f5", // Magenta
      "#f5ff33", // Yellow
      "#33f5ff", // Cyan
      "#ff8c33", // Orange
      "#8c33ff", // Purple
    ];

    // Initialize shapes
    const initShapes = () => {
      const NUMBER_OF_SHAPES = 12;
      shapesRef.current = [];
      for (let i = 0; i < NUMBER_OF_SHAPES; i++) {
        const types: Shape["type"][] = [
          "square",
          "circle",
          "triangle",
          "pentagon",
          "star",
        ];
        shapesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() - 0.5,
          vy: Math.random() - 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.015,
          size: (i / NUMBER_OF_SHAPES) * 120 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: types[Math.floor(Math.random() * types.length)],
          filled: i % 2 === 0,
        });
      }
    };

    initShapes();

    // Draw functions for different shapes
    const drawSquare = (ctx: CanvasRenderingContext2D, shape: Shape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = SHAPE_OPACITY;

      if (shape.filled) {
        ctx.fillStyle = shape.color;
        ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
      } else {
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 3;
        ctx.strokeRect(
          -shape.size / 2,
          -shape.size / 2,
          shape.size,
          shape.size
        );
      }
      ctx.restore();
    };

    const drawCircle = (ctx: CanvasRenderingContext2D, shape: Shape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.globalAlpha = SHAPE_OPACITY;

      ctx.beginPath();
      ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);

      if (shape.filled) {
        ctx.fillStyle = shape.color;
        ctx.fill();
      } else {
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawPolygon = (
      ctx: CanvasRenderingContext2D,
      shape: Shape,
      sides: number
    ) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = SHAPE_OPACITY;

      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides;
        const x = (Math.cos(angle) * shape.size) / 2;
        const y = (Math.sin(angle) * shape.size) / 2;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();

      if (shape.filled) {
        ctx.fillStyle = shape.color;
        ctx.fill();
      } else {
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawStar = (ctx: CanvasRenderingContext2D, shape: Shape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = SHAPE_OPACITY;

      const spikes = 5;
      const outerRadius = shape.size / 2;
      const innerRadius = outerRadius * 0.4;

      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const angle = (i * Math.PI) / spikes;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = Math.cos(angle - Math.PI / 2) * radius;
        const y = Math.sin(angle - Math.PI / 2) * radius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();

      if (shape.filled) {
        ctx.fillStyle = shape.color;
        ctx.fill();
      } else {
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawShape = (ctx: CanvasRenderingContext2D, shape: Shape) => {
      switch (shape.type) {
        case "square":
          drawSquare(ctx, shape);
          break;
        case "circle":
          drawCircle(ctx, shape);
          break;
        case "triangle":
          drawPolygon(ctx, shape, 3);
          break;
        case "pentagon":
          drawPolygon(ctx, shape, 5);
          break;
        case "star":
          drawStar(ctx, shape);
          break;
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach((shape) => {
        // Update position
        shape.x += shape.vx;
        shape.y += shape.vy;

        // Update rotation
        shape.rotation += shape.rotationSpeed;

        // Bounce off edges
        if (
          shape.x <= shape.size / 2 ||
          shape.x >= canvas.width - shape.size / 2
        ) {
          shape.vx *= -1;
          shape.x = Math.max(
            shape.size / 2,
            Math.min(canvas.width - shape.size / 2, shape.x)
          );
        }
        if (
          shape.y <= shape.size / 2 ||
          shape.y >= canvas.height - shape.size / 2
        ) {
          shape.vy *= -1;
          shape.y = Math.max(
            shape.size / 2,
            Math.min(canvas.height - shape.size / 2, shape.y)
          );
        }

        drawShape(ctx, shape);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ background: "transparent" }}
    />
  );
}
