import EvpButton from "../lib/evp-button";

export default function ButtonView() {
  const alert = (e: any) => {};
  return(
    <div className="preview-container">
      <EvpButton onClick={()=>{
        alert("Click");
      }}>Default</EvpButton>
      <EvpButton theme='white' onClick={()=>{
        alert("Click");
      }}>White</EvpButton>
      <EvpButton theme='primary' onClick={()=>{
        alert("Click");
      }}>Primary</EvpButton>
      <EvpButton theme='danger' onClick={()=>{
        alert("Click");
      }}>Danger</EvpButton>
      <EvpButton theme='warning' onClick={()=>{
        alert("Click");
      }}>Warning</EvpButton>
      <EvpButton theme='success' onClick={()=>{
        alert("Click");
      }}>Success</EvpButton>
      <EvpButton size="large" theme='info' onClick={()=>{
        alert("Click");
      }}>Info Large</EvpButton>
      <EvpButton size="small" theme='text' onClick={()=>{
        alert("Click");
      }}>Text Small</EvpButton>
      <EvpButton size="middle" theme='dark' onClick={()=>{
        alert("Click");
      }}>Dark Middle</EvpButton>
      <EvpButton size="middle" theme='dark' plain onClick={()=>{
        alert("Click");
      }}>Dark Plain</EvpButton>
      <EvpButton size="middle" theme='primary' plain onClick={()=>{
        alert("Click");
      }}>Primary Plain</EvpButton>
    </div>
  )
}