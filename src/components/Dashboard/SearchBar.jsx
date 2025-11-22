import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useContext(DataContext);

  return (
    <div className="relative group">
      <input
        type="text"
        placeholder="Search by professor, title, project type, funding..."
        className="w-full px-5 py-4 bg-card/60 backdrop-blur border border-border rounded-xl 
                   text-foreground placeholder-muted-foreground
                   focus:border-primary/60 focus:ring-2 focus:ring-primary/40
                   transition-all duration-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <svg
        className="w-5 h-5 text-primary absolute right-4 top-1/2 -translate-y-1/2
                   opacity-80 group-focus-within:opacity-100 transition"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
        />
      </svg>
    </div>
  );
}
