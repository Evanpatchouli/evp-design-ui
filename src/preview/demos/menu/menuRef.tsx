import Tsx from "@/components/tsx";
import { Card } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Menu, MenuItem, Row, Label } from "evp-design-ui";
import { useMenuRef } from "@/lib/evp-menu/hooks";

const Demo: React.FC = () => {
  const menu = useMenuRef();
  const debug = () => {
    console.log(menu.current);
  };
  const select = () => {
    menu.current?.setSelectedKeys?.(["menuitem-1"], "select");
  };
  return (
    <div>
      <Menu title="Use MenuRef to controll Menu" menuRef={menu}>
        <MenuItem keyId={"menuitem-1"}>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Menu>
      <Button $click={debug}>Debug</Button>
      <Button $click={select}>Select One</Button>
    </div>
  );
};

const codes = `
import { Menu, MenuItem, Row, Label } from "evp-design-ui";

const Demo: React.FC = () => {
  const [itemColor, setItemColor] = React.useState<any>({
    unselected: {
      bg: "#3e8",
      text: "#fff",
    },
  });
  return (
    <div>
      <Menu title="Customize item colors" itemColor={itemColor}>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Menu>
      <p>Try to input colors you like such as "#000" and "#fff"</p>
      <Row>
        <Label label={"unselected"} labelColon />
        <Label label={"bg"}>
          <input
            defaultValue={"#3e8"}
            onChange={(e) => {
              setItemColor((prev: any) => ({
                ...prev,
                unselected: {
                  ...prev.unselected,
                  bg: e.target.value,
                },
              }));
            }}
          />
        </Label>
        <Label label={"text"} style={{ marginLeft: 8 }}>
          <input
            defaultValue={"#fff"}
            onChange={(e) => {
              setItemColor((prev: any) => ({
                ...prev,
                unselected: {
                  ...prev.unselected,
                  text: e.target.value,
                },
              }));
            }}
          />
        </Label>
      </Row>
      <p>
        The others of itemColor is similar to the above. So we do not show them here. You can get more about them from
        the API section.
      </p>
    </div>
  );
};
`;

export default class MenuRef extends React.Component {
  state: Readonly<{
    showCode: boolean;
  }> = {
    showCode: false,
  };

  render() {
    return (
      <>
        <Card
          w={"100%"}
          footer={
            <div style={{ width: "100%" }}>
              <Row justifyContent="right" w={"100%"} h={"fit-content"}>
                <Button
                  $click={() =>
                    this.setState({
                      ...this.state,
                      showCode: !this.state.showCode,
                    })
                  }
                  theme="text"
                  size="mini"
                  text="code"
                />
                <Button
                  theme="text"
                  size="mini"
                  text="copy"
                  $click={() => {
                    navigator.clipboard
                      .writeText(codes)
                      .then(() => {
                        Toast.success("Copy Success !");
                      })
                      .catch((err) => {
                        console.error(err);
                        Toast.error("Copy Failed !");
                      });
                  }}
                />
              </Row>
              <Tsx show={this.state.showCode}>{codes}</Tsx>
            </div>
          }
        >
          <Demo />
        </Card>
      </>
    );
  }
}
