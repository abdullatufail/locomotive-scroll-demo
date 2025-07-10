import { useGSAP } from "@gsap/react";
import gsap, { toArray } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const MiddleSection = () => {
 

  return (
    <div
      
      className="h-[140vh] w-full text-white flex flex-col space-y-2 items-center pt-[50px] relative"
    >
      
      <h1 className="font-perfectly-nineties text-7xl w-[30%] pb-2 text-center ">
        SECTION:02
      </h1>
      
     
      
      <div  className="flex relative items-center w-full gap-10 h-full justify-center ">
       
        <div data-scroll data-scroll-speed="0.1" style={{scale:1.4}} className="absolute blur-sm scale-140 top-[-220px] left-[100px] center-img w-[18%] shadow-2xl h-[50%]  ">
          <Image
            src={"/2.png"}
            alt="center-img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div data-scroll data-scroll-speed="0.3" style={{scale:0.8}} className="absolute top-[-290px] right-[100px] center-img w-[18%] shadow-2xl h-[50%]  ">
          <Image
            src={"/2.png"}
            alt="center-img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div data-scroll data-scroll-speed="0.5" style={{scale:1}} className=" center-img absolute top-0 w-[18%] shadow-2xl h-[50%]  ">
          <Image
            src={"/2.png"}
            alt="center-img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div data-scroll data-scroll-speed="0.27" style={{scale:0.7}} className="blur-md opacity-85 absolute top-[160px] right-[230px]  center-img w-[18%] shadow-2xl h-[50%]  ">
          <Image
            src={"/2.png"}
            alt="center-img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div data-scroll data-scroll-speed="0.31" className="absolute top-[100px] left-[200px] center-img w-[18%] shadow-2xl h-[50%]  ">
          <Image
            src={"/2.png"}
            alt="center-img"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          ></Image>
        </div>
        
      </div>
    </div>
  );
};

export default MiddleSection;
