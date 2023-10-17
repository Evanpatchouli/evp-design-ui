import { Tag, useReactive } from "@/lib";
import context from "./context";
import KidKid from "./kid.kid";

export default function Kid() {
  const state = useReactive<number>();
  const state2 = useReactive<number>(0);
  return (
    <>
      <Tag
        light
        style={{ cursor: "pointer" }}
        onClick={() => {
          state.value++;
        }}
      >
        state : {state.value}
      </Tag>
      <Tag
        light
        style={{ cursor: "pointer" }}
        onClick={() => {
          state2.value++;
        }}
      >
        state2 : {state2.value}
      </Tag>
      <context.Provider value={state2}>
        <KidKid />
      </context.Provider>
    </>
  );
}
