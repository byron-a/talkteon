import Image from "next/image";
import { IoNotifications } from "react-icons/io5";

const ProfileNav = () => {
  return (
    <header className="w-full h-fit">
            <nav className="flex justify-end space-x-2.5 px-5 pt-3.5 border-b pb-1">
                <IoNotifications className=""/>
                <Image src='' alt="profile image" className="w-4 h-4 border rounded-full bg-slate-100"/>
            </nav>
    </header>
  )
}

export default ProfileNav;
