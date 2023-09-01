import { Prism as Highlight } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // 代码高亮主题风格

type LangOptions =
  | "javascript"
  | "typescript"
  | "jsx"
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

export default function Code(props: {
  children?: string;
  lang?: Hintable<LangOptions>;
  show?: boolean;
}) {
  const $show = props.show ?? true;
  return (
    <>
      {$show ? (
        <Highlight
          language={props.lang ?? "text"}
          PreTag={"div"}
          style={vscDarkPlus}
          customStyle={{
            borderRadius: 6,
          }}
        >
          {`${props.children?.replace("\n", "")}`}
        </Highlight>
      ) : (
        void 0
      )}
    </>
  );
}
