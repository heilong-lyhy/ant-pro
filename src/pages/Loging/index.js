import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
function Loging({loginuser,Click,login,handleusernamechange,handlepasswordchange}){
  return(
    <>
    <Input placeholder="输入您的用户名" prefix={<UserOutlined />} value={loginuser.username} onChange={handleusernamechange}/>
    <Input.Password
      placeholder="输入您的密码"
      prefix={<UserOutlined />}
      value={loginuser.password} onChange={handlepasswordchange}
    />
    <Button type="primary" onClick={Click}>注册</Button>
    <Button type="primary" onClick={login}>登录</Button>
    </>
  )
}
export default Loging;