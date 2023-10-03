import classNames from "classnames";
import EvpDom from "../evp-dom";
import CalendarDate, { CalendarProps as CalendarDateProps } from "react-calendar";
import { LooseValue } from "react-calendar/dist/cjs/shared/types";
import { useEffect, useState } from "react";
import moment from "moment";
import EvpBaseProps from "../props";

export type EvpCalendarProps = Omit<
  CalendarDateProps &
    React.RefAttributes<unknown> & {
      class?: string;
      style?: React.CSSProperties;
      containerProps?: EvpBaseProps;
      readonly?: boolean;
      time?: any;
      timeFormat?: string;
      timeClass?: string;
      dateClass?: string;
      timeAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
      timeStyle?: React.CSSProperties;
      /**
       * @description show time in calendar
       * @defaultValue `true`
       */
      showTime?: boolean;
      /**
       * @type {Date | null}
       */
      date?: LooseValue;
      setDate?: (value: LooseValue, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    },
  "value" | "onChange" | "className"
>;

export default function Calendar(props: EvpCalendarProps) {
  const {
    date,
    setDate,
    class: className,
    timeClass,
    dateClass,
    readonly,
    time,
    timeFormat,
    style,
    timeStyle,
    timeAlign,
    showTime,
    containerProps,
    ...rest
  } = props;
  const [now, setNow] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date().toLocaleString());
    }, 1000);
    return function cleanTimer() {
      clearInterval(timer);
    };
  }, []);

  const ContainerProps = () => {
    const { class: _class, ...rest } = containerProps ?? {};
    return rest;
  };

  return (
    <EvpDom
      class={classNames("evp", "evp-calendar", containerProps?.class || className, readonly ? "evp-readonly" : "")}
      style={style}
      {...ContainerProps()}
    >
      {showTime !== false ? (
        <div
          className={classNames("evp-calendar-time", timeClass)}
          style={{
            textAlign: timeAlign ?? "center",
            ...timeStyle,
          }}
        >
          {moment(time ?? now).format(timeFormat ?? "YYYY / MM / DD \xa0 hh : mm : ss")}
        </div>
      ) : (
        void 0
      )}
      <CalendarDate className={classNames("evp-calendar-date", dateClass)} value={date} onChange={setDate} {...rest} />
    </EvpDom>
  );
}
