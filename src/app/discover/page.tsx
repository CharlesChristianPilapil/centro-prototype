import Filter from "../ui/discover/filter";
import Map from "../ui/discover/map";
import DataSection from "../ui/discover/data-section";
import Charts from "../ui/discover/Charts";
import { ProjectCard } from "../ui/discover/ProjectCard";

const page = () => {
  const data = [
    {
      dateStarted: "June 7, 2024",
      dateCompletion: "October 9, 2024",
      contractor: "A Construction",
      accomplishmentRate: "52.64",
    },
    {
      dateStarted: "August 14, 2024",
      dateCompletion: "December 5, 2024",
      contractor: "B Construction",
      accomplishmentRate: "60.64",
    },
  ];

  //Test2
  //test
  return (
    <main className="container mt-[96px]">
      <Filter />
      <DataSection />
      <Map />
      <Charts />
      <div className="mb-4">
        <p className="h-[30px] w-[100%] bg-[#0c5acb] rounded-t-[8px] px-[10px] flex items-center text-white">
          Project List
        </p>
        <div className="border border-[#ccc] rounded-b-[8px]">
          <p className="px-4 py-2 border-b border-gray-400 font-bold">
            Region I / Ilocos Region / Ilocos Norte / Laoag
          </p>
          <div className="p-6 max-h-[500px] overflow-y-scroll">
            {data.map((data) => {
              return (
                <ProjectCard
                  key={data.dateStarted}
                  dateStarted={data.dateStarted}
                  dateCompletion={data.dateCompletion}
                  contractor={data.contractor}
                  accomplishmentRate={data.accomplishmentRate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
