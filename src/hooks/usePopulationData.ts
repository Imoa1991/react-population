import { useReducer, useEffect } from "react";
import { PopulationState, PopulationAction } from "@/types/index.ts";
import { getCountriesList } from "@/services/fetchCountries.ts";

const initialState: PopulationState = {
  countries: [],
  populationFilter: 0,
  error: null,
};

function populationReducer(
  state: PopulationState,
  action: PopulationAction
): PopulationState {
  switch (action.type) {
    case "SET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        error: null,
      };
    case "SET_POPULATION_FILTER":
      return {
        ...state,
        populationFilter: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function usePopulationData() {
  const [state, dispatch] = useReducer(populationReducer, initialState);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await getCountriesList();
        dispatch({ type: "SET_COUNTRIES", payload: response });
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: `Error fetching countries ${error}`,
        });
      }
    };

    getCountries();
  }, []);

  const setPopulationFilter = (value: number) => {
    dispatch({ type: "SET_POPULATION_FILTER", payload: value });
  };

  return {
    state,
    setPopulationFilter,
  };
}
