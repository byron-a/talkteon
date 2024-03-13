import Link from "next/link";

const NewsLetter = () => {

  return (
    <section className="flex px-24 py-14 bg-slate-50 justify-between">
        <div>
            <h3 className="text-xl font-semibold mb-3">Sign up for our newsletter</h3>
            <p className="text-sm">Be the first to know about releases and industry news and insights.</p>
        </div>
        <div>
            <form action="#">
                <div className="flex space-x-3 mb-1">
                <input type="email" placeholder="Enter your email" id="newsEmail" name="newsEmail" className="" />
                <input type="button" value='Subscribe' className="border border-slate-800 rounded-2xl py-2 px-6 text-sm bg-slate-800 text-slate-200 font-medium hover:cursor-pointer"/>
                </div>
                
                <p className="text-[12px]">We care about your data in our <Link href="/" className="underline hover:shadow">privacy policy.</Link></p>
            </form>
        </div>
    </section>
  )
}

export default NewsLetter;
