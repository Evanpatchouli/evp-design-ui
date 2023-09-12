import { useContext } from "react";
import PreContext from "../context";
import Card from "@/components/card";

export default function Contest() {
  const preContext = useContext(PreContext);

  return(
    <Card>
      <div>{preContext?.pageName}</div>
    </Card>
  )
}