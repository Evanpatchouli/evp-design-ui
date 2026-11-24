import { useEffect } from "react";
import { Link } from "react-router-dom";
import DemoCard from "@/components/demo-card";
import Example from "./demos/datetime-picker/example";
import source from "./demos/datetime-picker/example.tsx?source";

export default function DateTimePickerView() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="preview-container">
      <h1>EvpDateTimePicker</h1>
      <p>Pass a date string as children to display it beside the clock icon.
        Set a placeholder to display when no date is supplied.</p>
      <DemoCard source={source}><Example /></DemoCard>
      <Link to="/components/evp-switch">Next Doc EvpSwitch</Link>
    </div>
  );
}
