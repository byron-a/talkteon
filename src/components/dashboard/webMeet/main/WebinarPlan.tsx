import Link from "next/link";
import Image from "next/image";
//image
import webPlan from "../../../../../public/webinar.png";

const WebinarPlan = () => {
  return (
    <section className="pl-2 pr-5 w-full h-[48%]">
        <div className="border rounded-lg text-center p-3 h-fit">
            <h2 className="text-xs font-medium tracking-tight">Plan Webinar</h2>
            <p className="text-xxs mt-1 ">Plan a virtual webinar with 2000+ attendees</p>
            <div className="w-full mt-1">
                <Image src={webPlan} alt="" className="w-fit m-auto"/>
            </div>
            <div className="mt-2 h-fit">
                <Link href='#' className="bg-[#31364e] text-white text-xs border border-[#31364e] py-1.5 px-6 rounded-lg">Invite</Link>
            </div>
        </div>
        
    </section>
  )
}

export default WebinarPlan;
