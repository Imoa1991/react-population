import { SlidersHorizontal } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { formatPopulation } from "@/lib/utils";

interface PopulationFilterProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export function PopulationFilter({
  min,
  max,
  value,
  onChange,
}: PopulationFilterProps) {
  return (
    <div className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-4">
          <SlidersHorizontal className="w-5 h-5 text-gray-400" />
          <div className="flex-1">
            <Slider
              min={min}
              max={max}
              value={[value]}
              onValueChange={(values) => onChange(values[0])}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>{formatPopulation(min)}</span>
              <span>{formatPopulation(value)}</span>
              <span>{formatPopulation(max)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
