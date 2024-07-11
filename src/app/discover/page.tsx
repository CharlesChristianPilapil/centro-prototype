import { BarChartStacked } from "../ui/charts/stacked";
import { PieChartComponent } from "../ui/charts/pie-chart";
import { BarChartMultiple } from "../ui/charts/multiple";
import { BarChartCustomLabel } from "../ui/charts/custom-label";

const page = () => {
  return (
    <div className="container">
      <PieChartComponent />
      <BarChartStacked />
      <BarChartMultiple />
      <div className="max-w-[500px]">
        <BarChartCustomLabel />
      </div>
    </div>
  );
};

export default page;
