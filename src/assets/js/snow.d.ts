interface SnowflakeOptions {
  count?: number;
  minRadius?: number;
  maxRadius?: number;
  minSpeed?: number;
  maxSpeed?: number;
  text: string;
  color: string;
  zIndex: string;
}

class Snowflake {
  constructor(
    canvas: HTMLCanvasElement,
    h: number,
    s: number,
    c: string,
    t: string
  );
  calculateNewPosition(
    oldPosition: number,
    oldCanvasSize: number,
    newCanvasSize: number
  ): number;
  updateAfterCanvasResize(
    oldCanvasWidth: number,
    oldCanvasHeight: number,
    newCanvasWidth: number,
    newCanvasHeight: number
  ): void;
  draw(ctx: CanvasRenderingContext2D): void;
  update(canvas: HTMLCanvasElement): void;
}

class Snowfall {
  constructor(options?: SnowflakeOptions);
  requestAnimationFrame: () => void;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  snowflakes: Snowflake[];
  count: number;
  minRadius: number;
  maxRadius: number;
  minSpeed: number;
  maxSpeed: number;
  color: string;
  text: string;
  zIndex: string;

  createSnowflakes(): void;
  animateSnowflakes(): void;
  resizeCanvas(): void;
  destroy(): void;
}

export { SnowflakeOptions, Snowfall };
