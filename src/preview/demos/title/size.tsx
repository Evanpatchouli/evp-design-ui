import Tsx from "@/components/tsx";
import { Card, Col, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Title } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <div>
      <Row>
        <Col alignItems="flex-start" w={"30%"}>
          <Title stressed>Default</Title>
          <Title size={"mn"} stressed>
            size mn
          </Title>
          <Title size={"sm"} stressed>
            size sm
          </Title>
          <Title size={"md"} stressed>
            size md
          </Title>
          <Title size={"lg"} stressed>
            size lg
          </Title>
          <Title size={"hg"} stressed>
            size hg
          </Title>
          <Title size={20} stressed>
            size 20
          </Title>
          <Title size={"20px"} stressed>
            size 20px
          </Title>
          <Title size={"1rem"} stressed>
            size 1rem
          </Title>
        </Col>

        <Col alignItems="flex-start" w={"30%"}>
          <Title stressed>Default</Title>
          <Title fontSize={14} stressed>
            fontSize={14}
          </Title>
          <Title fontSize={16} stressed>
            fontSize={16}
          </Title>
          <Title fontSize={18} stressed>
            fontSize={18}
          </Title>
          <Title fontSize={20} stressed>
            fontSize={20}
          </Title>
          <Title fontSize={22} stressed>
            fontSize={22}
          </Title>
          <Title fontSize={24} stressed>
            fontSize={24}
          </Title>
          <Title fontSize={"26px"} stressed>
            fontSize={"26px"}
          </Title>
          <Title fontSize={"2rem"} stressed>
            size 2rem
          </Title>
        </Col>
      </Row>
    </div>
  );
};

const codes = `
import { Title, Row, Col } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <div>
      <Row>
        <Col alignItems="flex-start" w={"30%"}>
          <Title stressed>Default</Title>
          <Title size={"mn"} stressed>
            size mn
          </Title>
          <Title size={"sm"} stressed>
            size sm
          </Title>
          <Title size={"md"} stressed>
            size md
          </Title>
          <Title size={"lg"} stressed>
            size lg
          </Title>
          <Title size={"hg"} stressed>
            size hg
          </Title>
          <Title size={20} stressed>
            size 20
          </Title>
          <Title size={"20px"} stressed>
            size 20px
          </Title>
          <Title size={"1rem"} stressed>
            size 1rem
          </Title>
        </Col>

        <Col alignItems="flex-start" w={"30%"}>
          <Title stressed>Default</Title>
          <Title fontSize={14} stressed>
            fontSize={14}
          </Title>
          <Title fontSize={16} stressed>
            fontSize={16}
          </Title>
          <Title fontSize={18} stressed>
            fontSize={18}
          </Title>
          <Title fontSize={20} stressed>
            fontSize={20}
          </Title>
          <Title fontSize={22} stressed>
            fontSize={22}
          </Title>
          <Title fontSize={24} stressed>
            fontSize={24}
          </Title>
          <Title fontSize={"26px"} stressed>
            fontSize={"26px"}
          </Title>
          <Title fontSize={"2rem"} stressed>
            size 2rem
          </Title>
        </Col>
      </Row>
    </div>
  );
};
`;

export default class Size extends React.Component {
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
