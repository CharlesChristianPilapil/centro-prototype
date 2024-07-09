import FeaturesWrapper from './ui/home/features-wrapper';
import Header from './ui/home/header';
import HomeTabsSection from './ui/home/home-tabs-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className='bg-base '>
        <HomeTabsSection />
        <FeaturesWrapper />
      </main>
    </>
  );
}
