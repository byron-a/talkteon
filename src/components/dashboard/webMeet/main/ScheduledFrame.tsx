"use client"
import Link from "next/link";
import Image from "next/image";
//hook
import { useState, useRef } from "react";
//component
import MeetThumb from "./MeetThumb"; 
//image
import settingShcd from "../../../../public/settingFrame2.png";
import edit from "../../../../public/edit.png";
import deletImg from "../../../../public/trash.png";

const webData = {
   Id: 1,
   startTime:"10:00pm",
   endTime:"2:00am",
   title:"Talkteon Design Meeting",
   host:"Byron"
}

const ScheduledMeet = () => {
    const [upComingMeet, setUpComingMeet] = useState([webData, webData, webData,webData,webData,webData,webData,webData,webData, webData, webData,webData,webData,webData]);
    const ref = useRef();
    

  function handleEdit(e:any,refOption:any){
     const target = e.target.offsetParent.lastChild;
    //  const trgtId = "e"+key;
    //  const elemt = target.id;
    //  target.classList.toggle('hidden')
    //  setSchdEdit(!schdEdit)
     console.log(target)
     return refOption.current.clickHandle() 
  }

  return (
    <section className="pl-5 pr-2 h-full w-full overflow-hidden">
        <div className="w-full h-full">
            <div className="border h-full rounded-xl p-3">
                <div>
                    <h2>Upcoming Meetings</h2>
                </div>

                <div className={`z-0 mt-2 w-full h-full flex flex-col gap-2 ${upComingMeet.length > 4 && 'overflow-y-scroll'}`}>
                    {upComingMeet.length > 0 ? upComingMeet.map((meeting,key)=>{
                        return(
                            <MeetThumb key={key} 
                            indxId={key+1}
                            meeting={meeting}
                            handleEdit={handleEdit}
                            />
                        )
                    }):<p className="text-sm text-slate-500 mt-4">No Meeting Available at the Moment.</p>}
                </div>
                
            </div>
        </div>
    </section>
    
  )
}

export default ScheduledMeet;
