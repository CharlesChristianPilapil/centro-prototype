import Header from "./ui/header";
import HomeTabsSection from "./ui/home-tabs-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-base ">
        <HomeTabsSection />
        <div className="container"> side x side </div>
      </main>
    </>
  );
}
