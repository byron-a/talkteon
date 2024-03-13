import Image from "next/image"

export default function Overview(){
    return(
        <section className="px-20 bg-slate-50 pb-4 h-fit">
            <div>
                <h2 className="py-9 text-xl font-medium">Why Choose Talkteon?</h2>
            </div>
            <div className="grid grid-flow-col gap-8">
                <div className="border border-slate-800 rounded p-4 shadow-md shadow-slate-900 overview">
                    <Image src='/BulbFrame.png' alt='bulb' width={35} height={35}/>
                    <h3 className="py-2 font-medium">Real-time Intelligence</h3>
                    <p className="text-sm">Improve productivity with meeting highlights and transcription and simplify management with live meeting control, analytics, and automated alerts.</p>
                </div>
                <div className="border border-slate-800 rounded p-4 shadow-md shadow-slate-900 overview">
                    <Image src='/settingFrame.png' alt='settings' width={35} height={35}/>
                    <h3 className="py-2 font-medium">Real-time Intelligence</h3>
                    <p className="text-sm">Improve productivity with meeting highlights and transcription and simplify management with live meeting control, analytics, and automated alerts.</p>
                </div>
                <div className="border border-slate-800 rounded p-4 shadow-md shadow-slate-900 overview">
                    <Image src='/searchFrame.png' alt='search' width={35} height={35}/>
                    <h3 className="py-2 font-medium">Real-time Intelligence</h3>
                    <p className="text-sm">Improve productivity with meeting highlights and transcription and simplify management with live meeting control, analytics, and automated alerts.</p>
                </div>
            </div>
        </section>
    )
}