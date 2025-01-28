import { PopulationState, PopulationAction } from "@/types";

export const initialState: PopulationState = {
  countries: [],
  error: null,
  populationFilter: 0,
};

export function populationReducer(
  state: PopulationState,
  action: PopulationAction
): PopulationState {
  switch (action.type) {
    case "SET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_POPULATION_FILTER":
      return {
        ...state,
        populationFilter: action.payload,
      };
    default:
      return state;
  }
}
