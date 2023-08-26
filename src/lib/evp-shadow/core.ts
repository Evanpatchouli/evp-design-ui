import BezierEasing from 'bezier-easing';

class EvpShadow {
  private config = {
    shadowLayers: {
      value: 6,
      min: 1,
      max: 10,
      step: 1,
    },
    alpha: {
      value: 0.07,
      min: 0,
      max: 1,
      step: 0.01,
    },
    xOffset: {
      value: 100,
      min: 0,
      max: 500,
      step: 1,
    },
    yOffset: {
      value: 100,
      min: 0,
      max: 500,
      step: 1,
    },
    blur: {
      value: 80,
      min: 0,
      max: 500,
      step: 1,
    },
    spread: {
      value: 0,
      min: -100,
      max: 0,
      step: 1,
    },
    invertAlpha: { value: false }
  }

  /** Left spot - Right spot */
  public alphaEasingValue = [
    0.1, 0.5, 0.9, 0.5,
  ]

  /** Left spot - Right spot */
  public offsetEasingValue = [
    0.7, 0.1, 0.9, 0.3,
  ]

  /** Left spot - Right spot */
  public blurEasingValue = [
    0.7, 0.1, 0.9, 0.3,
  ]
  // @ts-ignore
  private alphaEasing = BezierEasing(...this.alphaEasingValue)
  // @ts-ignore
  private offsetEasing = BezierEasing(...this.offsetEasingValue)
  // @ts-ignore
  private blurEasing = BezierEasing(...this.blurEasingValue)

  private easedAlphaValues: number[] = []
  private easedOffsetValues: number[] = []
  private easedBlurValues: number[] = []

  private configure(options?: EvpShadowOptions){
    if (!options) return;
    options.layer? this.config.shadowLayers.value = options.layer : void 0;
    options.blur? this.config.blur.value = options.blur : void 0;
    options.opacity? this.config.alpha.value = options.opacity : void 0;
    options.xOffset? this.config.xOffset.value = options.xOffset : void 0;
    options.yOffset? this.config.yOffset.value = options.yOffset : void 0;
    options.reverse? this.config.invertAlpha.value = options.reverse : void 0;
  }

  private easedBeziering() {
    for (let i = 1; i <= this.config.shadowLayers.value; i++) {
      const fraction = i / this.config.shadowLayers.value
      if (this.config.invertAlpha) {
        this.easedAlphaValues.unshift(this.alphaEasing(fraction))
      } else {
        this.easedAlphaValues.push(this.alphaEasing(fraction))
      }
  
      this.easedOffsetValues.push(this.offsetEasing(fraction))
      this.easedBlurValues.push(this.blurEasing(fraction))
    }
  }

  private calc() {
    this.easedBeziering();
    
    const boxShadowValues: Array<ArrayLengthed<number,5>> = [];

    for (let i = 0; i < this.config.shadowLayers.value; i++) {
      boxShadowValues.push([
        this.easedOffsetValues[i] * this.config.xOffset.value,
        this.easedOffsetValues[i] * this.config.yOffset.value,
        this.easedBlurValues[i] * this.config.blur.value,
        this.config.spread.value,
        this.easedAlphaValues[i] * this.config.alpha.value,
      ])
    }

    const boxShadow = boxShadowValues
    .map(([leftOffset, topOffset, blur, spread, alpha]) =>
      shadow(
        leftOffset,
        topOffset,
        blur,
        spread,
        rgba(0, 0, 0, alpha),
      ),
    )
    .join(',\n');
    return boxShadow;
  }

  build(options?: EvpShadowOptions) {
    this.configure(options);
    return this.calc();
  }
}

type EvpShadowOptions = {
  /** suggested to be set no higher than 6 */
  layer?: number,
  /** a float number between 0 and 1 */
  opacity?: number,
  xOffset?: number,
  yOffset?: number,
  blur?: number,
  spread?: number,
  reverse?: boolean,
}

const rgba = (r: number, g: number, b: number, a: number) => `rgba(${r}, ${g}, ${b}, ${a})`;

/** single-layer shadow slice */
const shadow = (left: number, top: number, blur: number, spread: number, color: string) =>
  `${left}px ${top}px ${blur}px ${spread}px ${color}`;

const shadowFactory = new EvpShadow();

export default shadowFactory;