"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { Props } from "next/script";
import React from "react";
import YouTube from 'react-youtube';




const Orclient_Middle: React.FC=(props)=>{
  return (
    <main><div className="Orclient_Middle_Left"><iframe width="950" height="680" src="https://www.youtube.com/embed/oIgbl7t0S_w?&autoplay=1" title="【#中天新聞不斷電直播Live】 CTI中天新聞24小時HD新聞直播 │ CTITV Taiwan News HD Live｜台湾のHDニュース放送｜ 대만 HD 뉴스 방송 @中天電視CtiTv" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div className="Orclient_Middle_Right">555</div></main>    

  );

}

export default Orclient_Middle;
