'use client'
import Link from "next/link";
import Image from "next/image";
import { PiSignInLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
//Images
import logo from '../../../public/Talkteon 1.png';

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <header>
        <nav className="flex justify-between place-items-center py-4 px-14">
          <div >
            <Link href="/">
              <Image
                src={logo}
                alt="talkteon logo"
                className="shadow px-2 py-0.5"
                width={150}
               />
            </Link>
          </div>
          <div className="flex space-x-5 justify-center w-2/4 tracking-wider text-sm navBar">
            <Link href="/" >
              <p className={(pathname === '/')? ' border-b border-sky-800 font-medium':''}>Home</p>
            </Link>
            <Link href="/podcast" >
              <p className={pathname === '/podcast'? 'border-b border-sky-800 font-medium':''}>Podcast</p>
            </Link>
            <Link href="/about" >
              <p className={pathname === '/about'? 'border-b border-sky-800 font-medium':''}>About</p>
            </Link>
            <Link href="/contact_us" >
              <p className={pathname === '/contact_us'? '  border-b border-sky-800 font-medium':'  font-medium'}>Contact Us</p>
            </Link>
          </div>
          <div className="flex space-x-2 place-items-center">
            <Link href={pathname === "/podcast"? "/podLogin":"/login"}>
              <button className="flex place-items-center gap-1 buttonSignIn">
                <span>Sign in</span> <PiSignInLight className="w-0.2 mt-0.5" />
              </button>
            </Link>
            <Link href="/signUp">
              <button className="border-2 border-slate-500 p-1 px-2 rounded-md hover:bg-sky-800 hover:text-zinc-200 hover:border-sky-800">
                Sign up
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
