import { Link, useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-primary"
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
            </div>
           
         
            <div className="flex gap-6 text-muted-foreground text-sm md:text-base">
              {[
                { label: "Home", path: "/" },
                { label: "Upload", path: "/upload" },
                { label: "Preview", path: "/preview" },
                { label: "Dashboard", path: "/dashboard" },
                { label: "Analytics", path: "/analytics" },
              ].map((item) => (
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-block mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                NIT Jalandhar Research Portal
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Visualize Research.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Drive Innovation.
              </span>
            </h1>

            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              A centralized platform to upload, explore, and analyze research
              publications from NITJ professors. Transform raw Excel data into
              actionable insights with powerful visualizations and comprehensive
              analytics.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                to="/upload"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 shadow-glow hover:shadow-[0_0_50px_hsl(180_85%_55%/0.4)] transition-all duration-300 group"
              >
                <svg
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                Upload Research Data
              </Link>

              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium border-2 border-primary/30 text-primary rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <svg
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Explore Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our streamlined workflow makes research data analysis simple and
              efficient
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">01</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Upload Data
              </h3>
              <p className="text-muted-foreground">
                Import your Excel file containing professor research
                publications. The system validates and processes your data
                automatically.
              </p>
            </div>

            <div className="p-8 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">02</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Filter & Explore
              </h3>
              <p className="text-muted-foreground">
                Apply filters by professor, department, year, or publication
                type. View cleaned datasets in an intuitive table format.
              </p>
            </div>

            <div className="p-8 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">03</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Visualize & Export
              </h3>
              <p className="text-muted-foreground">
                Generate interactive charts and graphs. Export visualizations as
                PNG or comprehensive PDF reports for sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to analyze and visualize research data in one
              comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in backdrop-blur-sm">
              <svg
                className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Upload Excel Files
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Easily upload research publication data in Excel format. Our
                system automatically processes and validates your data for
                accuracy.
              </p>
            </div>

            <div
              className="p-6 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in backdrop-blur-sm"
              style={{ animationDelay: "0.1s" }}
            >
              <svg
                className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Centralized Storage
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All research data is securely stored in our database, making it
                accessible anytime and providing a single source of truth for
                NITJ research metrics.
              </p>
            </div>

            <div
              className="p-6 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in backdrop-blur-sm"
              style={{ animationDelay: "0.2s" }}
            >
              <svg
                className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Advanced Filtering
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Apply powerful filters by professor name, department, year,
                publication type, and more to find exactly what you're looking
                for.
              </p>
            </div>

            <div
              className="p-6 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in backdrop-blur-sm"
              style={{ animationDelay: "0.3s" }}
            >
              <svg
                className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Visual Analytics
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transform raw data into beautiful charts and graphs. Gain
                insights through bar charts, pie charts, line graphs, and trend
                analysis.
              </p>
            </div>

            <div
              className="p-6 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in backdrop-blur-sm"
              style={{ animationDelay: "0.4s" }}
            >
              <svg
                className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Export Reports
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Download your visualizations as high-quality PNG images or
                comprehensive PDF reports for presentations and documentation.
              </p>
            </div>

            <div
              className="p-6 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in backdrop-blur-sm"
              style={{ animationDelay: "0.5s" }}
            >
              <svg
                className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Trend Analysis
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Track research output over time, identify trending topics, and
                analyze publication patterns across departments and years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto p-12 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Upload your research data now and unlock powerful insights with
                our advanced visualization tools. Join the digital
                transformation of research analytics at NIT Jalandhar.
              </p>
              <Link
                to="/upload"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 shadow-glow hover:shadow-[0_0_50px_hsl(180_85%_55%/0.5)] transition-all duration-300"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                Start Uploading Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 