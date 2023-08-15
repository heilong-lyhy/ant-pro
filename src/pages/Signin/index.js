import { useState } from 'react';
import Loging from '../Loging';
import Signup from '../Signup';
import { useImmer } from 'use-immer';
import { Button, Input } from 'antd';
function Signin(){
  const [inorup,setinorup] = useState(false)
  const [userlist,setuserlist] = useState(null)
  // const [userlist,updatauserlist] = useImmer([])
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
    setuserlist(user)
    // updatauserlist(draft => {
    //   draft.push(user)
    // })
  }
  function log(){
    // const result = userlist.filter(nameandword => nameandword == loginuser)
    if(user.username == loginuser.username && user.password == loginuser.password){
      alert('登录成功')
    }else{
      alert('登录失败')
      console.log(user)
    }
  }
  function page(){
    if(inorup){
      return <Signup user={user} handleusernamechange={handleusernamechange} handlepasswordchange={handlepasswordchange} back={back}></Signup>
    }else{
      return <Loging loginuser={loginuser} Click={Click} login={log} handleusernamechange={handleloginusernamechange} handlepasswordchange={handleloginpasswordchange}></Loging>
    }
  }
  return(
    <>
    {page()}
    </>
  )
}
export default Signin;