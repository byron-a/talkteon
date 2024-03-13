import Image from "next/image";
import Link from "next/link";

import passCover from "../../../public/passwordCover.png";
import talkteonLogoW from "../../../public/TalkteonLogoBlack.png"

const PasswordReset = () => {
  return (
    <section className="relative w-full h-[100vh] flex place-content-center">
        <div className="flex items-center w-fit h-fit m-auto rounded-sm border bg-white">
            <div className="relative">
                <Link href='/'><Image className="absolute w-[20%] top-3 left-5 shadow border px-2 py-1 rounded" src={talkteonLogoW} alt="logo"/></Link>
                <Image src={passCover} alt="forgotPassword cover" className="w-full h-full" />
            </div>
            <aside className="px-10 py-6 flex flex-col items-center h-fit w-fit space-y-3">
                <div className="w-[80%]">
                    <h2 className="font-bold text-2xl self-start mb-2">Password Recovery</h2>
                    <p className="text-[12px] text-slate-500 self-start mb-2">Welcome, let&apos;s put you back on! Please enter your email address.</p>
                    <div className="w-fit">
                        <form action="" className="flex flex-col">

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email-address" placeholder="Enter your Email" />
                            <p className="text-[11px] text-slate-500 ml-1 ">Registered email address only</p>                        
                            <input type="button" value="Get Recovery Code" className="border border-slate-800 rounded-full py-2 text-sm bg-slate-800 text-slate-200 mt-6 font-medium hover:cursor-pointer"/>
                        </form>
                    </div>
                </div>
                <div>
                    <p className="text-[11px] text-slate-500">Don&apos;t have an account? <Link href='/signUp' className="font-semibold text-slate-600">Sign Up</Link></p>
                </div>
            </aside>
        </div>

         
    </section>
  )
}

export default PasswordReset;
