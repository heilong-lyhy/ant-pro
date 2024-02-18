import { useState } from 'react';
import { Button } from 'antd';
import Ncbody from '../Ncbody';



function Nchoose({qba}){
  const [torf,settorf] = useState(false)
  if(qba){
    const question_bank = qba
    let thao = 0
    function handleClick(){
      settorf(!torf)
    }
    const question =question_bank.map(qb => 
    <Ncbody question={qb} torf={torf} a={thao = thao+1} key={qb.id}/>)
    return(
      <>
      {question}
      <Button type="primary" onClick={handleClick}>点击查看答案</Button>
      </>
    )
  }else{
    return null
  }
}
  
export default Nchoose;