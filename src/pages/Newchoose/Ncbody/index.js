import { Radio } from 'antd';
import { useState } from 'react';
function Ncbody({torf,question,a}){
  const [value, setValue] = useState('');
  function check(){
    if(torf){
      if(question.answer===value){
        return <h5>正确!答案是：{question.answer}</h5>
      }else{
        return <h5>错误!答案是：{question.answer}</h5>
      }
    }
  }
  const onChange = (e) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return(
    <>
      <h4>{a}:{question.quest}</h4>  
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={'A'}>{question.a}</Radio><br/>
        <Radio value={'B'}>{question.b}</Radio><br/>
      </Radio.Group><br/>
      {check()}
    </>
    
  )
}
export default Ncbody;