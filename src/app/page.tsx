import Header from "./ui/header";
import HomeTabsSection from "./ui/home-tabs-section";

export default function Home() {
  return (
    <main className="bg-base">
      <Header />
      <HomeTabsSection />
      <div className="container"> side x side </div>
    </main>
  );
}
