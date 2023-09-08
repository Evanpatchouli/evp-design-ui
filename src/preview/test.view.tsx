import Card from '@/components/card'
import './test.css'
import EvpFlexbarContentfixed from '@/lib/evp-flexbar/content-fixed'
import EvpDivider from '@/lib/evp-divider'
import { observer } from "mobx-react";
import { Anchor, Button, EvpRow, Input, Toast } from '@/lib'
import useMobx from '@/store/hooks';

export default function TestViewView() {
  const store = useMobx("store");

  return(
    <div className="preview-container" id='first'>
      <h4>圆形 ( circle )</h4>
      <Card>
        <svg version='1.1'style={{ border: '1px solid black' }} 
        width={50}
        height={50}
        viewBox="0 0 100 100" >
          <circle  // circle 是原点
          cx={50}  // x 坐标
          cy={50}  // y 坐标
          r={40}  // 半径
          strokeWidth={1}  // 描边宽度
          stroke='#000'  // 描边颜色
          fill='none'  // 封闭图形的填充颜色
        >
          <circle
          cx={20}
          cy={20}
          stroke='#000'  // 描边颜色
          ></circle>
        </circle>
        </svg>
      </Card>
      <h4>矩形 ( rect )</h4>
      <Card>
        <svg version='1.1' style={{ border: '1px solid black' }} 
        width={50}
        height={50}
        viewBox="0 0 100 100" >
          <rect 
          width={100}
          height={40}
          strokeWidth={1}  // 描边宽度
          stroke='#000'
          fill='#000'
          fillOpacity={0.5}
          strokeOpacity={0.5}
          x={0}
          y={0}
          rx={10}
          ry={10}
          />
        </svg>
      </Card>
      <Card class='x123'>
        <EvpFlexbarContentfixed fixedMode='content'
        label="R"
        >
          <div>user is user</div>
        </EvpFlexbarContentfixed>

        <EvpFlexbarContentfixed fixedMode='content' labelPosition='left'
        label="L"
        >
          <div>user is user</div>
        </EvpFlexbarContentfixed>

        <EvpFlexbarContentfixed fixedMode='content' labelPosition='top'
        label="T"
        >
          <div>user is user</div>
        </EvpFlexbarContentfixed>

        <EvpFlexbarContentfixed fixedMode='content' labelPosition='bottom'
        label="B"
        >
          <div>user is user</div>
        </EvpFlexbarContentfixed>
      </Card>
      <Card>
        <EvpDivider />
        <EvpDivider>我是分界线</EvpDivider>
      </Card>
      <Card>
        <EvpRow>
          <Anchor id='first'>
            <Button mgr_12>To first</Button>
          </Anchor>
          <Anchor id='/components/evp-button' hash>
            <Button>To Button Docs</Button>
          </Anchor>
        </EvpRow>
      </Card>
      <h4>Mobx test :</h4>
      <Card>
        <Button mgr_12
        $click={()=>{
          Toast.info(store.theme);
        }}>Get Theme</Button>

        <Button $click={()=>{
          store.setTheme(store.theme === 'dark' ? 'light' : 'dark');
        }}>Reverse Theme</Button>
      </Card>
      <Card>
        <form>
          <Input required label="用户名" labelWidth={60} />
          <Input required label="密码" labelWidth={60} />
        </form>
      </Card>
    </div>
  )
}