"use client"
import Image from "next/image";
import search from "../../../../../public/searchIcon.png";
import { useState } from "react";
import ThumbRecent from "./ThumbRecent";


const recentMeeting ={
  host:"/AsideflowEllipse.png",
  title:"Talkteon Design Meeting",
  finishedTime:"13mins ago",
}
const AsideFlow = () => {
  const [recentCalls, setRecentCalls] = useState([recentMeeting,recentMeeting,recentMeeting,recentMeeting,recentMeeting,recentMeeting]);
  

  function handleClick(editRef:any){
    return editRef.current.clickHandle()
  }

  return (
    <section className="h-[97%]">
        <div className="border rounded-xl p-3 h-full mt-4">
            <div className="flex justify-between ">
                <h2>Recent Calls</h2>
                <div className="flex space-x-2 place-items-center">
                  <input type="search" id="search" className="w-24 border rounded-lg outline-none bg-slate-100 px-2 py-1 text-xs"/>
                  <label htmlFor="search"><Image src={search} alt='search icon' className="-mt-4 hover:cursor-pointer"/></label>
                </div>
                
            </div>
            <div className="flex flex-col space-y-4 mt-9">
                {recentCalls.length >0 ? recentCalls.map((Mcall, index)=> {
                  return(
                    <ThumbRecent
                    key={index}
                    Mcall={Mcall}
                    handleClick={handleClick}

                    />
                  )
                }):<p className="text-sm mt-4 text-slate-500">No Recent Activities</p>}
            </div>
        </div>

        
    </section>
  )
}

export default AsideFlow
