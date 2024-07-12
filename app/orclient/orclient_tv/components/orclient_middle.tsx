"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { Props } from "next/script";
import React from "react";
import YouTube from 'react-youtube';




const Orclient_Middle: React.FC=(props)=>{
  return (
    <main><div className="Orclient_Middle_Left"><iframe width="560" height="315" src="https://www.youtube.com/watch?v=8DYQctIo5s0" title="YouTube video player" frameBorder="0" allowFullScreen ></iframe><h1>this is or Orclient_Middle</h1></div><div className="Orclient_Middle_Right">555</div></main>    

  );

}

export default Orclient_Middle;
