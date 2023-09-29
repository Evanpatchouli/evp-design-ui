import Card from "@/components/card";
import "./test.css";
import EvpFlexbarContentfixed from "@/lib/evp-flexbar/content-fixed";
import EvpDivider from "@/lib/evp-divider";
import { Anchor, Button, EvpButton, EvpCard, Img, EvpRow, EvpTag, Input, Row, Toast } from "@/lib";
import useMobx from "@/store/hooks";
import EvpForm from "@/lib/evp-form";
import useForm from "@/lib/evp-form/hooks";
import EvpFormField from "@/lib/evp-form/field";
import PreContext from "./context";
import Contest from "./components/contest";
import EvpCheckBox from "@/lib/evp-checkbox";
import EvpRadioGroup from "@/lib/evp-radio-group/inedx";
import EvpRadio from "@/lib/evp-radio";
import EvpSelect from "@/lib/evp-select";
import EvpSlider from "@/lib/evp-slider";
import EvpCardV2 from "@/lib/evp-card/index.v2";
import { useState } from "react";

export default function TestViewView() {
  const store = useMobx("store");
  const formRef = useForm<{
    name: string;
  }>();

  const [preview, previewSet] = useState(false);

  return (
    <div className="preview-container" id="first">
      <PreContext.Provider
        value={{
          pageName: "TestView",
        }}
      >
        <h4>圆形 ( circle )</h4>
        <Card>
          <svg version="1.1" style={{ border: "1px solid black" }} width={50} height={50} viewBox="0 0 100 100">
            <circle // circle 是原点
              cx={50} // x 坐标
              cy={50} // y 坐标
              r={40} // 半径
              strokeWidth={1} // 描边宽度
              stroke="#000" // 描边颜色
              fill="none" // 封闭图形的填充颜色
            >
              <circle
                cx={20}
                cy={20}
                stroke="#000" // 描边颜色
              ></circle>
            </circle>
          </svg>
        </Card>
        <h4>矩形 ( rect )</h4>
        <Card>
          <svg version="1.1" style={{ border: "1px solid black" }} width={50} height={50} viewBox="0 0 100 100">
            <rect
              width={100}
              height={40}
              strokeWidth={1} // 描边宽度
              stroke="#000"
              fill="#000"
              fillOpacity={0.5}
              strokeOpacity={0.5}
              x={0}
              y={0}
              rx={10}
              ry={10}
            />
          </svg>
        </Card>
        <Card class="x123">
          <EvpFlexbarContentfixed fixedMode="content" label="R">
            <div>user is user</div>
          </EvpFlexbarContentfixed>

          <EvpFlexbarContentfixed fixedMode="content" labelPosition="left" label="L">
            <div>user is user</div>
          </EvpFlexbarContentfixed>

          <EvpFlexbarContentfixed fixedMode="content" labelPosition="top" label="T">
            <div>user is user</div>
          </EvpFlexbarContentfixed>

          <EvpFlexbarContentfixed fixedMode="content" labelPosition="bottom" label="B">
            <div>user is user</div>
          </EvpFlexbarContentfixed>
        </Card>
        <Card>
          <EvpDivider />
          <EvpDivider>我是分界线</EvpDivider>
        </Card>
        <Card>
          <EvpRow>
            <Anchor id="first">
              <Button mgr_12>To first</Button>
            </Anchor>
            <Anchor id="/components/evp-button" hash>
              <Button>To Button Docs</Button>
            </Anchor>
          </EvpRow>
        </Card>
        <h4>Mobx test :</h4>
        <Card>
          <Button
            mgr_12
            $click={() => {
              Toast.info(store.theme);
            }}
          >
            Get Theme
          </Button>

          <Button
            $click={() => {
              store.setTheme(store.theme === "dark" ? "light" : "dark");
            }}
          >
            Reverse Theme
          </Button>
        </Card>
        <Card>
          <EvpForm
            formRef={formRef}
            $submit={(e) => {
              formRef.submit();
            }}
          >
            <EvpFormField name="name">
              <Input
                required
                label="用户名"
                name="name"
                rule={{
                  smartTrigger: false,
                  trigger: "onEnter",
                  required: { on: true, val: true, msg: "用户名不能为空" },
                }}
                labelWidth={60}
              />
            </EvpFormField>
            <EvpFormField name="password">
              <Input required label="密码" name="password" labelWidth={60} />
            </EvpFormField>
            <EvpFormField name="admin">
              {/* @todo 要包个 div 才能注册到 formRef 的 BUG */}
              <EvpCheckBox labelWidth={60} required label={"管理员"} name="admin" value="true" />
            </EvpFormField>
            <EvpFormField name="sex">
              <div>
                <EvpRadioGroup labelWidth={60} required label="性别" name="sex">
                  <EvpRadio label="Male" name="sex" value="male" />
                  <EvpRadio label="Female" name="sex" value="female" />
                </EvpRadioGroup>
              </div>
            </EvpFormField>
            <EvpButton type="submit" text="提交" />
          </EvpForm>
        </Card>
        <Contest />
        <Card>
          <EvpSelect
            label="Select"
            required
            options={[
              { label: "Option 1", value: "1", key: "1" },
              { label: "Option 2", value: "2", key: "2" },
              { label: "Option 3", value: "3", key: "3" },
              { label: "Option 4", value: "4", key: "4" },
            ]}
          />
        </Card>
        <Card>
          <EvpSlider name="number" label="Number" required range={[0, 100]} value={50} />
        </Card>
        <Card>
          <Row>
            <EvpTag text="Tag 1" theme="white" style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="primary" style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="success" style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="warning" style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="danger" style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="info" style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="dark" style={{ marginRight: 12 }} />
          </Row>
          <Row mgt_20>
            <EvpTag text="Tag 1" theme="white" light style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="primary" light style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="success" light style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="warning" light style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="danger" light style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="info" light style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="dark" light style={{ marginRight: 12 }} />
          </Row>

          <Row mgt_20>
            <EvpTag text="Tag 1" theme="white" plain style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="primary" plain style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="success" plain style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="warning" plain style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="danger" plain style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="info" plain style={{ marginRight: 12 }} />
            <EvpTag text="Tag 1" theme="dark" plain style={{ marginRight: 12 }} />
          </Row>
        </Card>

        <EvpCard w={"100%"}>
          <EvpCardV2
            header="EvpCardV2"
            footer={
              <>
                <Button>Hello</Button>
              </>
            }
            lefter={
              <>
                <Button shape="circle">&copy;</Button>
              </>
            }
            righter={
              <>
                <Button shape="circle">&copy;</Button>
              </>
            }
          >
            <div
              style={{
                width: "200px",
                height: "100px",
                border: "1px solid black",
              }}
            ></div>
          </EvpCardV2>
        </EvpCard>
        <h3>Img：</h3>
        <EvpCardV2 w={"100%"}>
          <Img
            alt="imger"
            src="https://tse4-mm.cn.bing.net/th/id/OIP-C.lxPAUsFZrjEJvnt5iS6HZwHaKe?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            pointer
            preview={preview}
            setPreview={previewSet}
            $click={() => {
              previewSet(true);
            }}
          />
        </EvpCardV2>
      </PreContext.Provider>
    </div>
  );
}
