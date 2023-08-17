import { useState } from 'react';
import Loging from '../Loging';
import Signup from '../Signup';
import { useImmer } from 'use-immer';
import { Button, Input } from 'antd';
import Reqdemo from '../Reqdemo';
import { set } from 'lodash';
function Signin(){
  const [inorup,setinorup] = useState(false)
  const [islog,setislog] = useState(false)
  // const [userlist,setuserlist] = useState(null)
  const [userlist,updatauserlist] = useImmer([])
  const [user,updateUser] = useImmer({
    username:null,
    password:null
  });
  const [loginuser,updateloginUser] = useImmer({
    username:null,
    password:null
  });
  function handleusernamechange(e){
    updateUser(draft => {
      draft.username = e.target.value
    })
  }
  function handlepasswordchange(e){
    updateUser(draft => {
      draft.password = e.target.value
    })
  }
  function handleloginusernamechange(e){
    updateloginUser(draft => {
      draft.username = e.target.value
    })
  }
  function handleloginpasswordchange(e){
    updateloginUser(draft => {
      draft.password = e.target.value
    })
  }
  function Click(){
    setinorup(!inorup)
  }
  function back(){
    setinorup(!inorup)
    // setuserlist(user)
    updatauserlist(draft => {
      draft.push(user)
    })
  }
  function log(){
    const result = userlist.filter(nameandword => nameandword.username == loginuser.username && nameandword.password == loginuser.password)
    if(result[0]!=undefined){
      alert('登录成功')
      setislog(true)
    }else{
      alert('登录失败')
    }
  }
  function signing(){
    if(inorup){
      return <Signup user={user} handleusernamechange={handleusernamechange} handlepasswordchange={handlepasswordchange} back={back} />
    }else{
      return <Loging loginuser={loginuser} Click={Click} login={log} handleusernamechange={handleloginusernamechange} handlepasswordchange={handleloginpasswordchange} />
    }
  }
  function page(){
    if(islog){
      return <Reqdemo />
    }else{
      return(signing()) 
    }
  }
  return(
    <>
    {page()}
    </>
  )
}
export default Signin;