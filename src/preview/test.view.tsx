import Test from "../test"

export default function TestViewView() {
  return(
    <div style={{border: '1px solid black'}}>
      <Test
      h={100}
      pd_10
      pdt_20
      pdl_40
      pdr_40
      pdr_30
      display='flex'
      alignItems="center"
      not-allowed
      ></Test>
    </div>
  )
}