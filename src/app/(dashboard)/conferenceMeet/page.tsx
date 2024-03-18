 import MeetDBoard from "@/components/dashboard/webMeet/main/DshBoardMeet";
 import AsideFlow from "@/components/dashboard/webMeet/asideBar/AsideFlow";
 import ProfileNav from "@/components/dashboard/webMeet/main/ProfileNav";
 import ScheduledMeet from "@/components/dashboard/webMeet/main/ScheduledFrame";
 import AccUpgrade from "@/components/dashboard/webMeet/main/AccUpgrade";
 import WebinarPlan from "@/components/dashboard/webMeet/main/WebinarPlan";
 
 export default function ConferenceMeet(){
    
    return(
        <main className="h-screen w-full">
            <ProfileNav />
            <div className="flex justify-between ml-[90.08px] h-[90vh] pb-4 rounded-b-xl">
                <div className="w-[70%] h-full">
                    <MeetDBoard userName='Byron'/>

                    <div className="flex w-full h-[60%]">
                       <div className="w-[65%] h-full">
                           <ScheduledMeet />
                       </div>
                       <div className="w-[35%] h-full flex flex-col space-y-[4%]">
                           <AccUpgrade />
                           <WebinarPlan />
                       </div>
                    </div>
                </div>
                <div className="w-[30%] pr-5 h-full">
                    <AsideFlow />
                </div>   
            </div>
            
        </main>
    )
 }