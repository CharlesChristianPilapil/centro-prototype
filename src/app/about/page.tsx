import AboutHeader from "@/components/about/header";
import MeetOurTeam from "@/components/about/team";
import TextToImageAboutSection from "@/components/about/textToImage";
import ValuesSection from "@/components/about/valuesSection";

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
