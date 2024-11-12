"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { Props } from "next/script";
import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import axios, { AxiosResponse } from 'axios';




interface IData{
[key:string]:any;
}

const Orclient_Middle: React.FC=(props)=>{
  const [data,setData]=useState<IData>([]);
  const [loading,setLoading]=useState<boolean>(true);
  const [apiTitle,setUrl]=useState<string | null>("localhost:8090//orTvController");

  const fetchPatient = async()=>{
  try{
   const response:AxiosResponse<IData>=await axios.get(`${apiTitle}//getPatient`);
   if(response.status==200){
    setData(response);
   }else{
    throw new Error("Patient獲取錯誤!");
   }
  }catch{
    alert("Patient獲取錯誤");
  }finally{
    setLoading(false);

  }
  }

  useEffect(()=>{
    fetchPatient();
    const time=setInterval(()=>{
      fetchPatient();
    },5000000)
    return()=>{ clearInterval(time);}
  },[]);

  
  return (
    <main><div className="Orclient_Middle_Left"><iframe width="950" height="730"   src="https://www.youtube.com/embed/m_dhMSvUCIc?autoplay=1" title="LIVE：TVBS NEWS網路獨家新聞24小時直播 Taiwan News 24hr 台湾世界中のニュースを24時間配信中 대만24시간뉴스채널 55台" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div><div className="Orclient_Middle_Right"><div className="Orclient_Middle_Right_Patient_schedule">手術進度</div><div className="Orclient_Middle_Right_Patient"><div className="Orclient_Middle_Right_Patient_Name">李O林</div>    <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "#9932cc"}}>女</div>    <div className="Orclient_Middle_Right_Patient_Status" style={{ color:"#32cd32" }}>準備中</div></div><div className="Orclient_Middle_Right_Patient"><div className="Orclient_Middle_Right_Patient_Name">李O強</div>    <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "blue"}}>男</div>    <div className="Orclient_Middle_Right_Patient_Status" style={{ color:"red" }}>手術進行中</div></div>   <div className="Orclient_Middle_Right_Patient"><div className="Orclient_Middle_Right_Patient_Name">李O發</div>    <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "blue"}}>男</div>    <div className="Orclient_Middle_Right_Patient_Status" style={{ color:"black" }}>手術結束</div></div>   </div></main>    

  );

}

export default Orclient_Middle;
