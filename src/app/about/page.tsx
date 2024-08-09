import AboutHeader from "@/components/page-about/header";
import MeetOurTeam from "@/components/page-about/team";
import TextToImageAboutSection from "@/components/page-about/textToImage";
import ValuesSection from "@/components/page-about/valuesSection";

const page = () => {

  return (
    <>
        <AboutHeader />
        <title> Centro | About Us </title>
        <main>
            <TextToImageAboutSection />
            <ValuesSection />
            <MeetOurTeam />
        </main>
    </>
  );
};

export default page;
