export default function Card(props: { children: React.ReactNode }) {
  return(
    <div className="evp evp-base-shadow" style={{
      padding: 20
    }}>{
      props.children}
    </div>
  )
}