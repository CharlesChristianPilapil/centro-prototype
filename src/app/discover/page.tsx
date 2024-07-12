import Filter from "../ui/discover/filter";
import Map from "../ui/discover/map";
import DataSection from "../ui/discover/data-section";
import Charts from "../ui/discover/Charts";
import { ProjectCard } from "../ui/discover/ProjectCard";
import { CardLayout } from "../ui/discover/CardLayout";
import Link from "next/link";

export const data = [
  {
    contractId: "1",
    dateStarted: "June 7, 2024",
    dateCompletion: "October 9, 2024",
    contractor: "A Construction",
    accomplishmentRate: "52.64",
    details: [
      [
        {
          name: "Contract ID",
          data: "21IDLN155",
        },
        {
          name: "Contract Name",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Contractor",
          data: "A Construction",
        },
        {
          name: "Implementing Office Name",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Duration",
          data: "21IDLN155",
        },
        {
          name: "Fiscal Year",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Project Category",
          data: "21IDLN155",
        },
        {
          name: "Source of Fund",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Mobilization Fee",
          data: "21IDLN155",
        },
        {
          name: "Date of Award",
          data: "Construction of Libonao River",
        },
      ],
    ],
  },
  {
    contractId: "2",
    dateStarted: "August 14, 2024",
    dateCompletion: "October 5, 2024",
    contractor: "B Construction",
    accomplishmentRate: "60.64",
    details: [
      [
        {
          name: "Contract ID",
          data: "21IDLN155",
        },
        {
          name: "Contract Name",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Contractor",
          data: "A Construction",
        },
        {
          name: "Implementing Office Name",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Duration",
          data: "21IDLN155",
        },
        {
          name: "Fiscal Year",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Project Category",
          data: "21IDLN155",
        },
        {
          name: "Source of Fund",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Mobilization Fee",
          data: "21IDLN155",
        },
        {
          name: "Date of Award",
          data: "Construction of Libonao River",
        },
      ],
    ],
  },
  {
    contractId: "3",
    dateStarted: "August 14, 2024",
    dateCompletion: "October 5, 2024",
    contractor: "B Construction",
    accomplishmentRate: "60.64",
    details: [
      [
        {
          name: "Contract ID",
          data: "21IDLN155",
        },
        {
          name: "Contract Name",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Contractor",
          data: "A Construction",
        },
        {
          name: "Implementing Office Name",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Duration",
          data: "21IDLN155",
        },
        {
          name: "Fiscal Year",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Project Category",
          data: "21IDLN155",
        },
        {
          name: "Source of Fund",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Mobilization Fee",
          data: "21IDLN155",
        },
        {
          name: "Date of Award",
          data: "Construction of Libonao River",
        },
      ],
    ],
  },
  {
    contractId: "4",
    dateStarted: "August 14, 2024",
    dateCompletion: "October 5, 2024",
    contractor: "B Construction",
    accomplishmentRate: "60.64",
    details: [
      [
        {
          name: "Contract ID",
          data: "21IDLN155",
        },
        {
          name: "Contract Name",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Contractor",
          data: "A Construction",
        },
        {
          name: "Implementing Office Name",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Duration",
          data: "21IDLN155",
        },
        {
          name: "Fiscal Year",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Project Category",
          data: "21IDLN155",
        },
        {
          name: "Source of Fund",
          data: "Construction of Libonao River",
        },
      ],
      [
        {
          name: "Mobilization Fee",
          data: "21IDLN155",
        },
        {
          name: "Date of Award",
          data: "Construction of Libonao River",
        },
      ],
    ],
  },
];

const page = () => {
  return (
    <main className="container mt-[96px]">
      <Filter />
      <DataSection />
      <Map />
      <Charts />
      <CardLayout
        title={"Project List"}
        style="mb-[16px]"
        headerColor="#0E4370"
      >
        <div className="border border-[#ccc] rounded-b-[8px] px-6">
          <div className="flex justify-between">
            <p className="px-4 py-2 border-b border-gray-400 font-bold">2024</p>
            <p className="px-4 py-2 border-b border-gray-400 font-bold">
              Region I / Metro Manila / Makati
            </p>
          </div>
          <div className="p-6 max-h-[500px] overflow-y-auto">
            {data.map((data) => {
              return (
                <Link
                  href={`/discover/${data.contractId}`}
                  key={data.dateStarted}
                >
                  <ProjectCard
                    dateStarted={data.dateStarted}
                    dateCompletion={data.dateCompletion}
                    contractor={data.contractor}
                    accomplishmentRate={data.accomplishmentRate}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </CardLayout>
    </main>
  );
};

export default page;
