import ServiceCard from '../ui/services/ServiceCard';
import { MonitorIcon } from '@/images/MonitorIcon';
import { FileTextIcon } from '@/images/FileTextIcon';
import { PeopleIcon } from '@/images/PeopleIcon';
import { HandCoinsIcon } from '@/images/HandCoinsIcon';
import { Header } from '../ui/services/Header';
import { DatabaseIcon } from '@/images/DatabaseIcon';
import { RealTimeIcon } from '@/images/RealTimeIcon';
import { SettingIcon } from '@/images/SettingIcon';
import { AttentionTriangleIcon } from '@/images/AttentionTriangleIcon';
import { ReportingIcon } from '@/images/ReportingIcon';
import { ChatIcon } from '@/images/ChatIcon';
import { CloudComputingIcon } from '@/images/CloudComputingIcon';
import { FinancialIcon } from '@/images/FinancialIcon';
import { ApplicationProcessIcon } from '@/images/ApplicationProcessIcon';

const data = [
  {
    id: 'taylor-fit-project-and-program-monitoring-system',
    icon: <MonitorIcon height='50' width='50' />,
    title: 'Taylor-Fit Project and Program Monitoring System',
    decsription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam ...`,
    features: [
      {
        id: 'real-time-progress-tracking',
        icon: <RealTimeIcon />,
        title: 'Real-Time Progress Tracking',
        description: `Centro's platform provides LGUs and stakeholders with the ability to monitor construction projects in real time. This means you can see exactly where your project stands at any given moment, from the first brick laid to the final touches.`,
      },
      {
        id: 'resource-allocation',
        icon: <SettingIcon />,
        title: 'Resource Allocation',
        description: `Efficient resource allocation is vital for project success. With Centro, you can allocate labor, materials, and equipment precisely where and when they are needed, minimizing waste and delays.`,
      },
      {
        id: 'risk-identification',
        icon: <AttentionTriangleIcon />,
        title: 'Risk Identification',
        description: `Our platform helps you identify potential risks early, so you can take proactive measures to mitigate them. Whether it's a weather delay or a supplier issue, Centro keeps you informed.`,
      },
    ],
  },
  {
    id: 'advance-data-analytics',
    icon: <FileTextIcon height='50' width='50' />,
    title: 'Advance Data Analytics',
    decsription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam ...`,
    features: [
      {
        id: 'turning-data-into-action',
        icon: <DatabaseIcon />,
        title: 'Turning Data into Action',
        description: `Centro's data analytics tools take the raw data generated by your projects and turn it into actionable insights. Understand trends, spot inefficiencies, and make informed decisions to optimize project outcomes.`,
      },
      {
        id: 'customized-reporting',
        icon: <ReportingIcon />,
        title: 'Customized Reporting',
        description: `Create customized reports that matter to you. Whether you need a daily progress report, a budget analysis, or a risk assessment, Centro's data analytics tools can generate it, saving you time and effort.`,
      },
    ],
  },
  {
    id: 'collaboration-and-long-term-partnerships',
    icon: <PeopleIcon height='50' width='50' />,
    title: 'Collaboration and Long-Term Partnerships',
    decsription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam ...`,
    features: [
      {
        id: 'seamless-communication',
        icon: <ChatIcon />,
        title: 'Seamless Communication',
        description: `Collaboration is key to project success. Centro fosters seamless communication between LGUs, stakeholders, experts, and contractors. Discuss project details, share updates, and make decisions collaboratively within the platform.`,
      },
      {
        id: 'centralize-platform',
        icon: <CloudComputingIcon />,
        title: 'Centralized Platform',
        description: `All project-related information is centralized, making it easy for everyone involved to access the latest data, plans, and documents. No more sifting through emails or searching for lost files.`,
      },
    ],
  },
  {
    id: 'project-funding-and-financial-support',
    icon: <HandCoinsIcon height='50' width='50' />,
    title: 'Project Funding and Financial Support',
    decsription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diamqweqweqweqwe ...`,
    features: [
      {
        id: 'access-to-Ffinancial-resources',
        icon: <FinancialIcon />,
        title: 'Access to Financial Resources',
        description: `We understand that funding is a critical aspect of project development. Through strategic partnerships with financial institutions, Centro offers LGUs and contractors access to various funding opportunities tailored to infrastructure projects.`,
      },
      {
        id: 'streamlined-application-process',
        icon: <ApplicationProcessIcon />,
        title: 'Streamlined Application Process',
        description: `We simplify the application process, making it easier for you to secure the financial support you need. Centro streamlines the paperwork and facilitates communication with financial partners.`,
      },
    ],
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
            <ServiceCard
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
