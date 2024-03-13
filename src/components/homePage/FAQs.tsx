import Image from "next/image";

export default function Faqs(){
    return(
        <section className="bg-slate-100 px-24 py-20">
            <div className="flex justify-between">
                <div className="w-2/5">
                    <p className="text-sm mb-2">Support</p>
                    <h4 className="font-semibold mb-2">FAQS</h4>
                    <p className="text-sm">Everything you need to know about the product and billings, can&apos;t find the answer you are looking for?<br />
                    <button className="underline hover:shadow">Please chat our friendly team.</button>
                    </p>
                </div>
                <div className="w-2/4">
                    <ul className="">
                        <li className="flex place-items-center justify-between border border-dotted bg-zinc-200 rounded mb-4 py-2 px-6 text-sm w-full"><span>What is talkteon and how does it work?</span><button><Image src='/addSign.png' alt="add image" width={15} height={25}/></button> </li>
                        <li className="flex place-items-center justify-between border border-dotted bg-zinc-200 rounded mb-4 py-2 px-6 text-sm w-full"><span>How do I start a video conference?</span><button><Image src='/addSign.png' alt="add image" width={15} height={25}/></button> </li>
                        <li className="flex place-items-center justify-between border border-dotted bg-zinc-200 rounded mb-4 py-2 px-6 text-sm w-[98%] pe-3.5"><span>Is talkteon secure?</span><button><Image src='/addSign.png' alt="add image" width={15} height={25}/></button> </li>
                        <li className="flex place-items-center justify-between border border-dotted bg-zinc-200 rounded mb-4 py-2 px-6 text-sm w-[98%] pe-3.5"><span>What features does talkteon offer?</span><button><Image src='/addSign.png' alt="add image" width={15} height={25}/></button> </li>
                        <li className="flex place-items-center justify-between border border-dotted bg-zinc-200 rounded mb-4 py-2 px-6 text-sm w-[98%] pe-3.5"><span>Can I use talkteon on different devices?</span><button><Image src='/addSign.png' alt="add image" width={15} height={25}/></button> </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}