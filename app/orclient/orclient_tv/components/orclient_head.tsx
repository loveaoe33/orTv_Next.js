import Image from "next/image";
import { Props } from "next/script";
import React, { useEffect, useState } from "react";
import logo from "../image/logo.jpg";




const Orclient_Head: React.FC=(props)=>{
  const [currentDate,setCurrentDateTime] =useState(new Date());
  const Now=()=>{

  }
  useEffect(()=>{

  },[]);
  return (
    <main><div className="Orclient_Head_Left"    ><Image className="Logo" src={logo} alt="Logo" width={100} height={80} /><span className="Left_Text">重仁骨科醫院<br/></span><span className="Left_English">(Chugnjen-Orthopaedic-Hospital)</span></div><div className="Orclient_Head_Right">555</div></main>    

  );

}

export default Orclient_Head;
