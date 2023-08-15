import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
function Signin(){
  return(
    <>
    <Input placeholder="输入您的用户名" prefix={<UserOutlined />} value={user.username}/>
    <Input.Password
      placeholder="输入您的密码"
      prefix={<UserOutlined />}
      value={user.password}
    />
    </>
  )
}
export default Signin;