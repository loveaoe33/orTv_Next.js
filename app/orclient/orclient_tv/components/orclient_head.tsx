"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { Props } from "next/script";
import React, { useEffect, useState } from 'react';
import logo from "../image/logo.jpg";




const Orclient_Head: React.FC=(props)=>{
  const [currentDate,setCurrentDateTime] =useState<Date>(new Date());
  const [ IsHydrated,setIsHydrated]=useState<boolean>(false);
  
  const day:string[]=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysWeek:string=day[currentDate.getDay()];

  const caseDay = (dayOfWeek:string) => {
  switch (dayOfWeek) {
    case "Sunday":
      return "星期日";
    case "Monday":
      return "星期一";
    case "Tuesday":
      return "星期二";
    case "Wednesday":
      return "星期三";
    case "Thursday":
      return "星期四";
    case "Friday":
      return "星期五";
    case "Saturday":
      return "星期六";
    default:
      return "None"; // 如果沒有匹配到任何情況，可以返回空字符串或者其他預設值
  }
};


  useEffect(()=>{
    setIsHydrated(true);
    const time=setInterval(()=>{
      setCurrentDateTime(new Date);
    },1000)
    return () => { clearInterval(time); }
  },[]);

  

  const formattedTime= currentDate?`${currentDate.toLocaleDateString()}-${caseDay(daysWeek)}-${currentDate.toLocaleTimeString()}`:"";


  if(!IsHydrated){

    return <div>Loading...</div>
  }
  return (
    <main><div className="Orclient_Head_Left"    ><Image className="Logo" src={logo} alt="Logo" width={100} height={80} /><span className="Left_Text">重仁骨科醫院<br/></span><span className="Left_English">(Chugnjen-Orthopaedic-Hospital)</span></div><div className="Orclient_Head_Right">{formattedTime}</div></main>    

  );

}

export default Orclient_Head;
