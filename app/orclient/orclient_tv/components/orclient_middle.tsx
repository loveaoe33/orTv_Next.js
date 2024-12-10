"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { Props } from "next/script";
import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import axios, { AxiosResponse } from 'axios';




interface IData {
  [key: string]: any;
}

interface PatientData {

  id: number;
  Patient_Number: string;
  Patient_Name: string;
  Patient_Gender: string;
  Patient_Status: string;

}


interface ApiResponse<T> {
  data?: T;
  message: string;

}


const Orclient_Middle: React.FC = (props) => {
  const [data, setData] = useState<IData>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [apiTitle, setUrl] = useState<string | null>("localhost:8090//orTvController");
  const [maquee, setMaquee] = useState<string | null>("");
  const [patientArray, setPatientArray] = useState<PatientData[] | null>(null);
  // type Option="Patient"|"Maquee"
  // const fetchPatient = async()=>{
  // try{
  //  const response:AxiosResponse<IData>=await axios.get(`${apiTitle}//getPatient`);
  //  if(response.status==200){
  //   setData(response);
  //  }else{
  //   throw new Error("Patient獲取錯誤!");
  //  }
  // }catch{
  //   alert("Patient獲取錯誤");
  // }finally{
  //   setLoading(false);

  // }
  // }

  const PaitenNameProcess = (data: Array<PatientData>) => {
    if (data.length > 0) {
      data.forEach((element) => {
        element.Patient_Name.slice(0, 1) + "O" + element.Patient_Name.slice(2);
        alert( element.Patient_Name);
      });
      setPatientArray(data);
      console.log("123"+patientArray);
    }

  }


  const handlLogic = (Data: Array<PatientData>): void => {
    PaitenNameProcess(Data);
  }

  const FetchPatietn = async () => {
    try {

      // const [response_Patient,response_Maquee ]=await Promise.all([
      //   fetch('/api/orclient_patient_api'),
      //   fetch('/api/orclient_maquee_api'),
      // ])
      const response_Patient = await fetch('/api/orclient_patient_api')
      if (!response_Patient.ok) {
        throw new Error("patientAPI呼叫錯誤!請聯絡....");
      }
      const result_Patient: ApiResponse<PatientData[]> = await response_Patient.json();

      if (response_Patient.status === 200 && result_Patient.data) {  //帶入跑馬燈與病歷資料
        //*
        handlLogic(result_Patient.data);      //
        console.log();
        return;
      }
      alert("getPatienError");

    } catch (error) {
      console.log(`API錯誤:${error}`);

    }

  }

  useEffect(() => {
    FetchPatietn();
    // fetch('/api/orclient_patient_api').then((response)=>response.json()).then((data)=>{ alert(data.message); });
    const time = setInterval(() => {
      FetchPatietn();
    }, 60000)
    return () => { clearInterval(time); }
  }, []);


  return (
    <main><div className="Orclient_Middle_Left"><iframe width="950" height="730" src="https://www.youtube.com/embed/m_dhMSvUCIc?autoplay=1" title="LIVE：TVBS NEWS網路獨家新聞24小時直播 Taiwan News 24hr 台湾世界中のニュースを24時間配信中 대만24시간뉴스채널 55台" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div><div className="Orclient_Middle_Right"><div className="Orclient_Middle_Right_Patient_schedule">手術進度</div><div className="Orclient_Middle_Right_Patient"><div className="Orclient_Middle_Right_Patient_Name">李O林</div>    <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "#9932cc" }}>女</div>    <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "#32cd32" }}>準備中</div></div><div className="Orclient_Middle_Right_Patient"><div className="Orclient_Middle_Right_Patient_Name">李O強</div>    <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "blue" }}>男</div>    <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "red" }}>手術進行中</div></div>   <div className="Orclient_Middle_Right_Patient"><div className="Orclient_Middle_Right_Patient_Name">李O發</div>    <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "blue" }}>男</div>   <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "black" }}>手術結束</div></div>   </div></main>

  );

}

export default Orclient_Middle;
