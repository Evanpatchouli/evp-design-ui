import Card from '@/components/card'
import './test.css'

export default function TestViewView() {

  return(
    <div className="Test">
      <h4>圆形 ( circle )</h4>
      <div className="evp evp-base-shadow">
        <svg version='1.1'>
          <circle  // circle 是原点
          cx={50}  // x 坐标
          cy={50}  // y 坐标
          r={40}  // 半径
          strokeWidth={1}  // 描边宽度
          stroke='#000'  // 描边颜色
          fill='none'  // 封闭图形的填充颜色
        />
        </svg>
      </div>
      <h4>矩形 ( rect )</h4>
      <Card>
        <svg version='1.1'>
          <rect 
          width={60}
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
    </div>
  )
}