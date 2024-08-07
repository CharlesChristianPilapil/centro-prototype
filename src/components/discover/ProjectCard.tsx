import { CardLayout } from "./CardLayout";

export const ProjectCard = ({
  dateStarted,
  dateCompletion,
  contractor,
  accomplishmentRate,
}: {
  dateStarted: string;
  dateCompletion: string;
  contractor: string;
  accomplishmentRate: string;
}) => {
  return (
    <CardLayout
      style="flex justify-between py-4 px-8 rounded-bl-[8px] rounded-br-[8px] mb-6"
      title={"Project ID"}
    >
      <div className="w-[100%]">
        <div className="flex justify-between mb-4">
          <div className="flex items-center mr-6">
            <p>Date Started : </p>
            <p className="px-[10px] py-[5px] ml-[10px] text-white text-xs bg-[#00e272] rounded-lg">
              {dateStarted}
            </p>
          </div>
          <div className="flex items-center">
            <p>Date of Completion : </p>
            <p className="px-[10px] py-[5px] ml-[10px] text-white text-xs bg-[#E84A5A] rounded-lg">
              {dateCompletion}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center mr-6">
            <p>Contractor : </p>
            <p className="px-[10px] py-[5px] ml-[10px] font-bold">
              {contractor}
            </p>
          </div>
          <div className="flex items-center">
            <p>Physical Accomplishment : </p>
            <p className="px-[10px] py-[5px] ml-[10px] text-white text-xs bg-yellow-500 rounded-lg">
              {`${accomplishmentRate}%`}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-10">&gt;</div>
    </CardLayout>
  );
};

{
  /* <div
      className={`w-[100%] flex justify-between py-4 px-8 flex shadow-lg rounded-bl-[8px] rounded-br-[8px] mb-6 ${cardStyle.container}`}
      data-label={"Project Title"}
      onClick={onClick}
    ></div> */
}
