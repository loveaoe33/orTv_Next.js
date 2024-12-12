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
  const [patientArray, setPatientArray] = useState<PatientData[] | null>([]);
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
  const PatienPrint = (): JSX.Element => {
    // 假設 patientArray 是已定義並且是有效的陣列
    return (
     <div>
        {patientArray?.map((item, index) => {
          let result:JSX.Element | string = ""; // 用來存儲每個條件下的結果
  
          // 根據條件來設置 result
          if (item.Patient_Gender === '男生' && item.Patient_Status === '手術進行中') {
            result = (
              <div key={index}>
                <div className="Orclient_Middle_Right_Patient">
                  <div className="Orclient_Middle_Right_Patient_Name">{ item.Patient_Name}</div>
                  <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "blue" }}>男</div>
                  <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "red" }}>手術進行中</div>
                </div>
              </div>
            );
          } else if (item.Patient_Gender === '男生' && item.Patient_Status === '推回病床') {
            result = (
              <div key={index}>
                <div className="Orclient_Middle_Right_Patient">
                  <div className="Orclient_Middle_Right_Patient_Name">{ item.Patient_Name}</div>
                  <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "blue" }}>男</div>
                  <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "green" }}>{ item.Patient_Status}</div>
                </div>
              </div>
            );          } else if (item.Patient_Gender === '男生' && item.Patient_Status === '手術結束') {
              result = (
                <div key={index}>
                  <div className="Orclient_Middle_Right_Patient">
                    <div className="Orclient_Middle_Right_Patient_Name">{ item.Patient_Name}</div>
                    <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "blue" }}>男</div>
                    <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "black" }}>{ item.Patient_Status}</div>
                  </div>
                </div>
              ); } else if (item.Patient_Gender === '男生' && item.Patient_Status === '手術準備中') {
                result = (
                  <div key={index}>
                    <div className="Orclient_Middle_Right_Patient">
                      <div className="Orclient_Middle_Right_Patient_Name">{ item.Patient_Name}</div>
                      <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "blue" }}>男</div>
                      <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "#0072E3" }}>{ item.Patient_Status}</div>
                    </div>
                  </div>
                );          } else if (item.Patient_Gender === '女生' && item.Patient_Status === '手術進行中') {
                result = (
                  <div key={index}>
                    <div className="Orclient_Middle_Right_Patient">
                      <div className="Orclient_Middle_Right_Patient_Name">{ item.Patient_Name}</div>
                      <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "Magenta" }}>女</div>
                      <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "red" }}>{ item.Patient_Status}</div>
                    </div>
                  </div>
                );          } else if (item.Patient_Gender === '女生' && item.Patient_Status === '推回病床') {
                  result = (
                    <div key={index}>
                      <div className="Orclient_Middle_Right_Patient">
                        <div className="Orclient_Middle_Right_Patient_Name">{ item.Patient_Name}</div>
                        <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "Magenta" }}>女</div>
                        <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "green" }}>{ item.Patient_Status}</div>
                      </div>
                    </div>
                  );          } else if (item.Patient_Gender === '女生' && item.Patient_Status === '手術結束') {
            result = (
              <div key={index}>
                <div className="Orclient_Middle_Right_Patient">
                  <div className="Orclient_Middle_Right_Patient_Name">{ item.Patient_Name}</div>
                  <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "Magenta" }}>女</div>
                  <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "black" }}>{ item.Patient_Status}</div>
                </div>
              </div>
            );          }else if (item.Patient_Gender === '女生' && item.Patient_Status === '手術準備中') {
              result = (
                <div key={index}>
                  <div className="Orclient_Middle_Right_Patient">
                    <div className="Orclient_Middle_Right_Patient_Name">{ item.Patient_Name}</div>
                    <div className="Orclient_Middle_Right_Patient_Gender" style={{ color: "Magenta" }}>女</div>
                    <div className="Orclient_Middle_Right_Patient_Status" style={{ color: "#0072E3" }}>{ item.Patient_Status}</div>
                  </div>
                </div>
              );          }
  
          return result; // 回傳處理結果
        })}
    </div>
    );
  };
  


  const PaitetnNameProcess = (data: Array<PatientData>): void => {
      if (data.length > 0) {
        data.forEach((element) => {
          element.Patient_Name=element.Patient_Name.substring(0, 1) + "O" + element.Patient_Name.substring(2);
        });
        setPatientArray(data);
      }

    }


    const handlLogic = (Data: Array<PatientData>): void => {
      PaitetnNameProcess(Data);
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
<main><div className="Orclient_Middle_Left"><iframe width="950" height="730" src="https://www.youtube.com/embed/m_dhMSvUCIc?autoplay=1" title="LIVE：TVBS NEWS網路獨家新聞24小時直播 Taiwan News 24hr 台湾世界中のニュースを24時間配信中 대만24시간뉴스채널 55台" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> </div><div className="Orclient_Middle_Right"><div className="Orclient_Middle_Right_Patient_schedule">手術進度</div>  {PatienPrint()} </div> </main>)
}
export default Orclient_Middle;
