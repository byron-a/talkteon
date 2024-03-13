import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";
//components
import { IoHomeOutline } from "react-icons/io5";
//image;
import loginMeetingCover from '../../../public/loginCover.png';
import googleIcon from '../../../public/SocialGoogleicon.png';
import talkteonLogoW from '../../../public/TalkteonLogowhite.png';
import closeSign from '../../../public/VectorClose.png';
import checkSign from '../../../public/modalCheck-one.png';



const RegLogin = () => {

  return (
    <section className="relative w-full h-[100vh] flex place-content-center">
        <div className="flex items-center w-fit h-fit m-auto rounded-sm border bg-white">
            <div className="relative">
                <Link href='/'><Image className="absolute w-[20%] top-3 left-5 shadow border px-2 py-1 rounded" src={talkteonLogoW} alt="logo"/></Link>
                <Image src={loginMeetingCover} alt="business cover" className="w-full h-full" />
            </div>
            <aside className="px-10 py-6 flex flex-col items-center h-fit w-fit space-y-3">
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
                        
                        <input type="button" value="Get Started" className="border border-slate-800 rounded-full py-2 text-sm bg-slate-800 text-slate-200 mt-6 font-medium hover:cursor-pointer"/>
                    </form>
                        <div className="text-center border border-slate-100 rounded-full py-1.5 text-sm bg-slate-100 text-slate-500 mt-4">
                            <Link href="#" className="flex space-x-1 items-center w-fit m-auto"><Image src={googleIcon} alt="google icon"/> <span className="font-medium">Sign in with Google</span> </Link>
                        </div>
                </div>
                <div>
                    <p className="text-[11px] text-slate-500">Don&apos;t have an account? <Link href='/signUp' className="font-semibold text-slate-600">Sign Up</Link></p>
                </div>
            </aside>
        </div>

        {/* //SUCCESSFULLY REGISTERED MODAL; */}
        <div className="hidden absolute w-full h-full bg-[rgb(0,0,0,0.4)] flex place-items-center">
            <div className="bg-white p-6 w-[300px] h-auto rounded-md m-auto flex flex-col items-center">
                {/* what is the close button for? */}
                <Image src={closeSign} alt="close icon" className="-mt-3 ml-[100%] rounded-full p-1 w-[18px] hover:bg-slate-200 hover:cursor-pointer"/>
                <Image src={checkSign} alt="check-okay icon" className="w-fit rounded-full"/>
                <p className="mb-7 text-sm font-medium">Successfully Logged In!</p>
                <Link href='/' className="border border-slate-800 rounded-full p-2 text-sm bg-zinc-700 text-slate-200 hover:cursor-pointer w-full text-center">Video Conferencing</Link>
                <Link href='/' className="border border-zinc-500 rounded-full p-2 text-sm bg-zinc-100 text-slate-800 hover:cursor-pointer w-full text-center mt-3.5">Podcast</Link>
            </div>
        </div>
    </section>
  )
}

export default RegLogin;
