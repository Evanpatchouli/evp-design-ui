declare class EvpShadow {
    private config;
    /** Left spot - Right spot */
    alphaEasingValue: number[];
    /** Left spot - Right spot */
    offsetEasingValue: number[];
    /** Left spot - Right spot */
    blurEasingValue: number[];
    private alphaEasing;
    private offsetEasing;
    private blurEasing;
    private easedAlphaValues;
    private easedOffsetValues;
    private easedBlurValues;
    /** @todo options should not be set as config */
    configure(options?: EvpShadowOptions): void;
    getSimpleConfig(options?: EvpShadowOptions): {
        shadowLayers: number;
        alpha: number;
        xOffset: number;
        yOffset: number;
        blur: number;
        spread: number;
        invertAlpha: boolean;
    };
    resetConfig(): void;
    private easedBeziering;
    private fixed;
    private calc;
    build(options?: EvpShadowOptions, output?: boolean): string;
    new(): EvpShadow;
    clone(): EvpShadow & this;
}
type EvpShadowOptions = {
    /** suggested to be set no higher than 6 */
    layer?: number;
    /** a float number between 0 and 1 */
    opacity?: number;
    xOffset?: number;
    yOffset?: number;
    blur?: number;
    spread?: number;
    reverse?: boolean;
    /** Default is 2, the calced result number precision */
    precision?: number;
};
declare const boxShadowFactoryInstance: EvpShadow;
export default boxShadowFactoryInstance;
