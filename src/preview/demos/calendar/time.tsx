import { Calendar } from "evp-design-ui";

export default function Time() {
  return (
    <>
      <Calendar style={{ display: "inline-block", margin: 20 }} />
      <Calendar timeAlign="left" style={{ display: "inline-block", margin: 20 }} />
      <Calendar timeAlign="right" style={{ display: "inline-block", margin: 20 }} />
      <Calendar showTime={false} style={{ display: "inline-block", margin: 20 }} />
    </>
  );
}
