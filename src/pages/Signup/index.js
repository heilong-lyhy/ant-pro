import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useImmer } from 'use-immer';
import { useState } from 'react';
import Signover from '../Signover';
function Signup(){
  const [torf,settorf] = useState(0)
  const [user,updateUser] = useImmer({
    username:null,
    password:null
  });
  function handleusernamechange(e){
    updateUser(draft => {
      draft.username = e.target.value
    })
    // console.log(e.target.value)
  }
  function handlepasswordchange(e){
    updateUser(draft => {
      draft.password = e.target.value
    })
  }
  function Click(){
    if(torf<2){
      settorf(torf+1)
    }else{
      settorf(0)
    }
    // console.log(torf)
  }
  function up(){
    if(torf===0){
      return (
        <>
          <Input placeholder="输入您的用户名" prefix={<UserOutlined />} value={user.username} onChange={handleusernamechange}/>
          <Button type="primary" onClick={Click}>下一步</Button>
        </>
      )
      // return <h1>test</h1>
    }else if(torf===1){
      return(
        <>
          <Input.Password
            placeholder="输入您的密码"
            prefix={<UserOutlined />}
            value={user.password}
            onChange={handlepasswordchange}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <Button type="primary" onClick={Click}>注册</Button>
        </>
      )
    }else{
      return(
        <>
          <Signover data={user}/>
          <Button type="primary" onClick={Click}>返回</Button>
        </>
      )
    }
    
  }
  return(
    <>
    {up()}
    </>
  )
}
export default Signup;