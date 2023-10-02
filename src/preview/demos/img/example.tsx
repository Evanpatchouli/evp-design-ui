import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React, { useState } from "react";

import { Button, Img } from "evp-design-ui";

const Demo: React.FC = () => {
  const [preview, previewSet] = useState(false);
  return (
    <Img
      alt="SongZuer"
      src="https://tse4-mm.cn.bing.net/th/id/OIP-C.lxPAUsFZrjEJvnt5iS6HZwHaKe?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      pointer
      width={240}
      preview={preview}
      setPreview={previewSet}
      $click={() => {
        previewSet(true);
      }}
    />
  );
};

export default class Example extends React.Component {
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
                <Button theme="text" size="mini" text="copy" />
              </Row>
              <Tsx show={this.state.showCode}>
                {`
import { Button, Img } from "evp-design-ui";

const Demo: React.FC = () => {
  const [preview, previewSet] = useState(false);
  return (
    <Img
      alt="SongZuer"
      src="https://tse4-mm.cn.bing.net/th/id/OIP-C.lxPAUsFZrjEJvnt5iS6HZwHaKe?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      pointer
      width={240}
      preview={preview}
      setPreview={previewSet}
      $click={() => {
        previewSet(true);
      }}
    />
  );
};
`}
              </Tsx>
            </div>
          }
        >
          <Demo />
        </Card>
      </>
    );
  }
}
