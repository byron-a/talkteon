import Image from "next/image";
import Link from "next/link";
//image;
import podcasting from "../../../public/podHeroCover.png";
import horizontalSpring from "../../../public/horizontalSpring.png";
import spark from "../../../public/Spark.png";
import threeStars from "../../../public/threeStars.png";
import vertSpring from "../../../public/VerticalSpring.png";
//Icons
import uploadCloud from '../../../public/upload-cloud2.png';
import spotifyIcon from '../../../public/spotify.png';
import youtubeIcon from '../../../public/youtube.png';
import googlePodcastIcon from '../../../public/google podcast.png';


export default function HeroPod(){
    
    return(
        <section className="h-fit">
        <Image src={horizontalSpring} alt="vector Spring"  className=" absolute -left-[11.5em] top-[1.7em] w-[27em] "/>
        <div className="bg-indigo-950 pt-4">
            <div className="flex place-items-center justify-between p-28 h-fit">
                <div className="w-2/5">
                    <div className="text-slate-200">
                        <h1 className="text-4xl mb-2 font-medium">Discover, Listen, Engage. <br/>Your Podcast Journey Starts Here.</h1>
                        <div className=" border-2 border-red-950 rounded mb-2"/>
                        <p className="mb-2">Join our platform to share your stories, insights, and creativity with a global audience. Submit your podcast today</p>
                    </div>
                    <button className="bg-slate-200 border border-slate-200 py-1 px-4 rounded-3xl text-slate-900 flex place-items-center gap-1 mt-4">
                        <Image
                        src={uploadCloud}
                        alt="upload cloud"
                        />
                        <span className="text-sm">Explore Podcasts</span>
                    </button>
                </div>
                <div className="relative">
                    <Image src={spark} alt="spark image" className="absolute -top-[8%] -left-[8%] w-[fit]"/>
                    <Image src={threeStars} alt="three stars" className="absolute -top-[2%] -right-[18%] w-[13%]"/>
                    <div>
                        <Image src={podcasting} alt="podcast image" className="podCasting float-end w-[full]"/>
                        <div className="flex space-x-2 absolute right-8 top-6">
                            <Link href='#'><Image src={spotifyIcon} alt="spotify icon" className="w-6"/></Link>
                            <Link href='#'><Image src={googlePodcastIcon} alt="google Podcast Icon" className="w-6"/></Link>
                            <Link href='#'><Image src={youtubeIcon} alt="youtube Icon" className="w-6"/></Link>
                        </div>
                    </div>
                    <Image src={vertSpring} alt="vertical spring image" className="w-[fit] absolute -bottom-[44%] -right-[13%]"/>
                </div>
            </div>
        </div>
        </section>
        
    )
}