import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { PopulationFilter } from "@/components/PopulationFilter";
import { GlobalView } from "@/pages/GlobalView";
import { ContinentView } from "@/pages/ContinentView";
import { usePopulationData } from "@/hooks/usePopulationData";
import { getPopulationRange } from "@/lib/utils";

const AppContent = () => {
  const {
    state: { countries, populationFilter, error },
    setPopulationFilter,
  } = usePopulationData();

  const location = useLocation();
  const continentName = location.pathname.split("/continent/")[1];
  const { min, max } = getPopulationRange(countries, continentName);

  useEffect(() => {
    setPopulationFilter(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (!countries.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 bg-gradient-to-r animate-spin from-pink-500 via-yellow-500 text-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <PopulationFilter
        min={min}
        max={max}
        value={populationFilter}
        onChange={setPopulationFilter}
      />
      <Routes>
        <Route
          path="/"
          element={
            <GlobalView
              countries={countries}
              populationFilter={populationFilter}
            />
          }
        />
        <Route
          path="/continent/:continent"
          element={
            <ContinentView
              countries={countries}
              populationFilter={populationFilter}
            />
          }
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
