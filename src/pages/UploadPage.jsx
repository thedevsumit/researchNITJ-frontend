import Navbar from "../components/Common/Navbar";
import FileUpload from "../components/Upload/FileUpload";

export default function UploadPage() {
  return (
    <>
      <Navbar />

      {/* Page Wrapper */}
      <div className="min-h-screen bg-background px-6 py-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fadeIn">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Upload Research Data
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Upload the Excel file containing research project details from NITJ
            faculty. Our system automatically detects structure, extracts
            fields, and prepares your dataset for preview and analytics.
          </p>
        </div>

        {/* Feature Cards */}
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20 animate-fadeIn">
          {/* Card 1 */}
          <div
            className="p-10 bg-card/70 backdrop-blur-xl border border-border rounded-2xl shadow-lg 
                  hover:shadow-[0_0_35px_hsl(180_85%_55%/0.35)] hover:border-primary/40 
                  transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary">
                Excel Supported
              </h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Upload official faculty and departmental .xlsx research datasets
              with no formatting required.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-10 bg-card/70 backdrop-blur-xl border border-border rounded-2xl shadow-lg
                  hover:shadow-[0_0_35px_hsl(180_85%_55%/0.35)] hover:border-primary/40
                  transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary">
                Auto Parsing
              </h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              The upload engine extracts fields like Title, Funding, Faculty
              Name, Duration, Status & Domain.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-10 bg-card/70 backdrop-blur-xl border border-border rounded-2xl shadow-lg
                  hover:shadow-[0_0_35px_hsl(180_85%_55%/0.35)] hover:border-primary/40
                  transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary">
                Preview Before Save
              </h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              View and verify extracted records before sending them to Dashboard
              & Analytics processing.
            </p>
          </div>
        </div>

        {/* Upload Widget */}
        <div className="max-w-3xl mx-auto animate-fadeIn">
          <FileUpload />
        </div>
      </div>
    </>
  );
}
