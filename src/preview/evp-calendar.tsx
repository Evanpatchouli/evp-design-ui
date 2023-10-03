import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/calendar/example";
import Time from "./demos/calendar/time";
import TimeFormat from "./demos/calendar/timeFormat";

export default function CalendarView() {
  const next = { route: "", name: "" };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="preview-container">
      <Md>
        {`
# Calendar

A calendar component is a software component that displays a calendar and time.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Calendar } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**example:**
`}
      </Md>
      <Example />
      <Md>
        {`
## Examples

Here are some examples about Calendar.

### time

Default, calendar will display centrally the current time on top of Calendar. You can set the \`timeAlign\` 
to change the position of time. And you can set \`showTime\` to decicde whether to display time.
`}
      </Md>
      <Time />
      <Md>
        {`
### timeFormat

You can set \`timeFormat\` to change the format of time.
`}
      </Md>
      <TimeFormat />
      <Md>
        {`
## Api

★ based on react-calendar and EvpDom  
★ container based on EvpDom  
★ props extends react-calendar.CalendarProps  

**react-calendar** : [Click to see Docs of react-calendar](https://www.npmjs.com/package/react-calendar)

**Calendar Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
import CalendarDate, { CalendarProps as CalendarDateProps } from "react-calendar";
import { LooseValue } from "react-calendar/dist/cjs/shared/types";

export type EvpCalendarProps = Omit<
CalendarDateProps &
  React.RefAttributes<unknown> & {
    class?: string;
    style?: React.CSSProperties;
    containerProps?: EvpBaseProps;
    readonly?: boolean;
    timeFormat?: string;
    timeClass?: string;
    dateClass?: string;
    timeAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
    timeStyle?: React.CSSProperties;
    /**
     * @description show time in calendar
     * @defaultValue \`true\`
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
`}
      </EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link={`/${next.route ? `components/${next.route}` : ""}`}
        text={`★ Next Doc Evp${next.name} >`}
      />
    </div>
  );
}
