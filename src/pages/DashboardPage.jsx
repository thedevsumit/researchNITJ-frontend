import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Common/Navbar";
import { DataContext } from "../context/DataContext";
import { fetchAllData } from "../services/api";
import DataTable from "../components/Dashboard/DataTable";
import SearchBar from "../components/Dashboard/SearchBar";
import Filters from "../components/Dashboard/Filters";
import Pagination from "../components/Dashboard/Pagination";
import { ArrowUp, ArrowDown } from "lucide-react";
import Footer from "../components/Common/Footer";

export default function DashboardPage() {
  const { allData, setAllData, searchQuery, filters } = useContext(DataContext);

  const [processedData, setProcessedData] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "asc",
  });

  useEffect(() => {
    fetchAllData().then((res) => setAllData(res.data));
  }, []);

  useEffect(() => {
    if (!allData) return;

    let result = [...allData];

    // SEARCH
    result = result.filter((item) => {
      const search = searchQuery.toLowerCase();
      return (
        item.facultyName?.toLowerCase().includes(search) ||
        item.title?.toLowerCase().includes(search) ||
        item.projectType?.toLowerCase().includes(search) ||
        item.fundingAgency?.toLowerCase().includes(search)
      );
    });

    // FILTERS
    result = result.filter((item) => {
      return (
        (filters.projectType
          ? item.projectType === filters.projectType
          : true) &&
        (filters.domain ? item.domain === filters.domain : true) &&
        (filters.status ? item.status === filters.status : true)
      );
    });

    // SORTING
    if (sortConfig.key) {
      result.sort((a, b) => {
        const valA = a[sortConfig.key] ?? "";
        const valB = b[sortConfig.key] ?? "";

        if (!isNaN(valA) && !isNaN(valB)) {
          return sortConfig.direction === "asc"
            ? Number(valA) - Number(valB)
            : Number(valB) - Number(valA);
        }

        return sortConfig.direction === "asc"
          ? valA.toString().localeCompare(valB.toString())
          : valB.toString().localeCompare(valA.toString());
      });
    }

    setProcessedData(result);
    setPage(1);
  }, [allData, searchQuery, filters, sortConfig]);

  const startIndex = (page - 1) * pageSize;
  const paginatedData = processedData.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(processedData.length / pageSize);

  const sortableColumns = [
    { key: "facultyName", label: "Faculty Name" },
    { key: "projectType", label: "Project Type" },
    { key: "domain", label: "Domain" },
    { key: "status", label: "Status" },
    { key: "amount", label: "Funding Amount" },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background px-6 py-14">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-10 animate-fadeIn">
          <h1 className="text-4xl font-bold text-primary mb-3 flex items-center gap-3">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4h18M3 10h18M3 16h18"
              />
            </svg>
            Research Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore, search, filter, sort and analyze uploaded research data.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-7xl mx-auto animate-fadeIn">
          <SearchBar />
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto mt-6 animate-fadeIn">
          <div className="bg-card/60 backdrop-blur-xl border border-border rounded-xl p-6 shadow-lg">
            <h3 className="text-primary font-semibold mb-4 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4h4v3H3V4zm0 6h8v3H3v-3zm0 6h12v3H3v-3z"
                />
              </svg>
              Filters
            </h3>
            <Filters />
          </div>
        </div>

        {/* Sorting */}
        <div className="max-w-7xl mx-auto mt-6 animate-fadeIn flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-4">
            {/* Sort By */}
            <select
              className="bg-card/60 backdrop-blur border border-border text-foreground px-4 py-2 rounded-lg hover:border-primary/60 transition cursor-pointer"
              onChange={(e) =>
                setSortConfig({ ...sortConfig, key: e.target.value })
              }
            >
              <option value="">Sort By</option>
              {sortableColumns.map((col) => (
                <option key={col.key} value={col.key}>
                  {col.label}
                </option>
              ))}
            </select>

            {/* Sort Direction Toggle */}
            <button
              onClick={() =>
                setSortConfig({
                  ...sortConfig,
                  direction: sortConfig.direction === "asc" ? "desc" : "asc",
                })
              }
              className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur 
                         border border-border rounded-lg text-foreground
                         hover:border-primary/60 hover:text-primary transition"
            >
              {sortConfig.direction === "asc" ? (
                <ArrowUp className="w-4 h-4 text-primary" />
              ) : (
                <ArrowDown className="w-4 h-4 text-primary" />
              )}
              <span className="text-sm">
                {sortConfig.direction === "asc" ? "Ascending" : "Descending"}
              </span>
            </button>
          </div>

          {/* Count */}
          <div className="text-muted-foreground text-sm">
            Showing{" "}
            <span className="text-primary font-semibold">
              {paginatedData.length}
            </span>{" "}
            of{" "}
            <span className="text-accent font-semibold">
              {processedData.length}
            </span>{" "}
            records
          </div>
        </div>

        {/* Table */}
        <div className="max-w-7xl mx-auto mt-8 animate-fadeIn">
          <div className="bg-card/70 backdrop-blur-xl rounded-xl border border-border shadow-lg hover:shadow-glow transition">
            <DataTable data={paginatedData} />
          </div>
        </div>

        {/* Pagination */}
        <div className="max-w-7xl mx-auto mt-10 flex justify-center animate-fadeIn">
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
      <Footer/>
    </>
  );
}
