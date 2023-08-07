function Signover({data}){
  let real = data
  if(real){
  return(
    <>
    <h5>账户:{real.username}</h5>
    <h5>密码:{real.password}</h5>
    </>
  )
  }else{
    return null
  }
}
export default Signover;