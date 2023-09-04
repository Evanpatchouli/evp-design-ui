export type EvpAnchorProps = {
  id: string,
  class?: string,
  children?: React.ReactNode,
  hash?: boolean,
}

/**
 * @deprecated ~~Wrap some elements to jump to an anchor while clicked~~
 */
export default function EvpAnchor(props: EvpAnchorProps) {
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView(true);
  }
  
  return(
    <>
      {props.hash?
        <a href={`#${props.id}`} className={`evp-anchor-a ${props.class??''}`.trim()}>
          {props.children}
        </a>
      : <div className={`evp-anchor-div ${props.class??''}`.trim()}
          onClick={() => scrollTo(props.id)}
          >{props.children}
        </div>}
    </>
  )
}