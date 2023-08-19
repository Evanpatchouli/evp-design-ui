import EvpButton from "../lib/evp-button";
import EvpIcon from "../lib/evp-icon";

export default function ButtonView() {
  const alert = (e: any) => {};
  return(
    <div className="preview-container">
      {/* Default */}
      <EvpButton mg={[20]} onClick={()=>{
        alert("Click");
      }}>Default</EvpButton>
      {/* White */}
      <EvpButton mg={[20]} theme='white' onClick={()=>{
        alert("Click");
      }}>White</EvpButton>
      {/* Primary */}
      <EvpButton mg={[20]} theme='primary' onClick={()=>{
        alert("Click");
      }}>Primary</EvpButton>
      {/* Danger */}
      <EvpButton mg={[20]} theme='danger' onClick={()=>{
        alert("Click");
      }}>Danger</EvpButton>
      {/* Warning */}
      <EvpButton mg={[20]} theme='warning' onClick={()=>{
        alert("Click");
      }}>Warning</EvpButton>
      {/* Success */}
      <EvpButton mg={[20]} theme='success' onClick={()=>{
        alert("Click");
      }}>Success</EvpButton>
      {/* Info Large */}
      <EvpButton mg={[20]} size="large" theme='info' onClick={()=>{
        alert("Click");
      }}>Info Large</EvpButton>
      {/* Info Small */}
      <EvpButton mg={[20]} size="small" theme='info' onClick={()=>{
        alert("Click");
      }}>Info Small</EvpButton>
      {/* Info Mini */}
      <EvpButton mg={[20]} size="mini" theme='info' onClick={()=>{
        alert("Click");
      }}>Info Mini</EvpButton>
      {/* Text */}
      <EvpButton mg={[20]} size="middle" theme='text' onClick={()=>{
        alert("Click");
      }}>Text</EvpButton>
      {/* Dark Middle*/}
      <EvpButton mg={[20]} size="middle" theme='dark' onClick={()=>{
        alert("Click");
      }}>Dark Middle</EvpButton>
      {/* Dark Huge*/}
      <EvpButton mg={[20]} size="huge" theme='dark' onClick={()=>{
        alert("Click");
      }}>Dark Huge</EvpButton>
      {/* Dark Plain */}
      <EvpButton mg={[20]} size="middle" theme='dark' plain onClick={()=>{
        alert("Click");
      }}>Dark Plain</EvpButton>
      {/* Primary Plain */}
      <EvpButton mg={[20]} size="middle" theme='primary' plain onClick={()=>{
        alert("Click");
      }}>Primary Plain</EvpButton>
      {/* Primary Plain Round */}
      <EvpButton mg={[20]} size="middle" theme='primary' plain shape="round" onClick={()=>{
        alert("Click");
      }}>Primary Plain Round</EvpButton>
      {/* Dark Plain Circle */}
      <EvpButton mg={[20]} size="mini" theme='dark' plain shape="circle" onClick={()=>{
        alert("Click");
      }}>
        B
      </EvpButton>
      {/* Dark Plain Circle */}
      <EvpButton mg={[20]} size="middle" theme='dark' plain shape="circle" onClick={()=>{
        alert("Click");
      }}>
        B
      </EvpButton>
      {/* Dark Plain Circle */}
      <EvpButton mg={[20]} size="huge" theme='primary' plain shape="circle" onClick={()=>{
        alert("Click");
      }}>
        <EvpIcon name="waterfalls_h" />
      </EvpButton>
    </div>
  )
}