/**
 * @deprecated ~~Wrap some elements to jump to an anchor while clicked~~
 */
export default function EvpAnchor(props: {
  id: string,
  children?: React.ReactNode
}) {
  return(
    <a href={`#${props.id}`}>
      {props.children}
    </a>
  )
}