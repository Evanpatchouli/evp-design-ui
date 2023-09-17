export type EvpAnchorProps = {
  id: string;
  class?: string;
  children?: React.ReactNode;
  hash?: boolean;
  behavior?: "smooth" | "instant" | "auto";
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
};

/**
 * Wrap some elements to jump to an anchor while clicked
 */
export default function EvpAnchor(props: EvpAnchorProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      // @ts-ignore
      behavior: props.behavior ?? "smooth",
      block: props.block ?? "start",
      inline: props.inline ?? "nearest",
    });
  };

  return (
    <>
      {props.hash ? (
        <a
          href={`#${props.id}`}
          className={`evp-anchor-a ${props.class ?? ""}`.trim()}
        >
          {props.children}
        </a>
      ) : (
        <div
          className={`evp-anchor-div ${props.class ?? ""}`.trim()}
          onClick={() => scrollTo(props.id)}
        >
          {props.children}
        </div>
      )}
    </>
  );
}
