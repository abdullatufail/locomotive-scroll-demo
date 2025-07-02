import Image from 'next/image'
import React from 'react'

const SecondSection = () => {
  return (
    <div className='cont w-full h-full flex flex-col items-center'>
        <h1 data-scroll data-scroll-speed="0.3" data-scroll-target=".cont" data-scroll-offset="300"  className="font-perfectly-nineties text-7xl ">
            Data Scroll & ScrollTrigger
          </h1>
         <div className=" center-img w-[17%] h-[50%]  ">
         <Image src={"/2.png"} alt="center-img" width={1000} height={1000} className="w-full h-full object-cover"></Image>
</div>

    </div>
  )
}

export default SecondSection