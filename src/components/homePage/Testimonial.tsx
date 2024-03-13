import Image from "next/image";
import meeting from "../../../public/meetingFrame.png";

export default function Testimonial(){

    return(
        <section className="bg-white px-24 flex place-items-center gap-x-20">
            <div className="w-1/2">
                <div>
                    <Image src='/TrendTeon Logo.png' alt="trendteon logo" width={40} height={30}/>
                </div>
                <div className="mt-1">
                <Image src='/starRating.png' alt="star rating" width={90} height={15}/>
                </div>
                <div className="mt-2">
                    <p className="text-sm font-medium">Talkteon has upgraded our remote meetings, high-quality video, screen sharing and top-notch security, making it essential for out team. </p>
                </div>
                <div className="flex mt-4 place-items-center">
                    <div>
                    <Image src='/Ellipse 8Testimonial(1).png' alt="profile 1" width={36} height={36}/>
                    </div>
                    <div className="ml-2">
                        <h4 className="text-sm font-medium">Damiola Adegoke</h4>
                        <p className="text-[10px]">Human Resource Officer.</p>
                    </div>
                </div>
                <div className="mt-3">
                <button className="bg-slate-800 border border-slate-800 py-1 px-6 rounded-3xl text-slate-200 ">Starting a Video Conference</button>
                </div>
            </div>
            <div>
                <Image src={meeting} alt="meeting image"/>
            </div>
        </section>
    )
}