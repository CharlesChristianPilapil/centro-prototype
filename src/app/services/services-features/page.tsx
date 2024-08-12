'use client';

import { CardFlip } from '@/components/services/CardFlip';
import { Header } from '@/components/services/Header';
import { DatabaseIcon } from '@/images/DatabaseIcon';
import { RealTimeIcon } from '@/images/RealTimeIcon';
import { GroupPeopleIcon } from '@/images/GroupPeopleIcon';
import { AttentionTriangleIcon } from '@/images/AttentionTriangleIcon';
import { ReportingIcon } from '@/images/ReportingIcon';
import { ChatIcon } from '@/images/ChatIcon';
import { CloudComputingIcon } from '@/images/CloudComputingIcon';
import { FinancialIcon } from '@/images/FinancialIcon';
import { ApplicationProcessIcon } from '@/images/ApplicationProcessIcon';
import { MonitorIcon } from '@/images/MonitorIcon';
import { FileTextIcon } from '@/images/FileTextIcon';
import { PeopleIcon } from '@/images/PeopleIcon';
import { HandCoinsIcon } from '@/images/HandCoinsIcon';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const data = [
    {
        id: 'taylor-fit-project-and-program-monitoring-system',
        icon: <MonitorIcon height='50' width='50' />,
        title: 'Taylor-Fit Project and Program Monitoring System',
        decsription: `The Taylor-Fit Project and Program Monitoring System is a specialized tool for managing infrastructure projects. It provides essential features to track timelines, budget, and performance, tailored to the unique needs of infrastructure development.`,
        features: [
            {
                id: 'real-time-progress-tracking',
                icon: <RealTimeIcon />,
                title: 'Real-Time Progress Tracking',
                description: `Centro's platform provides LGUs and stakeholders with the ability to monitor construction projects in real time. This means you can see exactly where your project stands at any given moment, from the first brick laid to the final touches.`,
            },
            {
                id: 'resource-allocation',
                icon: <GroupPeopleIcon />,
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
        decsription: `Advanced Data Analytics is transforming the infrastructure sector with deeper insights and better decision-making. By using sophisticated algorithms and large datasets, it helps professionals analyze trends, predict outcomes, and optimize operations. This approach improves construction efficiency, enhances maintenance, and drives innovation, leading to cost reductions and improved sustainability in infrastructure systems.`,
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
        decsription: `Collaboration and long-term partnerships are crucial for successful infrastructure projects. By connecting government, private companies, and community organizations, these relationships ensure coordinated efforts, efficient resource use, and aligned goals. Effective partnerships foster shared expertise and innovation, leading to more resilient and impactful infrastructure. Emphasizing long-term cooperation builds trust and stability, supporting ongoing project success and adaptability.`,
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
        decsription: `Project funding is vital for developing and maintaining infrastructure. Securing financial support from sources like government grants, private investments, and public-private partnerships ensures successful planning and execution. Effective fund management helps stay on budget, meet milestones, and achieve long-term goals, ultimately enhancing community development and economic growth.`,
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

const Page = () => {
    const serviceId = useSearchParams().get('id');
    const [featureData, setFeatureData] = useState<any>();
    useEffect(() => {
        const selectedService = data.find((item) => item.id === serviceId);
        if (selectedService) {
            setFeatureData(selectedService);
        }
    }, [serviceId]);

    return (
        <>
            <Header title={featureData?.title} />
            <div
                className='flex flex-col items-center'
                style={{ minHeight: 'calc(100vh - 82px)' }}
            >
                <p className='my-[50px] font-bold text-3xl'>Introduction</p>
                <p className='max-w-[700px] mb-10 text-center'>
                    {featureData?.decsription}
                </p>
                <div className='grid grid-cols-2 gap-10 mb-[50px]'>
                    {featureData?.features.map((data: any) => (
                        <CardFlip
                            key={data.id}
                            id={data.id}
                            icon={data.icon}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

// Use <Suspense fallback={<p>Loading</p>}> alternative for dynamic
export default dynamic(() => Promise.resolve(Page), { ssr: false });
