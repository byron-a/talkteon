import Image from "next/image";
//icons
import homeIcon from '../../../public/dashboardHome.png';
import chatIcon from '../../../public/messageIcon.png';
import taskIcon from '../../../public/taskIcon.png';
import groupIcon from '../../../public/groupIcon.png';
import settingIcon from '../../../public/settingIcon.png'

const AsideNav = () => {
  return (
    <section>
          <aside className="float-start bg-[#31364e] h-[100vh] flex flex-col space-y-16 px-8 py-20">
                <button><Image src={homeIcon} alt="home icon" className="w-[100%] h-[100%] hover:border p-1.5 rounded-2xl border-slate-500"/></button>
                <button><Image src={chatIcon} alt="chat icon" className="w-[100%] h-[100%] hover:border p-1.5 rounded-2xl border-slate-500"/></button>
                <button><Image src={taskIcon} alt="task icon" className="w-[100%] h-[100%] hover:border p-1.5 rounded-2xl border-slate-500"/></button>
                <button><Image src={groupIcon} alt="group icon" className="w-[100%] h-[100%] hover:border p-1.5 rounded-2xl border-slate-500"/></button>
                <button><Image src={settingIcon} alt="setting icon" className="w-[100%] h-[100%] hover:border p-1.5 rounded-2xl border-slate-500"/></button>
            </aside>
    </section>
  )
}

export default AsideNav;
