import { useParams } from "react-router-dom";
import { PopulationChart } from "@/components/PopulationChart";
import { PopulationTable } from "@/components/PopulationTable";
import { Country } from "@/types";
import { continents } from "@/data/continents";
import { capitalized, getColorContinent } from "@/lib/utils";

interface ContinentViewProps {
  countries: Country[];
  populationFilter: number;
}

export function ContinentView({
  countries,
  populationFilter,
}: ContinentViewProps) {
  const { continent } = useParams<{ continent: string }>();

  if (!continent) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-red-600 text-xl">Continent not found</p>
      </div>
    );
  }
  const capitalizedContinent = capitalized(continent);

  const colorChart = getColorContinent(continents, capitalizedContinent);

  const continentCountries = countries.filter(
    (country) => country.region.toLowerCase() === continent
  );

  const totalPopulation = continentCountries.reduce(
    (sum, country) => sum + country.population,
    0
  );

  const chartData = continentCountries
    .map(({ name, population, flag }) => ({
      name,
      population,
      flag,
    }))
    .filter((country) => country.population >= populationFilter)
    .sort((a, b) => b.population - a.population);

  const filteredCountries = chartData.map(({ name, population, flag }) => ({
    id: name,
    name,
    population,
    percentage: (population / totalPopulation) * 100,
    flag: flag,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PopulationChart
        data={chartData}
        title={`Population by Country in ${capitalizedContinent}`}
        fill={colorChart}
      />
      <PopulationTable data={filteredCountries} showFlags={true} />
    </div>
  );
}
