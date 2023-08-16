import EvpButton from "../lib/evp-button";

export default function ButtonView() {
  return(
    <div className="preview-container">
      <EvpButton type='primary' onClick={()=>{
        alert("Click");
      }}>click me</EvpButton>
    </div>
  )
}