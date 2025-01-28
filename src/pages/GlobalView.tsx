import { PopulationChart } from "@/components/PopulationChart";
import { PopulationTable } from "@/components/PopulationTable";
import { Country } from "@/types";

interface GlobalViewProps {
  countries: Country[];
  populationFilter: number;
}

export function GlobalView({ countries, populationFilter }: GlobalViewProps) {
  const continentData = countries.reduce(
    (acc: { [key: string]: number }, { region, population }) => {
      acc[region] = (acc[region] || 0) + population;
      return acc;
    },
    {}
  );

  const totalPopulation = Object.values(continentData).reduce(
    (sum, population) => sum + population,
    0
  );

  const chartData = Object.entries(continentData)
    .map(([name, population]) => ({ name, population }))
    .filter((item) => item.population >= populationFilter)
    .sort((a, b) => b.population - a.population);

  const tableData = chartData.map(({ name, population }) => ({
    id: name,
    name,
    population,
    percentage: (population / totalPopulation) * 100,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PopulationChart
        data={chartData}
        title="Global Population by Continent"
      />
      <PopulationTable data={tableData} />
    </div>
  );
}
