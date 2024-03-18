import { useRef } from "react";
import Image from "next/image";
import option from "../../../../../public/settingFrame2.png";
import OptionAsideBtn from "../editState/OptionAsideBtn";

type calls = {
    Mcall:{
        host:string;
        title:string;
        finishedTime:string;
    },
    handleClick:(e:any)=>any;
}
const ThumbRecent = ({Mcall, handleClick}:calls) => {
  let editRef = useRef(null);

  return (
    <div className="relative flex justify-between place-items-start">
       <div>
          <Image src={Mcall.host} alt="host img" width={36} height={36} className="w-9 h-9 border rounded-full float-left bg-slate-100"/>
          <div className="float-right ml-1">
            <h3 className="text-sm font-medium text-slate-600">{Mcall.title}</h3>
            <p className="text-xs text-slate-500">{Mcall.finishedTime}</p>
          </div>
          
       </div>
       <button onClick={()=>{handleClick(editRef)}}><Image src={option} alt="options" className="w-[25px] h-[16px] mt-1"/></button>

       {/* Edit component */}
    <OptionAsideBtn ref={editRef}/>
    </div>

    

    
  )
}

export default ThumbRecent;
