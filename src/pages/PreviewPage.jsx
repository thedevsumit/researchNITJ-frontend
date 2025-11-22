import { useContext } from "react";
import { saveData } from "../services/api";
import { DataContext } from "../context/DataContext";
import Navbar from "../components/Common/Navbar";
import FilePreview from "../components/Upload/FilePreview";
import toast from "react-hot-toast";
import Footer from "../components/Common/Footer";

export default function PreviewPage() {
  const { previewData, setPreviewData } = useContext(DataContext);

  const handleSave = async () => {
    try {
      await saveData(previewData);
      setPreviewData([]);
      toast.success("✅ Data successfully saved to the database!");
    } catch (err) {
      toast.error("❌ Failed to save. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fadeIn">
          <h1 className="text-4xl font-bold text-primary mb-3">
            Preview Uploaded Data
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Review the extracted rows below. Once validated, click Save to push
            the dataset into the main Research Database for dashboard and
            analytics processing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-fadeIn">
          <FilePreview />

          {previewData.length > 0 && (
            <button
              onClick={handleSave}
              className="mt-8 w-full py-4 bg-primary text-primary-foreground text-lg
                         font-medium rounded-xl hover:bg-primary/80 hover:shadow-glow
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Save to Database
            </button>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}
