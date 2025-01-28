import { NavLink } from "react-router-dom";
import { Globe } from "lucide-react";
import { continents } from "@/data/continents";

export function Navigation() {
  return (
    <div className="bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`
              }
            >
              <Globe className="w-5 h-5 mr-1" />
              Global
            </NavLink>
            {continents.map(({ name }) => (
              <NavLink
                key={name}
                to={`/continent/${name.toLowerCase()}`}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
