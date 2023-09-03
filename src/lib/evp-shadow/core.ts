import BezierEasing from 'bezier-easing';

class EvpShadow {
  private config = {
    shadowLayers: {
      value: 6,
      default: 6,
      min: 1,
      max: 10,
      step: 1,
    },
    alpha: {
      value: 0.07,
      default: 0.07,
      min: 0,
      max: 1,
      step: 0.01,
    },
    xOffset: {
      value: 100,
      default: 100,
      min: 0,
      max: 500,
      step: 1,
    },
    yOffset: {
      value: 100,
      default: 100,
      min: 0,
      max: 500,
      step: 1,
    },
    blur: {
      value: 80,
      default: 80,
      min: 0,
      max: 500,
      step: 1,
    },
    spread: {
      value: 0,
      default: 0,
      min: -100,
      max: 0,
      step: 1,
    },
    invertAlpha: { value: false, default: false }
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

  /** @todo options should not be set as config */
  public configure(options?: EvpShadowOptions){
    if (!options) return;
    options.layer? this.config.shadowLayers.value = options.layer : void 0;
    options.blur? this.config.blur.value = options.blur : void 0;
    options.opacity? this.config.alpha.value = options.opacity : void 0;
    options.xOffset? this.config.xOffset.value = options.xOffset : void 0;
    options.yOffset? this.config.yOffset.value = options.yOffset : void 0;
    options.reverse? this.config.invertAlpha.value = options.reverse : void 0;
  }

  public getSimpleConfig(options?: EvpShadowOptions) {
    const config = {
      shadowLayers: options?.layer??this.config.shadowLayers.value,
      alpha: options?.opacity??this.config.alpha.value,
      xOffset: options?.xOffset??this.config.xOffset.value,
      yOffset: options?.yOffset??this.config.yOffset.value,
      blur: options?.blur??this.config.blur.value,
      spread: options?.spread??this.config.spread.value,
      invertAlpha: options?.reverse??this.config.invertAlpha.value
    }
    return config;
  }

  public resetConfig() {
    this.config.alpha.value = this.config.alpha.default;
    this.config.blur.value = this.config.blur.default;
    this.config.xOffset.value = this.config.xOffset.default;
    this.config.yOffset.value = this.config.yOffset.default;
    this.config.shadowLayers.value = this.config.shadowLayers.default;
    this.config.invertAlpha.value = this.config.invertAlpha.default;
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

  private fixed(num: number, precision: number = 2) {
    return parseFloat(num.toFixed(precision));
  }

  private calc(precision?: number) {
    this.easedBeziering();
    const boxShadowValues: Array<ArrayLengthed<number,5>> = [];

    for (let i = 0; i < this.config.shadowLayers.value; i++) {
      boxShadowValues.push([
        this.fixed(this.easedOffsetValues[i] * this.config.xOffset.value, precision),
        this.fixed(this.easedOffsetValues[i] * this.config.yOffset.value, precision),
        this.fixed(this.easedBlurValues[i] * this.config.blur.value, precision),
        this.fixed(this.config.spread.value, precision),
        this.fixed(this.easedAlphaValues[i] * this.config.alpha.value, precision),
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

  build(options?: EvpShadowOptions, output: boolean = false) {
    output? console.log('[EvpDesignUI::EvpShadow] Going to build with config as ', this.getSimpleConfig()) : void 0;
    this.configure(options);
    const boxShadow =  this.calc(options?.precision);
    this.resetConfig();
    output? console.log('[EvpDesignUI::EvpShadow] Shadow finally got built is ', boxShadow) : void 0;
    return boxShadow;
  }

  new() {
    return new EvpShadow();
  }

  clone() {
    let cloned = new EvpShadow();
    return Object.assign(cloned, this);
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
  /** Default is 2, the calced result number precision */
  precision?: number
}

const rgba = (r: number, g: number, b: number, a: number) => `rgba(${r}, ${g}, ${b}, ${a})`;

/** single-layer shadow slice */
const shadow = (left: number, top: number, blur: number, spread: number, color: string) =>
  `${left}px ${top}px ${blur}px ${spread}px ${color}`;

const boxShadowFactoryInstance = new EvpShadow();

export default boxShadowFactoryInstance;