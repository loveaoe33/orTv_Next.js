"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { Props } from "next/script";
import React, { useEffect, useState } from 'react';
import logo from "../image/logo.jpg";




const Orclient_Head: React.FC=(props)=>{
  const [currentDate,setCurrentDateTime] =useState<Date>(new Date());
  useEffect(()=>{
    const time=setInterval(()=>{
      setCurrentDateTime(new Date);
    },1000)
    console.log('Component mounted on client');
  },[]);


  const formattedTime=`${currentDate.toLocaleDateString()}-${currentDate.toLocaleTimeString()}`;
  return (
    <main><div className="Orclient_Head_Left"    ><Image className="Logo" src={logo} alt="Logo" width={100} height={80} /><span className="Left_Text">重仁骨科醫院<br/></span><span className="Left_English">(Chugnjen-Orthopaedic-Hospital)</span></div><div className="Orclient_Head_Right">{formattedTime}</div></main>    

  );

}

export default Orclient_Head;
