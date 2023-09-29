import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode, Toast } from "@/lib";
import { EvpButton, Button, Dialog } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function DialogView() {
  const next = { route: "evp-drawer", name: "Drawer" };
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

  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="preview-container">
      <Md>
        {`
# EvpDialog

A dialog component is a part of a digital interface that enables users to perform a specific action or obtain information.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Dialog } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<Button
  $click={() => {
    setOpenOne(true);
  }}
>
  open
</Button>
<Dialog
  open={openOne}
  setOpen={setOpenOne}
>
  Hello
</Dialog>
`}
      </Tsx>
      <Card>
        <Button
          $click={() => {
            setOpenOne(true);
          }}
        >
          open
        </Button>
        <Dialog open={openOne} setOpen={setOpenOne}>
          Hello
        </Dialog>
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpDialog.

You can customize by overriding the footer of Dialog (same with header) .
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
        <Button
          $click={() => {
            setOpenTwo(true);
          }}
        >
          open
        </Button>
        <Dialog open={openTwo} setOpen={setOpenTwo} footer={<div>My footer.</div>}>
          Hello
        </Dialog>
      </Card>
      <Tsx show={showCode[1]}>
        {`
<Dialog open={openTwo} setOpen={setOpenTwo} footer={<div>My footer.</div>}>
  Hello
</Dialog>
`}
      </Tsx>
      <Md>
        {`
Or if you only want to customize the cancel and confirm button, you can use \`cancelProps\` and \`confirmProps\` to do that.        
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton $click={() => clickCode(2)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <Button
          $click={() => {
            setOpenThree(true);
          }}
        >
          open
        </Button>
        <Dialog
          open={openThree}
          setOpen={setOpenThree}
          confirmProps={{
            text: "确认",
            $click: () => {
              Toast.info("你应该点击关闭");
            },
          }}
          cancelProps={{
            text: "取消",
          }}
        >
          Hello
        </Dialog>
      </Card>
      <Tsx show={showCode[2]}>
        {`
<Button
  $click={() => {
    setOpenThree(true);
  }}
>
  open
</Button>
<Dialog
  open={openThree}
  setOpen={setOpenThree}
  confirmProps={{
     text: "确认",
    $click: () => {
      Toast.info("You should close by clicking the cancel button.");
     }
   }}
  cancelProps={{
    text: "取消",
   }}
>
  Hello
</Dialog>
`}
      </Tsx>
      <Md>
        {`
## content

The modal is based on EvpModal and its close and open events are also based on EvpModal. You can set onOpen and onClose to listen to the events.

The content's container of the dialog card is based on EvpDom. Therefore, you can customize it like as EvpDom.
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton $click={() => clickCode(3)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <Button
          $click={() => {
            setOpenFour(true);
          }}
        >
          open
        </Button>
        <Dialog
          open={openFour}
          setOpen={setOpenFour}
          loading={loading}
          onOpen={() => {
            Toast.success(`Dialog opened!`);
          }}
          onClose={() => {
            Toast.success(`Dialog closed!`);
          }}
        >
          <Button
            loading={loading}
            $click={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
          >
            {loading ? "loading" : "click me"}
          </Button>
        </Dialog>
      </Card>
      <Tsx show={showCode[3]}>
        {`
<Button
  $click={() => {
    setOpenFour(true);
  }}
>
  open
</Button>
<Dialog open={openFour} setOpen={setOpenFour} loading={loading}>
  <Button
    loading={loading}
    $click={() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }}
  >
    {loading ? "loading" : "click me"}
  </Button>
</Dialog>
`}
      </Tsx>
      <Md>
        {`
## Api

★ container based on EvpCard and EvpModal  
★ props extends EvpBaseProps

**EvpDialog Apis:**
`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type EvpDialogProps = {
  children?: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: (e?: DialogCloseEvent) => void;
  onOpen?: (e?: DialogOpenEvent) => void;
  cancelProps?: EvpButtonProps;
  confirmProps?: EvpButtonProps;
  loading?: boolean;
} & EvpCardProps;
`}
      </EvpCode>
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
