import { lazy, Suspense } from "react";
import type { EvpCodeProps } from "@/lib/evp-code";

type SnippetProps = Pick<EvpCodeProps, "children" | "lang" | "show"> & {
  theme?: "coldarkDark" | "oneLight";
};

function snippetHighlighter(loadTheme: () => Promise<{ default: Record<string, React.CSSProperties> }>) {
  return lazy(async () => {
    const [{ default: Highlight }, { default: style }] = await Promise.all([
      import("./snippet-highlighter"),
      loadTheme(),
    ]);
    return {
      default: ({ children, lang }: SnippetProps) => (
        <Highlight language={lang ?? "text"} PreTag="div" style={style} customStyle={{ borderRadius: 6 }}>
          {children ?? ""}
        </Highlight>
      ),
    };
  });
}

const DarkSnippet = snippetHighlighter(() => import("react-syntax-highlighter/dist/esm/styles/prism/coldark-dark"));
const LightSnippet = snippetHighlighter(() => import("react-syntax-highlighter/dist/esm/styles/prism/one-light"));

export default function Code({ children, lang, show = true, theme }: SnippetProps) {
  if (!show) return null;
  const Highlight = theme === "oneLight" ? LightSnippet : DarkSnippet;
  const source = children?.replace(/^\r?\n/, "") ?? "";
  return (
    <Suspense fallback={<pre><code>{source}</code></pre>}>
      <Highlight lang={lang}>{source}</Highlight>
    </Suspense>
  );
}
