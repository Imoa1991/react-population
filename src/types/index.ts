export interface CountryApi {
  name: {
    common: string;
  };
  population: number;
  region: string;
  flags: {
    svg: string;
    png: string;
  };
}

export interface Country {
  name: string;
  population: number;
  region: string;
  flag: string;
}
export interface PopulationState {
  countries: Country[];
  populationFilter: number;
  error: string | null;
}

export type PopulationAction =
  | { type: "SET_COUNTRIES"; payload: Country[] }
  | { type: "SET_POPULATION_FILTER"; payload: number }
  | { type: "SET_ERROR"; payload: string };
