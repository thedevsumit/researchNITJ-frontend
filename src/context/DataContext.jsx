import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [previewData, setPreviewData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filters, setFilters] = useState({
    projectType: "",
    domain: "",
    status: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <DataContext.Provider
      value={{
        previewData,
        setPreviewData,
        allData,
        setAllData,
        filters,
        setFilters,
        searchQuery,
        setSearchQuery,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
