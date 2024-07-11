import DataTabs from './data-tabs';
import Wrapper from './wrapper';

const DataSection = () => {
  const data = [
    {
      count: `25,544`,
      status: `NOT YET STARTED`,
    },
    {
      count: `1,114`,
      status: `ON-GOING`,
    },
    {
      count: `3,723`,
      status: `COMPLETE`,
    },
    {
      count: `30,381`,
      status: `TOTAL`,
    },
  ];

  return (
    <Wrapper title='Registered Projects in the System'>
      <div className='grid grid-cols-4 mx-4 space-x-4'>
        {data.map((e) => (
          <DataTabs key={e.count} count={e.count}>
            {e.status}
          </DataTabs>
        ))}
      </div>
    </Wrapper>
  );
};

export default DataSection;
