import Image from "next/image";
import Link from "next/link";

//COMPONENTS;
import Hero from "@/components/homePage/Hero";
import Overview from "@/components/homePage/Overview";
import Partners from "@/components/homePage/Partners";
import Testimonial from "@/components/homePage/Testimonial";
import Highlight from "@/components/homePage/Highlight";
import Faqs from "@/components/homePage/FAQs";

export default function Home() {

  return (
    <main>      
      <Hero />
      <Overview />
      <Partners />
      <Testimonial />
      <Highlight />
      <Faqs />
    </main>
  );
}
