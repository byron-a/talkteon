import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";

//images
import podcasting from "../../../public/podHeroCover.png";
import horizontalSpring from "../../../public/horizontalSpring.png";
import spark from "../../../public/Spark.png";
import threeStars from "../../../public/threeStars.png";
//Icons
import uploadCloud from '../../../public/upload-cloud2.png';
import spotifyIcon from '../../../public/spotify.png';
import youtubeIcon from '../../../public/youtube.png';
import googlePodcastIcon from '../../../public/google podcast.png';
import googleIcon from '../../../public/SocialGoogleicon.png';

const PodDLogin = () => {
  return (
    <main >
      <section className="h-[100vh] w-full relative">
        <Image src={horizontalSpring} alt="vector Spring"  className=" absolute -left-[11.5em] top-[1.7em] w-[27em] "/>
        <div className="bg-indigo-950 pt-4 h-full">
            <div className="flex place-items-center justify-between p-20 h-fit">
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
                </div>
            </div>
        </div>
        <div className="absolute top-0 w-full h-full bg-[rgb(0,0,0,0.6)] flex items-center">
        <div className="m-auto px-10 py-6 flex flex-col rounded-md items-center h-fit w-fit space-y-3 bg-white">
                <h2 className="font-bold text-2xl self-start">Login</h2>
                <p className="text-[12px] text-slate-500 self-start">Welcome back! please enter your details.</p>
                <div>
                    <form action="" className="flex flex-col">

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email-address" placeholder="Enter your Email" />
                        <p className="text-[11px] text-slate-500 ml-1 ">Enter your registered email address</p>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="pass-word" placeholder="Enter Password" />
                        <div className="flex justify-between place-items-center mt-3">
                            <div className="">
                                <input type="checkbox" id="passR" name="retain passcode" />
                                <label htmlFor="passR" className="text-[11px] ml-1 font-bold ">Remember for 30 days</label>
                            </div>
                            <a href="/forgotPassword"><p className="text-[11px] text-slate-500 font-bold ">Forgot Password?</p></a>
                        </div>
                        
                        <input type="button" value="sign in" className="border border-slate-800 rounded-full py-2 text-sm bg-slate-800 text-slate-200 mt-6 font-medium hover:cursor-pointer"/>
                    </form>
                        <div className="text-center border border-slate-100 rounded-full py-1.5 text-sm bg-slate-100 text-slate-500 mt-4">
                            <Link href="#" className="flex space-x-1 items-center w-fit m-auto"><Image src={googleIcon} alt="google icon"/> <span className="font-medium text-sm">Sign in with Google</span> </Link>
                        </div>
                </div>
                <div>
                    <p className="text-[11px] text-slate-500">Don&apos;t have an account? <Link href='/signUp' className="font-semibold text-slate-600">Sign Up</Link></p>
                </div>
            </div>
        </div>
        </section>   
    </main>
  )
}

export default PodDLogin;
