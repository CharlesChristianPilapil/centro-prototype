import { BarChartMultiple } from '../charts/multiple';
import { PieChartComponent } from '../charts/pie-chart';
import Wrapper from './wrapper';

const Charts = () => {
  return (
    <div className='grid grid-cols-12 space-x-4 mb-4'>
      <div className='col-span-5'>
        <Wrapper title='Projects per Type'>
          <PieChartComponent />
        </Wrapper>
      </div>
      <div className='col-span-7'>
        <Wrapper title='Projects Types per Region'>
          <BarChartMultiple />
        </Wrapper>
      </div>
    </div>
  );
};

export default Charts;
