import Filter from '../ui/discover/filter';
import Map from '../ui/discover/map';
import DataSection from '../ui/discover/data-section';
import Charts from '../ui/discover/Charts';

const page = () => {
  return (
    <main className='container mt-[96px]'>
      <Filter />
      <DataSection />
      <Map />
      <Charts />
    </main>
  );
};

export default page;
