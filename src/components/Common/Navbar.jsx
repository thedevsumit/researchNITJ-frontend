import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Upload", path: "/upload" },
    { label: "Preview", path: "/preview" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Analytics", path: "/analytics" },
  ];

  return (
    <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
          <svg
            className="h-6 w-6 text-primary group-hover:scale-110 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>

          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ResearchNITJ
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 text-muted-foreground text-sm md:text-base">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-2 py-1 transition-colors hover:text-primary ${
                isActive(item.path) ? "text-primary" : ""
              }`}
            >
              {item.label}

              {isActive(item.path) && (
                <span className="absolute -bottom-[8px] left-0 w-full h-[2px] bg-gradient-to-r from-primary to-blue-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // Close Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/40 px-6 py-4 animate-fadeIn">
          <div className="flex flex-col gap-4 text-muted-foreground text-base">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`relative py-1 transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : ""
                }`}
              >
                {item.label}

                {isActive(item.path) && (
                  <span className="absolute -bottom-[4px] left-0 w-full h-[2px] bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
