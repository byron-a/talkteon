import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-slate-50 px-20 pt-14">
        <div className="flex gap-[28%] pb-4">
            <div>
                <p className="mb-3 text-sm text-sky-800">Product</p>
                <ul className="leading-8 tracking-wider text-sm font-normal">
                    <Link href='/'><li>Overview</li></Link>
                </ul>
            </div>
            <div>
            <p className="mb-3 text-sm text-sky-800">Social</p>
                <ul className="leading-8 tracking-wider text-sm font-normal">
                    <Link href='/'><li>Twitter</li></Link>
                    <Link href='/'><li>LinkedIn</li></Link>
                    <Link href='/'><li>Facebook</li></Link>
                </ul>
            </div>
            <div>
            <p className="mb-3 text-sm text-sky-800">Legal</p>
                <ul className="leading-8 tracking-wider text-sm font-normal">
                    <Link href='/'><li>Terms</li></Link>
                    <Link href='/'><li>Privacy</li></Link>
                    <Link href='/'><li>Contact</li></Link>
                </ul>
            </div>
        </div>
        <hr />
        <div className="text-center p-6 text-sm text-slate-600">
            <p>&copy; 2023 Talkteon. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
