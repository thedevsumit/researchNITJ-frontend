// src/components/Common/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left: Logo + text */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <svg
              className="h-5 w-5 text-primary"
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
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">ResearchNITJ</p>
            <p className="text-xs text-muted-foreground">
              Research analytics dashboard for NIT Jalandhar.
            </p>
          </div>
        </div>

        {/* Middle: Links */}
      

        {/* Right: Copyright + credit */}
        <div className="text-right text-xs md:text-sm text-muted-foreground space-y-1">
          <p>© {year} ResearchNITJ. All rights reserved.</p>
          <p className="text-[11px] md:text-xs">
            Built with ❤️ by NITJ students.
          </p>
        </div>
      </div>
    </footer>
  );
}
