import { useState, type ReactNode } from "react";
import Card from "@/lib/evp-card/index.v2";
import Row from "@/lib/evp-row";
import Button from "@/lib/evp-button";
import CopyCodeButton from "./copy-code-button";
import Tsx from "./tsx";

export default function DemoCard({ children, source }: { children: ReactNode; source: string }) {
  const [showCode, setShowCode] = useState(false);
  return (
    <Card w="100%" footer={
      <div style={{ width: "100%" }}>
        <Row justifyContent="right" w="100%" h="fit-content">
          <Button theme="text" size="mini" text="code" $click={() => setShowCode(show => !show)} />
          <CopyCodeButton source={source} />
        </Row>
        <Tsx show={showCode}>{source}</Tsx>
      </div>
    }>
      {children}
    </Card>
  );
}
