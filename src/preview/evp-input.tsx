import EvpInput from "../lib/evp-input";
import React, { useState } from "react";
import Icons from '../lib/evp-icon/svg.icons';
import EvpIcon from "../lib/evp-icon";

export default function InputView() {
  const defaultVal: string = "";
  const [user, setUser] = useState(defaultVal);
  const [pswd, setPswd] = useState(defaultVal);
  let [warn, setWarn] = useState<string>("");
  // custom: (val)=>{
  //   if (val.length < 6) {
  //     return 'value must be at least 6 characters';
  //   }
  // },
  return (
    <div className="preview-container">
      <EvpInput
        name="username"
        label={<Icons.User strokeWidth={5} />}
        labelSize="16px"
        value={user}
        warnReader={{
          ref: warn,
          setWarn: setWarn,
        }}
        placeholder="Input something..."
        onChange={(e) => {
          setUser(e.currentTarget.value);
        }}
        rule={{
          color: "red",
          trigger: "onEnter",
          required: { on: true, val: true },
          type: { on: true, val: "text" },
          min: { on: true, val: 6 },
          cannotHave: [{ on: true, val: "666" }],
        }}
        resultIcon={true}
        onEnter={(e) => {
          alert(`Current value is "${user}", warn message is ${warn}`);
        }}
      ></EvpInput>

      <EvpInput
        name="password"
        label={<EvpIcon passwords strokeWidth={5} />}
        labelSize="16px"
        value={pswd}
        placeholder="Input something..."
        onChange={(e) => {
          setPswd(e.currentTarget.value);
        }}
        rule={{
          color: "red",
          trigger: "onEnter",
          required: { on: true, val: true },
          type: { on: true, val: "text" },
          min: { on: true, val: 6 },
          cannotHave: [{ on: true, val: "666" }],
        }}
        resultIcon={true}
      ></EvpInput>
    </div>
  );
}
