import classNames from "classnames";

export interface EvpLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: number | string;
  style?: Omit<React.CSSProperties, "fontSize">;
}

function WaveLoading(props: EvpLoadingProps) {
  const { className, color, style, size, ...rest } = props;
  return (
    <div
      className={classNames("evp-loading", className)}
      style={{
        ...style,
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
        // @ts-ignore
        "--loading-color": color ?? "#3cefff",
      }}
      {...rest}
    >
      <div className="wave">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

function BreatheSpin(props: EvpLoadingProps) {
  const { className, color, style, size, ...rest } = props;
  return (
    <div
      className={classNames("evp-loading", className)}
      style={{
        ...style,
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
        // @ts-ignore
        "--loading-color": color ?? "#3cefff",
      }}
      {...rest}
    >
      <div className="breathe-spin"></div>
    </div>
  );
}

function Grid(props: EvpLoadingProps) {
  const { className, color, style, size, ...rest } = props;
  return (
    <div
      className={classNames("evp-loading", className)}
      style={{
        ...style,
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
        // @ts-ignore
        "--loading-color": color ?? "#3cefff",
      }}
      {...rest}
    >
      <div className="grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

function Spin(props: EvpLoadingProps) {
  const { className, color, style, size, ...rest } = props;
  return (
    <div
      className={classNames("evp-loading", className)}
      style={{
        ...style,
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
        // @ts-ignore
        "--loading-color": color ?? "#3cefff",
      }}
      {...rest}
    >
      <div className="spin"></div>
    </div>
  );
}

function Spin2(props: EvpLoadingProps) {
  const { className, color, style, size, ...rest } = props;
  return (
    <div
      className={classNames("evp-loading", className)}
      style={{
        ...style,
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
        // @ts-ignore
        "--loading-color": color ?? "#3cefff",
      }}
      {...rest}
    >
      <div className="spin2"></div>
    </div>
  );
}

function SpinDot(props: EvpLoadingProps) {
  const { className, color, style, size, ...rest } = props;
  return (
    <div
      className={classNames("evp-loading", className)}
      style={{
        ...style,
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
        // @ts-ignore
        "--loading-color": color ?? "#3cefff",
      }}
      {...rest}
    >
      <div className="spin-dot">
        <div className="sk-circle1 sk-child"></div>
        <div className="sk-circle2 sk-child"></div>
        <div className="sk-circle3 sk-child"></div>
        <div className="sk-circle4 sk-child"></div>
        <div className="sk-circle5 sk-child"></div>
        <div className="sk-circle6 sk-child"></div>
        <div className="sk-circle7 sk-child"></div>
        <div className="sk-circle8 sk-child"></div>
        <div className="sk-circle9 sk-child"></div>
        <div className="sk-circle10 sk-child"></div>
        <div className="sk-circle11 sk-child"></div>
        <div className="sk-circle12 sk-child"></div>
      </div>
    </div>
  );
}

function Chase(props: EvpLoadingProps) {
  const { className, color, style, size, ...rest } = props;
  return (
    <div
      className={classNames("evp-loading", className)}
      style={{
        ...style,
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
        // @ts-ignore
        "--loading-color": color ?? "#3cefff",
      }}
      {...rest}
    >
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
}

function Text(
  props: EvpLoadingProps & {
    weight?: "light" | "normal" | "bold";
  }
) {
  const { weight, className, color, style, size, ...rest } = props;
  return (
    <div
      className={classNames("evp-loading", className)}
      style={{
        ...style,
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
        // @ts-ignore
        "--loading-color": color ?? "#3cefff",
      }}
      {...rest}
    >
      <div className={classNames("text", weight ?? "normal")}></div>
    </div>
  );
}

const EvpLoading = {
  Wave: WaveLoading,
  BreatheSpin,
  Grid,
  Spin,
  Spin2,
  SpinDot,
  Chase,
  Text,
};

export default EvpLoading;

