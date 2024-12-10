
import { NextApiRequest, NextApiResponse } from 'next';
interface MaqueeData{

id: number;
context: string;

}

interface ApiResponse<T>{
  data?:T;
  message:string;

}

export default async function handle(req: NextApiRequest, res: NextApiResponse){  //
    
   try{
   if(req.method ==="GET"){
    console.log(req.method );
    const patientAip_Url:string="http://192.168.2.147:8083/orClient_Tv_Controller/printMarquee";
    const response=await fetch(patientAip_Url);

    if(!response.ok){
      return res.status(405).json({message:"Fail"});
    }
    const data:MaqueeData[] = await response.json(); 
       console.log(data);

    res.status(200).json({data:data});
   }else{
    res.status(405).json({message:"Method_Error"});
   }

   }catch{

    res.status(500).json({message:"Server_Fail"});

   }

}