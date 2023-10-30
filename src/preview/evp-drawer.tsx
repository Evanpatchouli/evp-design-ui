import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { Button, EvpCode, Row } from "@/lib";
import { EvpButton, Drawer } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function DrawerView() {
  const next = { route: "evp-alert", name: "Alert" };
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

  const [open, openSet] = useState(false);
  const [open1, openSet1] = useState(false);
  const [open2, openSet2] = useState(false);
  const [position, positionSet] = useState<"left" | "right" | "top" | "bottom">("left");

  return (
    <div className="preview-container">
      <Md>
        {`
# Drawer

Drawer is a component that can show contents in a Drawer.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Drawer } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**example:**
`}
      </Md>
      <Card>
        <Button
          $click={() => {
            openSet(!open);
          }}
        >
          Open
        </Button>
        <Drawer open={open} setOpen={openSet} />
      </Card>
      <Md>
        {`
## Examples

Here are some examples about Drawer.

Drawer can be opened from left, right, top, bottom, totally four different directions.
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
            openSet1(!open1);
          }}
          plain
        >
          Open {position} Drawer
        </Button>
        <Row>
          <Button
            $click={() => {
              positionSet("left");
            }}
            mg={[8, 8, 0, 0]}
          >
            Left
          </Button>
          <Button
            $click={() => {
              positionSet("right");
            }}
            mg={[8, 8, 0, 0]}
          >
            Right
          </Button>
          <Button
            $click={() => {
              positionSet("top");
            }}
            mg={[8, 8, 0, 0]}
          >
            Top
          </Button>
          <Button
            $click={() => {
              positionSet("bottom");
            }}
            mg={[8, 8, 0, 0]}
          >
            Bottom
          </Button>
        </Row>
        <Drawer open={open1} setOpen={openSet1} position={position}>
          <div style={{ width: 240 }}>
            <h3>this is a drawer from {position}</h3>
          </div>
        </Drawer>
      </Card>
      <Tsx show={showCode[1]}>
        {`
      <Button
        $click={() => {
          openSet1(!open1);
        }}
        plain
      >
        Open {position} Drawer
      </Button>
      <Row>
        <Button
          $click={() => {
            positionSet("left");
          }}
          mg={[8, 8, 0, 0]}
        >
          Left
        </Button>
        <Button
          $click={() => {
            positionSet("right");
          }}
          mg={[8, 8, 0, 0]}
        >
          Right
        </Button>
        <Button
          $click={() => {
            positionSet("top");
          }}
          mg={[8, 8, 0, 0]}
        >
          Top
        </Button>
        <Button
          $click={() => {
            positionSet("bottom");
          }}
          mg={[8, 8, 0, 0]}
        >
          Bottom
        </Button>
      </Row>
      <Drawer open={open1} setOpen={openSet1} position={position}>
        <div style={{ width: 240 }}>
          <h3>this is a drawer from {position}</h3>
        </div>
      </Drawer>
`}
      </Tsx>
      <Md>
        {`
### Without Modal

Default Drawer is with Modal, but you can also use Drawer without Modal (just transparent not really disappear) .
`}
      </Md>
      <Card>
        <Button
          $click={() => {
            openSet2(!open2);
          }}
        >
          Open
        </Button>
        <Drawer open={open2} setOpen={openSet2} modal={false}>
          <div style={{ width: 300 }}>
            <h3>This is a drawer without modal.</h3>
            <ul>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
              <li>item4</li>
            </ul>
          </div>
        </Drawer>
      </Card>
      <Md>
        {`
## Api

★ based on EvpModal and EvpCard

**EvpDrawer Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type EvpDrawerProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  modal?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  position?: "left" | "right" | "top" | "bottom";
  header?: React.ReactNode;
  headerProps?: EvpDomProps;
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
