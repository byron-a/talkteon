import Image from "next/image";
import conferenceImage from '../../../public/team-meeting-online-conference-call 1.png';

export default function Hero(){
    return(
        <section className="bg-[url('/Group1.png')] welcomeBanner w-full">
          <div className="p-14 flex justify-between gap-2 place-items-center  h-auto">
            <div className="w-2/5">
              <div className="mb-4">
                <h1 className="text-3xl text-slate-100 mb-2">Welcome to Talkteon, Connecting Conversations, Uniting Voices</h1>
                <p className="text-slate-100 w-3/4">Elevate your Engagement with Seamless Video Conferencing and Captivating Podcasts</p>
              </div>
              <div className="flex gap-3 place-items-center my-5">
                <button className="border border-slate-200 py-1 px-3 rounded-2xl bg-slate-200 ">Start Conferencing</button>
                <button className="border border-slate-200 py-1 px-6 rounded-2xl text-slate-200 ">Podcast</button>
              </div>
              <div className="flex gap-3 place-items-center ">
                <div className="ml-2">
                  <div className="flex">
                    <Image src='/Ellipse 1.png' alt="profile 1" width={36} height={36}/>
                    <Image src='/Ellipse 2.png' alt="profile 2" width={36} height={36}/>
                    <Image src='/Ellipse 3.png' alt="profile 3" width={36} height={36}/>
                    <Image src='/Ellipse 4.png' alt="profile 4" width={36} height={36}/>
                    <Image src='/Ellipse 5.png' alt="profile 5" width={36} height={36}/>
                    <Image src='/Ellipse 6.png' alt="profile 6" width={36} height={36}/>
                  </div>
                </div>
                <div className="">
                  <div><Image src='/starRating.png' alt="star rating" width={90} height={15}/></div>
                  <p className="text-slate-200 text-[10px] mt-1">from 2500+ reviews</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="float-end"><Image src={conferenceImage} alt="conference image" className="w-full"/></div>
            </div>
          </div>
      </section>
    )
}