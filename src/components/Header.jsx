import React, { useState } from "react";
import { SiGooglemeet } from "react-icons/si";
import { HiLightBulb } from "react-icons/hi";
import MeetModal from "./child/MeetModal";
import HowweWorks from "./child/HowweWorks";
const Header = () => {
  const [visible ,setVisible ] = useState(false)
  const [processvisible ,setProcessvisible ] = useState(false)
  return (
  
     <div className="bg-[url('https://www.simscale.com/wp-content/uploads/2023/01/wave-transparent-background.png')] bg-cover  w-full min-h-[100vh]  flex items-center max-h-screen py-16  bg-no-repeat bg-right-top">
      <div className="max-w-[1440px] w-full mx-auto p-4  flex flex-between items-center ">
        {/* Content */}

        {/* Text */}
        <div className="w-full">
          <p className="text-xl mb-2 px-2 bg-gray-100 max-w-max rounded-md text-blue-900 font-bold">
            AxomSoft
          </p>
          <h1 className="text-5xl text-h-title font-extrabold text-blue-900 ">
            Providing unparalleled IT business solution to maximum satisfaction
          </h1>
          <div className="flex gap-6 mt-6">
            <button onClick={() => setProcessvisible(true)} className="bg-[#ffdc60] hover:shadow-lg duration-300 text-blue-900 flex items-center gap-2 text-[18px] px-4 py-2 rounded-md">
              <HiLightBulb className="text-[#2a3856] text-xl" /> 
              How we works?
            </button>
            <button onClick={() => setVisible(true)} className="bg-[#89cefb]   hover:shadow-lg duration-300 text-[18px] flex items-center gap-2 px-4 py-2 rounded-md">
              <SiGooglemeet className="text-[#2a3856] " /> Book a Schedule
            </button>
          </div>
        </div>
        {/* Animation */}
        <div className="bg-blck w-full  flex justify-end relative">
          <img
            className="!w-[900px] -mr-[90px] "
            src="https://matlensilver.com/wp-content/uploads/2021/07/IT-Staffing.gif"
            alt=""
          />
        </div>
      </div>
      <MeetModal actions={{visible , setVisible}} />
      <HowweWorks actions={{processvisible ,setProcessvisible}}/> 
    </div>
 
  );
};

export default Header;
