import Image from "next/image";
import  Orclient_Head from "../orclient_tv/components/orclient_head";
import  Orclient_Middle from "../orclient_tv/components/orclient_middle";
import  Orclient_Foot from "../orclient_tv/components/orclient_foot";
import  "./orclient_style.css";
import React, { useEffect, useState } from 'react';

  const Orclient_Main:React.FC=()=>{
  return (
    <main><div className="orClient_Container"><div className="orClient_HeadComponent"><h1><Orclient_Head /></h1></div><div className="orClient_MiddleComponent"><h2><Orclient_Middle /></h2></div><div className="orClient_FootComponent"><h3><Orclient_Foot /></h3></div></div></main>    

  );
}

export default Orclient_Main;
