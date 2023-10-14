/// <reference types="react" />
/// <reference types="react-syntax-highlighter" />
import { Hintable } from "../utils";
export type LangOptions = "javascript" | "js" | "jsx" | "typescript" | "ts" | "tsx" | "java" | "python" | "c" | "cpp" | "csharp" | "go" | "ruby" | "rust" | "swift" | "kotlin" | "php" | "html" | "css" | "scss" | "less" | "json" | "xml" | "yml" | "yaml" | "bash" | "sh" | "shell" | "cmd" | "bat" | "console" | "sql" | "markdown" | "text";
export type CodeTheme = "a11yDark" | "atomDark" | "base16AteliersulphurpoolLight" | "cb" | "coldarkCold" | "coldarkDark" | "coy" | "darcula" | "duotoneDark" | "duotoneEarth" | "duotoneForest" | "duotoneLight" | "duotoneSea" | "duotoneSpace" | "funky" | "ghcolors" | "gruvboxDark" | "gruvboxLight" | "holiTheme" | "hopscotch" | "lucario" | "materialDark" | "materialLight" | "materialOceanic" | "nightOwl" | "nord" | "okaidia" | "oneDark" | "oneLight" | "pojoaque" | "prism" | "shadesOfPurple" | "solarizedDarkAtom" | "solarizedlight" | "synthwave84" | "tomorrow" | "twilight" | "vs" | "vscDarkPlus" | "xonokai" | "zTouch";
export type CodeThemeOptions = Hintable<CodeTheme>;
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
export default function EvpCode(props: EvpCodeProps): import("react/jsx-runtime").JSX.Element;
