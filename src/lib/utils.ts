import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Continent } from "@/data/continents";
import { Country } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPopulationRange = (
  countries: Country[],
  currentContinent?: string
) => {
  if (!countries.length) return { min: 0, max: 300 };
  let population = null;

  if (currentContinent) {
    const continentCountries = countries.filter(
      (country) => country.region.toLowerCase() === currentContinent
    );
    population = continentCountries.map((c) => c.population);
  } else {
    const continentTotals = countries.reduce(
      (acc: { [key: string]: number }, country) => {
        if (!acc[country.region]) {
          acc[country.region] = 0;
        }
        acc[country.region] += country.population;
        return acc;
      },
      {}
    );
    population = Object.values(continentTotals);
  }
  return {
    min: Math.min(...population),
    max: Math.max(...population),
  };
};

export const formatPopulation = (value: number) => {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  }).format(value);
};

export const capitalized = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getColorContinent = (continents: Continent[], continent: string) =>
  continents.find((data) => data.name === continent)?.color;
