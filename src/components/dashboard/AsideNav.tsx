"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
//icons
// import homeIcon from '../../../public/dashboardHome.png';
// import chatIcon from '../../../public/messageIcon.png';
// import taskIcon from '../../../public/taskIcon.png';
// import groupIcon from '../../../public/groupIcon.png';
// import settingIcon from '../../../public/settingIcon.png';
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { TbCalendarCheck } from "react-icons/tb";
import { MdGroups2 } from "react-icons/md";
import { SlSettings } from "react-icons/sl";

const AsideNav = () => {
  const pathName = usePathname();

  return (
          <aside className="h-full w-[5.63rem] absolute top-0 left-0">
            <div className="  float-start bg-[#31364e] h-full w-full flex flex-col space-y-14 px-8 py-16">
               <Link href='/conferenceMeet'><IoHomeOutline className={`text-slate-400 w-[100%] h-[100%] hover:text-white ${pathName === '/conferenceMeet'&& 'text-white'}`}/></Link>
                <button><HiOutlineChatBubbleLeftRight className="text-slate-400 w-[100%] h-[100%] hover:text-white"/></button>
                <Link href='/conferenceMeet/schedule'><TbCalendarCheck className={`text-slate-400 w-[100%] h-[100%] hover:text-white ${pathName === '/conferenceMeet/schedule'&& 'text-white'}`}/></Link>
                <button><MdGroups2 className="text-slate-400 w-[100%] h-[100%] hover:text-white"/></button>
                <button><SlSettings className="text-slate-400 w-[100%] h-[100%] hover:text-white"/></button>
            </div>     
          </aside>

  )
}

export default AsideNav;
