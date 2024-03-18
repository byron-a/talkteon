import Link from "next/link";
import Image from "next/image";
import { useState,useEffect } from "react";
//image;
import businessWomanCover from '../../../public/businesswoman-having-online-meeting 1.png';
import googleIcon from '../../../public/SocialGoogleicon.png';
import talkteonLogoW from '../../../public/TalkteonLogowhite.png';
import talkteonLogoB from '../../../public/TalkteonLogoBlack.png';
import closeSign from '../../../public/VectorClose.png';
import checkSign from '../../../public/modalCheck-one.png';

import { register } from "./js/script";

//REGISTER PAGE;
export default function Register(){
    const [modal , setModal] = useState('hidden');
    const [inputSignup, setInputSignup] = useState({
        fullName:'',
        email:'',
        password:'',

    });
    

    function handleInputDetail(e){
       const {name, value} = e.target;
       setInputSignup((prev)=>{
          if(name === "full-Name"){
            return {
                fullName:value,
                email: prev.email,
                password:prev.password
            }
          }else if(name === "email-address"){
            return {
                fullName:prev.fullName,
                email: value,
                password:prev.password
            }
          }else if(name === "pass-word"){
            return {
                fullName:prev.fullName,
                email: prev.email,
                password:value
            }
          }
       })
    }
    
    function formSubmit(e){
        e.preventDefault();
        register(inputSignup);
        let browserStore = sessionStorage.getItem(inputSignup.fullName);
            browserStore = JSON.parse(browserStore);

        if(sessionStorage.getItem(inputSignup.fullName)){
            setModal('flex');
        }
        setInputSignup({
            fullName:'',
            email:'',
            password:''
        })
    }

    function resetModal(){
        setModal('hidden');
    }

  return (
    <section className="relative w-full h-[100vh]">
        <div className="relative flex w-full h-full m-auto rounded-sm border bg-white">
        <Link href='/'><Image className="absolute w-[20%] top-3 left-5 border px-2 py-1 rounded" src={talkteonLogoB} alt="logo"/></Link>
            <div className="relative hidden w-2/3 h-dvh md:block">
                <Link href='/'><Image className="absolute w-[20%] top-3 left-5 shadow border px-2 py-1 rounded" src={talkteonLogoW} alt="logo"/></Link>
                <Image src={businessWomanCover} alt="business online woman cover" className="w-full h-full" />
            </div>
            <aside className="mt-40 px-10 py-6 flex flex-col items-center h-fit w-full md:w-1/3 md:m-auto space-y-3">
                <h2 className="font-bold text-2xl self-start">Sign Up</h2>
                <div className="w-full">
                    <form action="" className="flex flex-col" >
                        <label htmlFor="fullName">Name*</label>
                        <input type="text" id="fullName" name="full-Name" value={inputSignup.fullName} onChange={(e)=>handleInputDetail(e)} placeholder="Enter your Fullname" />
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" name="email-address" value={inputSignup.email} onChange={(e)=>handleInputDetail(e)} placeholder="Enter your Email" />
                        <p className="text-xs text-slate-500 ml-1 ">Enter a valid email address</p>
                        <label htmlFor="password">Password*</label>
                        <input type="password" id="password" name="pass-word" value={inputSignup.password} onChange={(e)=>handleInputDetail(e)} placeholder="Enter Password" />
                        <p className="text-xs text-slate-500 ml-1 ">Must be atleast 8 characters</p>
                        <input type="submit" value="Get Started" onClick={(e)=>formSubmit(e)} className="border border-slate-800 rounded-full py-2 text-sm bg-slate-800 text-slate-200 mt-6 font-medium hover:cursor-pointer"/>
                    </form>
                    <Link href="#" className="flex justify-center space-x-1 items-center w-full border border-slate-100 rounded-full py-1.5 text-sm bg-slate-100 text-slate-500 mt-4"><Image src={googleIcon} alt="google icon"/> <span className="font-medium">Sign in with Google</span> </Link>
                </div>
                <div>
                    <p className="text-xs text-slate-500">Already have an account? <Link href='/login' className="font-semibold text-slate-600">Log in</Link></p>
                </div>
            </aside>
        </div>

        {/* //SUCCESSFULLY REGISTERED MODAL; */}
        <div className={`absolute top-0 w-full h-full bg-[rgb(0,0,0,0.4)] ${modal} place-items-center`}>
            <div className="bg-white p-6 w-[300px] h-auto rounded-md m-auto flex flex-col items-center">
                <Image src={closeSign} alt="close icon" className="-mt-3 ml-[100%] rounded-full p-1 w-[18px] hover:bg-slate-200 hover:cursor-pointer"/>
                <Image src={checkSign} alt="check-okay icon" className="w-fit rounded-full"/>
                <p className="mb-7 text-sm font-medium">Successfully accepted!</p>
                <Link href='/login' onClick={resetModal} className="border border-slate-800 rounded-full p-2 text-sm bg-slate-800 text-slate-200 font-medium hover:cursor-pointer w-full text-center">Log in</Link>
            </div>
        </div>
    </section>
  )
};

