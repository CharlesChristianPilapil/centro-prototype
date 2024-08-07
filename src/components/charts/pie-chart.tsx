'use client';

import { TrendingUp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/Card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/Chart';
const chartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Road Construction and Rehabilitation',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Bridge Construction',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Water Supply and Sanitation',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Renewable Energy Infrastructure',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Public Transportation System',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function PieChartComponent() {
  return (
    <div className='h-full grid place-items-center'>
      <Card className='flex flex-col h-fit'>
        <CardHeader className='items-center pb-0'>
          <CardDescription>2023 - Present</CardDescription>
        </CardHeader>
        <CardContent className='flex-1 pb-0'>
          <ChartContainer
            config={chartConfig}
            className='mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground'
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey='visitors'
                label
                nameKey='browser'
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className='flex-col gap-2 text-sm'>
          <div className='flex items-center gap-2 font-medium leading-none'>
            Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
          </div>
          <div className='leading-none text-muted-foreground'>
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
