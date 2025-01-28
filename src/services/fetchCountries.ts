import axios from "axios";
import { Country, CountryApi } from "@/types/index.ts";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountriesList = async (): Promise<Country[]> => {
  try {
    const response = await api.get("/all");

    return response.data.map((country: CountryApi) => {
      return {
        name: country.name.common,
        population: country.population,
        region: country.region,
        flag: country.flags.svg,
      };
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};
