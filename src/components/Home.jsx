import HeroSlider from "../pages/Home/HeroSlider";
import Hero2 from "../pages/Home/Hero2";
import Wellcome from "../pages/Home/Wellcome";
import Explore from "../pages/Home/Explore";   // FIXED spelling
import Feedback from "../pages/Home/Feedback";
import FAQ from "../pages/Home/FAQ";



export default function Home() {
  return (
    <>
      <HeroSlider />
      <Hero2 />
      <Wellcome />
      <Explore />      {/* use the corrected name */}
      <Feedback />
      <FAQ />
      
    </>
  );
}
