import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { SlidersHorizontal, FilterX } from "lucide-react";

export default function Filters() {
  const { allData, filters, setFilters } = useContext(DataContext);

  // Dynamic unique filter lists
  const projectTypes = [
    ...new Set(allData.map((d) => d.projectType?.trim()).filter(Boolean)),
  ];
  const domains = [
    ...new Set(allData.map((d) => d.domain?.trim()).filter(Boolean)),
  ];
  const statusValues = [
    ...new Set(allData.map((d) => d.status?.trim()).filter(Boolean)),
  ];

  const clearFilters = () => {
    setFilters({
      projectType: "",
      domain: "",
      status: "",
    });
  };

  const filterSelect = (label, valueKey, values) => (
    <div className="flex flex-col w-full">
      <label className="text-xs text-muted-foreground mb-1 tracking-wide">
        {label}
      </label>

      <div className="relative">
        <select
          className="w-full px-4 py-2 bg-card/60 backdrop-blur 
                     border border-border rounded-lg text-foreground
                     hover:border-primary/50 transition
                     focus:border-primary/60 focus:ring-2 focus:ring-primary/40
                     cursor-pointer appearance-none
                     max-h-[48px]"
          value={filters[valueKey]}
          onChange={(e) =>
            setFilters({ ...filters, [valueKey]: e.target.value })
          }
        >
          <option value="">All {label}</option>
          {values.map((v) => (
            <option key={v} value={v} className="bg-background text-foreground">
              {v}
            </option>
          ))}
        </select>

        {/* dropdown indicator */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary opacity-70 text-xs">
          ▼
        </span>
      </div>
    </div>
  );

  return (
    <div
      className="p-6 bg-card/40 backdrop-blur-xl rounded-xl 
                 border border-border shadow-lg mt-6 space-y-6 animate-fadeIn"
    >
      {/* Header */}
      <div className="flex items-center gap-2 text-primary font-semibold text-lg">
        <SlidersHorizontal size={18} />
        <span>Filter Research Data</span>
      </div>

      {/* Dropdown Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filterSelect("Project Types", "projectType", projectTypes)}
        {filterSelect("Domains", "domain", domains)}
        {filterSelect("Status", "status", statusValues)}
      </div>

      {/* Clear Filters Button */}
      <div className="flex justify-end">
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-primary/10 text-primary border border-primary/30
                     hover:bg-primary/20 transition text-sm"
        >
          <FilterX size={14} />
          Clear Filters
        </button>
      </div>
    </div>
  );
}
