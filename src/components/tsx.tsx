import Code from "./code"

export default function Tsx(props: {
  children?: string,
  show?: boolean
}) {
  return (
    <Code lang="tsx" show={props.show}>{props.children}</Code>
  )
}