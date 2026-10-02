import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type CrowdCanvasProps = { src: string; rows?: number; cols?: number };
type Peep = {
  image: HTMLImageElement;
  rect: [number, number, number, number];
  width: number;
  height: number;
  x: number;
  y: number;
  anchorY: number;
  scaleX: number;
  walk?: gsap.core.Timeline;
};

export function CrowdCanvas({ src, rows = 15, cols = 7 }: CrowdCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const stage = { width: 0, height: 0 };
    const image = new Image();
    const all: Peep[] = [];
    const available: Peep[] = [];
    const crowd: Peep[] = [];
    const random = (min: number, max: number) => min + Math.random() * (max - min);
    const takeRandom = <T,>(items: T[]) => items.splice(Math.floor(Math.random() * items.length), 1)[0];

    const reset = (peep: Peep) => {
      const leftToRight = Math.random() > 0.5;
      const baseY = stage.height - peep.height + (100 - 250 * gsap.parseEase("power2.in")(Math.random()));
      peep.x = leftToRight ? -peep.width : stage.width + peep.width;
      peep.y = baseY;
      peep.anchorY = baseY;
      peep.scaleX = leftToRight ? 1 : -1;
      return { endX: leftToRight ? stage.width : 0, baseY };
    };

    const add = (): Peep | undefined => {
      if (!available.length) return;
      const peep = takeRandom(available);
      const { endX, baseY } = reset(peep);
      peep.walk = gsap.timeline({
        onComplete: () => {
          crowd.splice(crowd.indexOf(peep), 1);
          available.push(peep);
          add();
        },
      });
      peep.walk.timeScale(random(0.5, 1.25));
      peep.walk.to(peep, { x: endX, duration: 10, ease: "none" }, 0);
      peep.walk.to(peep, { y: baseY - 10, duration: 0.25, repeat: 40, yoyo: true }, 0);
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);
      return peep;
    };

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.scale(devicePixelRatio, devicePixelRatio);
      crowd.forEach((peep) => {
        context.save();
        context.translate(peep.x, peep.y);
        context.scale(peep.scaleX, 1);
        context.drawImage(image, ...peep.rect, 0, 0, peep.width, peep.height);
        context.restore();
      });
      context.restore();
    };

    const resize = () => {
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * devicePixelRatio;
      canvas.height = stage.height * devicePixelRatio;
      crowd.forEach((peep) => peep.walk?.kill());
      crowd.length = 0;
      available.length = 0;
      available.push(...all);
      while (available.length) add()?.walk?.progress(Math.random());
    };

    image.onload = () => {
      const cellWidth = image.naturalWidth / rows;
      const cellHeight = image.naturalHeight / cols;
      for (let index = 0; index < rows * cols; index += 1) {
        all.push({
          image,
          rect: [(index % rows) * cellWidth, Math.floor(index / rows) * cellHeight, cellWidth, cellHeight],
          width: cellWidth,
          height: cellHeight,
          x: 0,
          y: 0,
          anchorY: 0,
          scaleX: 1,
        });
      }
      resize();
      gsap.ticker.add(render);
    };
    image.src = src;
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(render);
      crowd.forEach((peep) => peep.walk?.kill());
    };
  }, [cols, rows, src]);

  return <canvas aria-hidden="true" ref={canvasRef} className="crowd-canvas" />;
}
