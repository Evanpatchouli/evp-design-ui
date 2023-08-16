import EvpButton from "../lib/evp-button";

export default function ButtonView() {
  const alert = (e: any) => {};
  return(
    <div className="preview-container">
      <EvpButton onClick={()=>{
        alert("Click");
      }}>click me</EvpButton>
      <EvpButton type='primary' onClick={()=>{
        alert("Click");
      }}>click me</EvpButton>
      <EvpButton type='danger' onClick={()=>{
        alert("Click");
      }}>click me</EvpButton>
      <EvpButton type='warning' onClick={()=>{
        alert("Click");
      }}>click me</EvpButton>
      <EvpButton type='success' onClick={()=>{
        alert("Click");
      }}>click me</EvpButton>
      <EvpButton type='info' onClick={()=>{
        alert("Click");
      }}>click me</EvpButton>
      <EvpButton type='text' onClick={()=>{
        alert("Click");
      }}>click me</EvpButton>
      <EvpButton type='dark' onClick={()=>{
        alert("Click");
      }}>click me</EvpButton>
    </div>
  )
}