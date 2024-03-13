

const ContactSecA = () => {
  return (
    <>
    <section className="w-full p-16">
        <div className="m-auto">
            <div className="w-fit m-auto text-center mb-12">
                <p className="text-sm font-semibold mb-1.5">Contact us</p>
                <h1 className="text-2xl font-semibold mb-3">Get in touch</h1>
                <p className="text-sm tracking-wide">We&apos;d love to hear from you. Please fill out this form.</p>
            </div>
            <div className="w-fit m-auto">
                <form action="">
                    <fieldset className="flex space-x-4">
                        <div>
                            <label htmlFor="fNameC">First name</label><br />
                            <input type="text" id="fNameC" name="fName" placeholder="first name" className="text-sm py-1.5 px-2.5 w-[169px] border border-slate-300 rounded-lg bg-slate-100 outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="lNameC">Last name</label><br />
                            <input type="text" id="lNameC" name="lName" placeholder="last name" className="text-sm py-1.5 px-2.5 w-[169px] border border-slate-300 rounded-lg bg-slate-100 outline-none"/>
                        </div>
                    </fieldset>
                    <fieldset className="mb-2">
                        <div>
                            <label htmlFor="emailC">Email</label><br />
                            <input type="email" id="emailC" name="email" placeholder="you@company.com" className="text-sm py-1.5 px-2.5 w-full border border-slate-300 rounded-lg bg-slate-100 outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone number</label><br />
                            <div className="flex items-center">
                                <select name="countryCode" id="callCode" className="py-2 pl-2.5 rounded-l-lg border border-slate-300 bg-slate-100 border-r-0 text-[13px]">
                                    <option value="">+234</option>
                                    <option value="">+246</option>
                                    <option value="">+233</option>
                                </select>
                                <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="(00)-000-00-000" className="text-sm py-1.5 px-1 border border-slate-300 border-l-0 rounded-r-lg bg-slate-100 outline-none "/>
                            </div>
                            <label htmlFor="message">Message</label><br />
                            <textarea name="message" id="message" placeholder="  Leave us a message..." className=" min-w-[270px] w-full h-[120px] border rounded-xl text-sm p-2 bg-slate-100 outline-none"/>
                        </div>
                    </fieldset>
                    <input type="checkbox" name="privacyCheck" id="privacyCheck"/><label htmlFor="privacyCheck"> You agree to our friendly privacy policy</label><br />
                    <input type="button" value="Send message" className="border border-slate-800 rounded-full py-1.5 text-sm bg-slate-800 text-slate-200 mt-6 font-medium hover:cursor-pointer w-full"/>
                </form>
            </div>
        </div>
    </section>
    <hr className="w-24 ml-20"/>
    </>
    
  )
}

export default ContactSecA;
