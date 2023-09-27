import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { Button, EvpCard, EvpCode, Row } from "@/lib";
import { EvpButton, Modal } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function ModalView() {
  const next = { route: "evp-dialog", name: "Dialog" };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [showCode, setShowCode] = useState<{ [x: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  };

  const [modalOne, modalOneShow] = useState(false);

  return (
    <div className="preview-container">
      <Md>
        {`
# EvpModal

A modal component is a dialog component that restricts user access to the rest of the application until the modal window is closed.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Modal } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<Card>
	<Modal open={modalOne}>
		<EvpCard w={300} h={160}
		footer={
			<Row justifyContent="right">
				<Button mg_8 $click={()=>{
					modalOneShow(false);
				Close</Button>
			</Row>}
		>
			Hello, I'm a card in Modal.
		</EvpCard>
	</Modal>
		<EvpButton text="Open" $click={()=>{
			modalOneShow(true);
		/>
</Card>
`}
      </Tsx>
      <Card>
        <Modal open={modalOne}>
          <EvpCard
            w={300}
            h={160}
            footer={
              <Row justifyContent="right">
                <Button
                  $click={() => {
                    modalOneShow(false);
                  }}
                >
                  Close
                </Button>
              </Row>
            }
            footerProps={{
              justifyContent: "flex-end",
            }}
          >
            Hello, I'm a card in Modal.
          </EvpCard>
        </Modal>
        <EvpButton
          text="Open"
          $click={() => {
            modalOneShow(true);
          }}
        />
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpModal.
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton $click={() => clickCode(1)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <Card>
          <h3>Templates</h3>
        </Card>
      </Card>
      <Tsx show={showCode[1]}>
        {`
<EvpCard w={400}
toolbarStyle={{
  justifyContent: 'flex-end'
}}
toolBar={
<>
  <EvpButton plain size="mini" text="Hello" />
  <EvpButton plain size="mini" text="World" />
</>}
>
  <EvpButton text="Greet" />
  
</EvpCard>
`}
      </Tsx>
      <Md>
        {`
## Api

★ container based on EvpDom  
★ props extends EvpBaseProps

**EvpCard Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark"></EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link={`/${next.route ? `components/${next.route}` : ""}`}
        text={`★ Next Doc Evp${next.name} >`}
      />
    </div>
  );
}
