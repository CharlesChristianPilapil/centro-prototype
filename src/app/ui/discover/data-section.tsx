import DataTabs from './data-tabs';
import Wrapper from './wrapper';

const DataSection = () => {
  const data = [
    {
      count: `250`,
      status: `NOT YET STARTED`,
    },
    {
      count: `400`,
      status: `ON-GOING`,
    },
    {
      count: `275`,
      status: `COMPLETE`,
    },
    {
      count: `925`,
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
