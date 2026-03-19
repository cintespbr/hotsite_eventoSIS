import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About/About";
import WhyParticipate from "../components/Home/WhyParticipate/WhyParticipate";
import TargetAudience from "../components/Home/TargetAudience/TargetAudience";
import Showcase from "../components/Home/Showcase/Showcase";
import ProgramPreview from "../components/Home/ProgramPreview/ProgramPreview";
/*import Speakers from "../components/Home/Speakers/Speakers";*/
/*import TechnicalGuides from "../components/Home/TechnicalGuides/TechnicalGuides";*/
import TeamSection from "../components/Home/Registration/TeamSection";
import Partners from "../components/Home/Partners/Partners";
import InstagramPost from "../components/Home/InstagramPost/InstagramPost";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <InstagramPost />
      <WhyParticipate />
      <TargetAudience />
      <Showcase />
      <ProgramPreview />
      {/*<Speakers />*/}
      {/*<TechnicalGuides />*/}
      <TeamSection />
      <Partners />
    </>
  );
}
