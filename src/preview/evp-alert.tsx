import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/alert/example";
import AlertApi from "./apis/alert.api";
import Options from "./demos/alert/options";

export default function AlertView() {
  const next = { route: "evp-code", name: "Code" };
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
# Alert

Alert is almost same with Dialog. The difference is that when an Alert is opened, the mouse cannot scroll the page, besides, 
Alert is created by a static method named "alert".

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Alert } from 'evp-design-ui'
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

Here are some examples about Alert.

### Options

Customize the Alert with options.
`}
      </Md>
      <Options />
      <Md>
        {`
## Api

★ based on EvpDialog  
★ static method : \`alert(content?: string, options?: AlertOptions) => void\`

**Alert Apis:**

`}
      </Md>
      <AlertApi />
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
