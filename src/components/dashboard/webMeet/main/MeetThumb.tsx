import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
//components
import OptionBtn from "../editState/OptionBtn";
//image
import settingShcd from "../../../../../public/settingFrame2.png";


interface meetData {
    meeting:{
        Id:number;
        startTime:string;
        endTime:string;
        title:string;
        host:string;
    }
    handleEdit : (e:any,key:any)=>void;
    indxId:number;
}

const MeetThumb = ({meeting,handleEdit,indxId}:meetData) => {
   let refOption = useRef(null)

  return (
    <article className="relative w-full flex border rounded-lg ">
        <div className="w-1/5 border-r p-1.5 ">
            <p className="text-xs ml-1">{meeting.startTime}<br/>to {meeting.endTime}</p>
        </div>
        <div className="w-4/5 p-1.5 flex justify-between">
            <div className="ml-2">
                <h3 className="text-xs font-semibold text-slate-500">{meeting.title}</h3>
                <p className="text-xs text-slate-400">host: {meeting.host} </p>
            </div>
            <div className="flex place-items-center space-x-2 w-1/4 justify-end mr-3">
                <Link href='#' className="h-fit text-xs bg-[#31364e] text-white rounded-lg py-1 px-2">start</Link>
                <button onClick={(e)=>handleEdit(e,refOption)}><Image src={settingShcd} alt='option' className="w-[25px] h-[16px]"/></button>
            </div>
        </div>

        {/* Edit behaviour */}
        <OptionBtn ref={refOption}/>
    </article>
  )
}

export default MeetThumb;
