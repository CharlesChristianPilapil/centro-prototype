import AboutHeader from "@/components/about/header";
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
        </main>
    </>
  );
};

export default page;
