import Image from "next/image"

export default function Partners(){
    return(
        <section className="px-14 w-full h-[200px] flex flex-col place-items-center mb-8">
            <div className="w-fit m-auto mb-0">
                <p>Join 1400+ Companies already video comferencing with Talkteon.</p>
            </div>
            <div className="w-fit m-auto mt-6">
                <Image src='/companiesFrame.png' alt='' width={400} height={100}/>
            </div>
        </section>
    )
}