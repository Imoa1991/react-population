import { formatPopulation } from "@/lib/utils";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  name: string;
  population: number;
}

interface PopulationChartProps {
  data: ChartData[];
  title: string;
  fill?: string;
}

export function PopulationChart({ data, title, fill }: PopulationChartProps) {
  return (
    <div className="w-full h-[800px] p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-40}
            textAnchor="end"
            height={250}
            interval={0}
          />
          <YAxis tickFormatter={(value: number) => formatPopulation(value)} />
          <Tooltip formatter={(value: number) => formatPopulation(value)} />
          <Bar
            dataKey="population"
            fill={fill ?? "#94a182"}
            name="Population"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
