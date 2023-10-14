import { cloneDeep } from "lodash";

export type EvpAnchorProps = EvpAchorAProps | EvpAchorDivProps;

interface EvpAchorAProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** target element's id */
  id: string;
  class?: string;
  children?: React.ReactNode;
  hash: true;
  behavior?: "smooth" | "instant" | "auto";
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
}

interface EvpAchorDivProps extends React.HTMLAttributes<HTMLDivElement> {
  /** target element's id */
  id: string;
  class?: string;
  children?: React.ReactNode;
  hash?: undefined | false;
  behavior?: "smooth" | "instant" | "auto";
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
}

function purifyProps(props: EvpAnchorProps) {
  let $props = cloneDeep(props);
  // @ts-ignore
  delete $props.id;
  delete $props.class;
  delete $props.children;
  delete $props.hash;
  delete $props.block;
  delete $props.inline;
  if (!$props.hash) {
    delete $props.onClick;
  }

  let _$props = $props as React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement>;
  return _$props;
}

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

  const $props = purifyProps(props);

  return (
    <>
      {props.hash === true ? (
        <a href={`#${props.id}`} className={`evp-anchor-a ${props.class ?? ""}`.trim()} {...$props}>
          {props.children}
        </a>
      ) : (
        <div
          className={`evp-anchor-div ${props.class ?? ""}`.trim()}
          onClick={(e) => {
            scrollTo(props.id);
            props.onClick?.(e);
          }}
          {...$props}
        >
          {props.children}
        </div>
      )}
    </>
  );
}
