'use client';  // 標記為 Client Component
import Image from "next/image";
import { Props } from "next/script";
import React, { useEffect, useState } from "react";


interface MaqueeData {

  id: number;
  Content: string;

}


interface ApiResponse<T> {
  data?: T;
  message: string;

}





const Orclient_Foot: React.FC = (props) => {
  const [maquee, setMaquee] = useState<string | null>("初始化..");


  const MaqueeProcess = (data: Array<MaqueeData>) => {
    if (data.length > 0) {
      let MaqueeString = "1.";
      let i = 1;
      data.forEach((element) => {
        i++
        if (data.length - i > -1) {
          MaqueeString = `${MaqueeString}${element.Content} ${i}.`;
          setMaquee(MaqueeString);

        } else if (data.length - i == -1) {
          MaqueeString = `${MaqueeString}${element.Content}。`;
          setMaquee(MaqueeString);
        }
      })
    }

  }

  const handlLogic = (Data: Array<MaqueeData>): void => {
    MaqueeProcess(Data)
  }


  const FetchMaquee = async () => {
    try {

      // const [response_Patient,response_Maquee ]=await Promise.all([
      //   fetch('/api/orclient_patient_api'),
      //   fetch('/api/orclient_maquee_api'),
      // ])
      const response_MaqueeData = await fetch('/api/orclient_maquee_api')
      if (!response_MaqueeData.ok) {
        throw new Error("patientAPI呼叫錯誤!請聯絡....");
      }
      const result_Maquee: ApiResponse<MaqueeData[]> = await response_MaqueeData.json();

      if (response_MaqueeData.status === 200 && result_Maquee.data) {  //帶入跑馬燈與病歷資料
        //*
        handlLogic(result_Maquee.data);
        console.log(result_Maquee.data)
        //
        return;
      }
      alert("getMaqueeError");

    } catch (error) {
      console.log(`MaqueeAPI錯誤:${error}`);

    }
  }
  useEffect(() => {
    // fetch('/api/orclient_patient_api').then((response)=>response.json()).then((data)=>{ alert(data.message); });
    FetchMaquee();
    const time = setInterval(() => {
      FetchMaquee();
    }, 60000)
    return () => { clearInterval(time); }
  }, []);
  return (
    <main><div className="marquee-Cotntainer"><h1 className="marquee-Text">{maquee}</h1></div></main>

  );

}

export default Orclient_Foot;
