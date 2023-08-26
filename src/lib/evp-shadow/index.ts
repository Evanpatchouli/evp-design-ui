import core from "./core";

export { core as SmoothShadow }

export const Common = core.build();

export const Re_Common = core.build({ reverse: true });

export const Common_ZeroBlur = core.build({ blur: 0 });

export const Re_Common_ZeroBlur = core.build({ blur: 0, reverse: true });

export const Common_MiddleBlur = core.build({ blur: 200 });

export const Re_Common_MiddleBlur = core.build({ blur: 200, reverse: true });

export const Common_HighBlur = core.build({ blur: 300 });

export const Re_Common_HighBlur = core.build({ blur: 300, reverse: true });

export const Common_HigherBlur = core.build({ blur: 400 });

export const Re_Common_HigherBlur = core.build({ blur: 400, reverse: true });

export const Common_MaxBlur = core.build({ blur: 500 });

export const Re_Common_MaxBlur = core.build({ blur: 500, reverse: true });

export const Common_PaleDespread = core.build({ spread: -10 });

export const Common_ShallowDespread = core.build({ spread: -20 });

export const Common_LightDespread = core.build({ spread: -30 });

export const Common_MiddleDespread = core.build({ spread: -40 });

export const Common_HighDespread = core.build({ spread: -50 });

export const Common_HigherDespread = core.build({ spread: -60 });