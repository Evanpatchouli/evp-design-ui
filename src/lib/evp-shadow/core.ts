class EvpShadow {
  static build(options: EvpShadowOptions) {
    const color = rgba(0, 0, 0, options.opacity);
  }
}

type EvpShadowOptions = {
  /** suggested to be set no higher than 6 */
  layer: number,
  /** a float number between 0 and 1 */
  opacity: number,
  xOffset: number,
  yOffset: number,
  blur: number,
  spread: number
}

const rgba = (r: number, g: number, b: number, a: number) => `rgba(${r}, ${g}, ${b}, ${a})`;

/** single-layer shadow slice */
const shadow = (left: number, top: number, blur: number, spread: number, color: string) =>
  `${left}px ${top}px ${blur}px ${spread}px ${color}`;

const shadowFactory = new EvpShadow();

export default shadowFactory;