import { Tag, useReativeContext } from "@/lib";
import context from "./context";

export default function KidKid() {
  const state2 = useReativeContext<number>(context as any);
  // @ts-ignore
  console.log(context?.$$typeof);
  return (
    <>
      <Tag
        light
        style={{ cursor: "pointer" }}
        onClick={() => {
          state2.value++;
        }}
      >
        kid.kid.state2 : {state2.value}
      </Tag>
    </>
  );
}
