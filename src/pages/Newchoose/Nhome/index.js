import { useState, useEffect } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import { nChoose } from '@/services/ant-design-pro/api';
import Nchoose from './Nchoose';

function Nhome(){
  const [ts,setts] = useState(null)
  const Click = async () => {
    try {
      const data = {};
      const ava = await nChoose({ ...data })
      if(ava.status){
        console.log(ava.data.msg[0])
        setts(ava.data.msg[0])
      }
    } catch (error) {
      console.log(error)
    }
  };
  
  return(
    <>
      <Button type="primary" onClick={Click}>点我获取题目</Button> 
      {ts?<Nchoose qba={ts}/>:null}
    </>
  )
}

export default Nhome;