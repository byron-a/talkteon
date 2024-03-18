import Image from "next/image";
//Image
import meetGroup from "../../../../../public/dashMeeting.png";
import videoIcon from "../../../../../public/dashvideoIcon.png";
import taskPlan from "../../../../../public/dashtaskIcon.png"

const MeetDBoard = ({userName}:{userName:string}) => {
  return (
    <section className="w-full h-[40%]">
        <div className="w-full px-5 py-5 h-full">
          <div className="bg-[#31364e] flex rounded-xl ">
              <div className="text-slate-200 bg-[url('/dashVector.png')] z-10 flex place-items-center">
                <div className="p-4"> 
                    <h1 className="font-medium text-xl mb-2">Welcome {userName}!</h1>
                    <p className="text-xs mb-[10%]">Schedule meeting and invite your colleagues and friends<br/> to Talkteon</p>
                    <div className=" flex space-x-2">
                      <button className="border py-1 px-2 text-sm rounded-lg flex items-center space-x-1"><Image src={videoIcon} alt="" /> <span>Start Meeting</span></button>
                      <button className="border py-1 px-2 text-sm rounded-lg flex items-center space-x-1"><Image src={taskPlan} alt="" /> <span>Plan Meeting</span></button>
                    </div>
                </div>    
              </div>
              <div className="bg-dashStripe2 bg-right-top z-0 w-[310px] h-auto absolute left-[450px]">
                  <Image src={meetGroup} alt="meet image" className="mdlg:ml-16"/>
              </div>
          </div>
        </div>
        
    </section>
  )
}

export default MeetDBoard;
