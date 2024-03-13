//components
import HeroAbout from "@/components/aboutPage/HeroAbout";
import OurStory from "@/components/aboutPage/OurStory";
import Faqs from "@/components/homePage/FAQs";
import NewsLetter from "@/components/aboutPage/NewsLetter";

export default function About(){
    return(
        <main>
           <HeroAbout />
           <OurStory />
           <Faqs />
           <NewsLetter />
        </main>
    )
}