import classNames from "classnames";
import Col from "../evp-col";
import { useState } from "react";

export type EvpDateTimePickerProps = {
  class?: string;
  children?: string;
  placeholder?: string;
  formatter?: string;
};

const EvpDateTimePicker: React.FC<EvpDateTimePickerProps> = (props) => {
  return (
    <Col mg={[4, 0, 4, 0]} alignItems="flex-start">
      <div className={classNames("evp", "evp-datetime-picker", props.class)}>
        <div>
          <span className="evp-datetime-picker-input">
            {props.children ?? props.placeholder ?? props.formatter}
          </span>
          <span className="evp-datetime-picker-icon">🕐</span>
        </div>
      </div>
    </Col>
  );
};

export default EvpDateTimePicker;
