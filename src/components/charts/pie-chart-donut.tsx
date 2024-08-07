"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/Chart";
const chartData = [
  { browser: "safari", visitors: 50.02, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 49.98, fill: "var(--color-firefox)" },
];

const chartConfig = {
  safari: {
    label: "Physical Accomplishment",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: " ",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export const PieChartDonutComponent = () => {
  return (
    <Card className="flex flex-row">
      <CardHeader className="items-center justify-center">
        <p className="font-bold text-xl mb-[12px]">
          Physical
          <br /> Accomplishment
        </p>
        <p className="font-bold text-4xl">50.02%</p>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
