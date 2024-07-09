import Card from '../ui/services/Card';
import { MonitorIcon } from '@/images/MonitorIcon';
import { FileTextIcon } from '@/images/FileTextIcon';
import { PeopleIcon } from '@/images/PeopleIcon';
import { HandCoinsIcon } from '@/images/HandCoinsIcon';
import { Header } from '../ui/services/Header';

const data = [
  {
    id: 'taylor-fit-project-and-program-monitoring-system',
    icon: <MonitorIcon height='50' width='50' />,
    title: 'Taylor-Fit Project and Program Monitoring System',
    decsription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam ...`,
  },
  {
    id: 'advance-data-analytics',
    icon: <FileTextIcon height='50' width='50' />,
    title: 'Advance Data Analytics',
    decsription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam ...`,
  },
  {
    id: 'collaboration-and-long-term-partnerships',
    icon: <PeopleIcon height='50' width='50' />,
    title: 'Collaboration and Long-Term Partnerships',
    decsription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam ...`,
  },
  {
    id: 'project-funding-and-financial-support',
    icon: <HandCoinsIcon height='50' width='50' />,
    title: 'Project Funding and Financial Support',
    decsription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diamqweqweqweqwe ...`,
  },
];

const page = () => {
  return (
    <>
      <Header
        title='What do we offer?'
        description='We provide a comprehensive suite of services to drive your success.'
      />
      <div className='flex flex-col items-center'>
        <p className='my-[50px] font-bold text-3xl'>OUR INITIAL SERVICES</p>
        <div className='grid grid-cols-2 gap-10 mb-[50px]'>
          {data.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              icon={data.icon}
              title={data.title}
              description={data.decsription}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
