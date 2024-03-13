import Image from "next/image";
import Link from "next/link";

//images and icons
import chat1 from "../../../public/chatIcon.png";
import chat2 from "../../../public/chatIcon2.png";
import gpsTag from "../../../public/gpsIcon.png";
import callIcon from "../../../public/phoneIcon.png";

const ContactSecB = () => {
  return (
    <section className="px-20 py-10">
        <div>
            <p className="text-sm font-semibold mb-1.5">Contact us</p>
            <h3 className="text-2xl font-semibold mb-3">We&apos;d love to hear from you</h3>
            <p className="text-sm">Our friendly team is always here to chat.</p>
        </div>
        <div className="grid grid-cols-4 mt-12 space-x-4">
            <div className="rounded bg-slate-100 p-4">
                <Image src={chat1} alt="chat Icon" className="mb-7 w-[40px]"/>
                <h4 className="text-sm font-semibold mb-1.5">Chat to sales</h4>
                <p className="text-[11px] mb-2">Speak to our friendly team.</p>
                <Link href='#' className="text-[13px] font-medium">sales@talkteon.com</Link>
            </div>
            <div className="rounded bg-slate-100 p-4">
                <Image src={chat2} alt="chat Icon2" className="mb-7 w-[40px]"/>
                <h4 className="text-sm font-semibold mb-1.5">Chat to support</h4>
                <p className="text-[11px] mb-2">We&apos;re here to help.</p>
                <Link href='#' className="text-[13px] font-medium">support@talkteon.com</Link>
            </div>
            <div className="rounded bg-slate-100 p-4">
                <Image src={gpsTag} alt="map pointer icon" className="mb-7 w-[40px]"/>
                <h4 className="text-sm font-semibold mb-1.5">Visit us</h4>
                <p className="text-[11px] mb-2">Vist our office HQ.</p>
                <Link href='#' className="text-[13px] font-medium">100 Smith Street Collingwood VIC 3066 AU</Link>
            </div>
            <div className="rounded-xl bg-slate-100 p-4">
                <Image src={callIcon} alt="phone icon" className="mb-7 w-[40px]"/>
                <h4 className="text-sm font-semibold mb-1.5">Call us</h4>
                <p className="text-[11px] mb-2">Mon-Fri from 8am to 5pm.</p>
                <Link href='#' className="text-[13px] font-medium">+234(805) 000-0000</Link>
            </div>
        </div>
    </section>
  )
}

export default ContactSecB;
