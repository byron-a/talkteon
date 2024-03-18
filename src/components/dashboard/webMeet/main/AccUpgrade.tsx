import Image from "next/image";
import Link from "next/link";

const AccUpgrade = () => {
  return (
    <section className="pl-2 pr-5 w-full h-[48%]">
        <div className="border rounded-lg text-center p-3 h-full">
            <h2 className="text-xs font-semibold tracking-tight">Upgrade Your Account</h2>
            <p className="text-xxs mt-3 ">Upgrade your plan with Talkteon <br/> save 20% annually with<br/> Executive offers explore Now!</p>
            <div className="mt-6 ">
                <Link href='#' className="bg-[#31364e] text-white text-xs border border-[#31364e] py-1.5 px-5 rounded-lg">Explore</Link>
            </div>
        </div>
        
    </section>
  )
}

export default AccUpgrade;
