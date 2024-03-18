import Image from "next/image";
import Link from "next/link";

import passCover from "../../../public/passwordCover.png";
import talkteonLogoB from "../../../public/TalkteonLogoBlack.png"

const PasswordReset = () => {
  return (
    <section className="relative w-full h-[100vh]">
        <div className="flex md:items-center w-full h-full m-auto rounded-sm border bg-white">
        <Link href='/'><Image className="absolute w-[20%] top-3 left-5 border px-2 py-1 rounded" src={talkteonLogoB} alt="logo"/></Link>
            <div className="relative w-2/3 h-dvh hidden md:block">
                <Link href='/'><Image className="absolute w-[20%] top-3 left-5 border px-2 py-1 rounded" src={talkteonLogoB} alt="logo"/></Link>
                <Image src={passCover} alt="forgotPassword cover" className="w-full h-full" />
            </div>
            <aside className="mt-40 px-10 py-6 flex flex-col items-center space-y-3 h-fit w-full md:w-1/3 sm:w-full md:mt-0 ">
                <div className="w-full">
                    <h2 className="font-bold text-2xl self-start mb-2">Password Recovery</h2>
                    <p className="text-xs text-slate-500 self-start mb-2">Welcome, let&apos;s put you back on! Please enter your email address.</p>
                    <div className="w-full">
                        <form action="" className="flex flex-col">

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email-address" placeholder="Enter your Email" />
                            <p className="text-xs text-slate-500 ml-1 ">Registered email address only</p>                        
                            <input type="button" value="Get Recovery Code" className="border border-slate-800 rounded-full py-2 text-sm bg-slate-800 text-slate-200 mt-6 font-medium hover:cursor-pointer"/>
                        </form>
                    </div>
                </div>
                <div>
                    <p className="text-xs text-slate-500">Don&apos;t have an account? <Link href='/signUp' className="font-semibold text-slate-600">Sign Up</Link></p>
                </div>
            </aside>
        </div>

         
    </section>
  )
}

export default PasswordReset;
