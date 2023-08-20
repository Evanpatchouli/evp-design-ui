import { Color } from "../lib/constant"
import Test from "../test";
import './test.css'

export default function TestViewView() {
  return(
    <div>
      <Test
      class='Test'
      bgColor={Color.HeavyGreen}
      pd={30}
      >Test</Test>
    </div>
  )
}