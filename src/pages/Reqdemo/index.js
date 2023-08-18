import { reqDemo } from '@/services/ant-design-pro/api';
import { Button } from 'antd';
import { useState } from 'react';
import Choose from '../Choose';
function Reqdemo(){
  const [ts,setts] = useState(null)
  const Click = async () => {
    try {
      const data = {};
      const ava = await reqDemo({ ...data })
      if(ava.success){
        setts(ava.data.qb)
      }
    } catch (error) {
      message.error('error');
    }
  };
  return(
    <>
    <Button type="primary" onClick={Click}>点我获取题目</Button>
    {ts?<Choose qba={ts}/>:null}
    </>
  ) 
}


export default Reqdemo

