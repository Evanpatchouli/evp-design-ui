import Card from "@/components/card";
import EvpCarrot from "@/lib/evp-carrot";

export default function CarrotView() {



  return(
    <div className="preview-container">
      <Card style={{
        position: 'relative'
      }}>
        <EvpCarrot labelPosition="right">
          <div>this is something</div>
        </EvpCarrot>
        <EvpCarrot labelPosition="left">
          <div>this is something</div>
        </EvpCarrot>
        <EvpCarrot labelPosition="top">
          <div>这是某些文字</div>
        </EvpCarrot>
        <EvpCarrot labelPosition="bottom">
          <div>这是某些文字</div>
        </EvpCarrot>
      </Card>
    </div>
  )
}