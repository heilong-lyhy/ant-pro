import request from '@/utils/request';
export async function queryTest(params){
    request('/api/invoke?eid=STATE&user=joe&password=123&$apiMethod=executeSQL&sql=SELECT top 1 FID,FNumber,FName_L2 FROM T_PM_USER',
  {
    method: 'GET',
    params : params
  });
}