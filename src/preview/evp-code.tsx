import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton, Code } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function CodeView() {
  const next = { route: "evp-table", name: "Table" };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [showCode, setShowCode] = useState<{ [x: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  };
  return (
    <div className="preview-container">
      <Md>
        {`
# EvpCode

Code is a component that can show code in a container with highlight.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpCode } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**example:**
`}
      </Md>
      <Card>
        <Code lang="tsx" style={{ width: 400 }}>
          {`
export function View() {
  return(
    <div>
      <h2>View</h2>
    </div>
  )
}`}
        </Code>
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpCode.

EvpCode is based on react-syntax-highlighter.Prism
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton $click={() => clickCode(1)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <Code
          lang="tsx"
          style={{ width: 400, backgroundColor: "white", boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" }}
          showLineNumbers
          lineNumberStyle={{ textAlign: "left" }}
        >
          {`
export function View() {
  return(
    <div>
      <h2>View</h2>
    </div>
  )
}`}
        </Code>
      </Card>
      <Tsx show={showCode[1]}>
        {`
<Code
  lang="tsx"
  style={{ width: 400, backgroundColor: "white", boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)" }}
  showLineNumbers
  lineNumberStyle={{ textAlign: "left" }}
>
{\`
export function View() {
  return(
    <div>
      <h2>View</h2>
    </div>
  )
}\`
}
</Code>
`}
      </Tsx>
      <Md>
        {`
## Api

★ based on react-syntax-highlighter.Prism

**EvpCode Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type EvpCodeProps = {
  children?: string;
  lang?: Hintable<LangOptions>;
  theme?: CodeThemeOptions;
  show?: boolean;
  style?: React.CSSProperties;
  class?: string;
  showLineNumbers?: boolean;
  showInlineLineNumbers?: boolean;
  startingLineNumber?: number;
  lineNumberContainerStyle?: React.CSSProperties;
  lineNumberStyle?: React.CSSProperties;
  wrapLines?: boolean;
  wrapLongLines?: boolean;
  lineProps?: lineTagPropsFunction | React.HTMLProps<HTMLElement>;
  renderer?: (props: rendererProps) => React.ReactNode;
  PreTag?: React.ComponentType<any> | keyof JSX.IntrinsicElements;
  CodeTag?: React.ComponentType<any> | keyof JSX.IntrinsicElements;
  codeTagProps?: React.HTMLProps<HTMLElement>;
};

export type CodeThemeOptions = Hintable<CodeTheme>;

export type LangOptions =
  | "javascript"
  | "js"
  | "jsx"
  | "typescript"
  | "ts"
  | "tsx"
  | "java"
  | "python"
  | "c"
  | "cpp"
  | "csharp"
  | "go"
  | "ruby"
  | "rust"
  | "swift"
  | "kotlin"
  | "php"
  | "html"
  | "css"
  | "scss"
  | "less"
  | "json"
  | "xml"
  | "yml"
  | "yaml"
  | "bash"
  | "sh"
  | "shell"
  | "cmd"
  | "bat"
  | "console"
  | "sql"
  | "markdown"
  | "text";

export type CodeTheme =
  | "a11yDark"
  | "atomDark"
  | "base16AteliersulphurpoolLight"
  | "cb"
  | "coldarkCold"
  | "coldarkDark"
  | "coy"
  | "darcula"
  | "duotoneDark"
  | "duotoneEarth"
  | "duotoneForest"
  | "duotoneLight"
  | "duotoneSea"
  | "duotoneSpace"
  | "funky"
  | "ghcolors"
  | "gruvboxDark"
  | "gruvboxLight"
  | "holiTheme"
  | "hopscotch"
  | "lucario"
  | "materialDark"
  | "materialLight"
  | "materialOceanic"
  | "nightOwl"
  | "nord"
  | "okaidia"
  | "oneDark"
  | "oneLight"
  | "pojoaque"
  | "prism"
  | "shadesOfPurple"
  | "solarizedDarkAtom"
  | "solarizedlight"
  | "synthwave84"
  | "tomorrow"
  | "twilight"
  | "vs"
  | "vscDarkPlus"
  | "xonokai"
  | "zTouch";
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
