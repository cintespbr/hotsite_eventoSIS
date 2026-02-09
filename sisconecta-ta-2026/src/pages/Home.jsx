import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About/About";
import WhyParticipate from "../components/Home/WhyParticipate/WhyParticipate";
import TargetAudience from "../components/Home/TargetAudience/TargetAudience";
import Showcase from "../components/Home/Showcase/Showcase";
import ProgramPreview from "../components/Home/ProgramPreview/ProgramPreview";
import Speakers from "../components/Home/Speakers/Speakers";
import TechnicalGuides from "../components/Home/TechnicalGuides/TechnicalGuides";
import Registration from "../components/Home/Registration/Registration";
import Partners from "../components/Home/Partners/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyParticipate />
      <TargetAudience />
      <Showcase />
      <ProgramPreview />
      <Speakers />
      <TechnicalGuides />
      <Registration />
      <Partners />
    </>
  );
}
