import { useContext, useState } from "react";
import { uploadFile } from "../../services/api";
import { DataContext } from "../../context/DataContext";
import Spinner from "../Common/Spinner";

export default function FileUpload() {
  const { setPreviewData, setLoading, loading } = useContext(DataContext);
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMsg("⚠ Please select a file first.");
      return;
    }

    setLoading(true);
    try {
      const res = await uploadFile(file);
      setPreviewData(res.data.rows);
      setMsg("Upload Successful! Proceed to Preview.");
    } catch (err) {
      setMsg("Upload failed. Ensure file format is correct.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-card/70 backdrop-blur-xl p-8 rounded-xl border border-border shadow-lg hover:shadow-glow transition">
      <h2 className="text-2xl font-semibold text-primary mb-4">
        Select or Drag Your File
      </h2>

      {/* Drag Area */}
      <label
        className="w-full py-14 border-2 border-dashed border-primary/40 rounded-xl cursor-pointer
                   flex flex-col items-center justify-center text-center
                   hover:border-primary hover:bg-primary/5 transition"
      >
        <svg
          className="w-12 h-12 text-primary mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>

        <span className="text-muted-foreground">
          {file ? file.name : "Drop Excel file here or click to browse"}
        </span>

        <input
          type="file"
          className="hidden"
          accept=".xlsx"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-6 w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg
                   hover:bg-primary/80 hover:shadow-glow transition"
      >
        {loading ? "Uploading..." : "Upload File"}
      </button>

      {/* Spinner */}
      {loading && (
        <div className="flex justify-center mt-4">
          <Spinner />
        </div>
      )}

      {/* Status Message */}
      {msg && (
        <p className="mt-4 text-center text-accent font-medium animate-fadeIn">
          {msg}
        </p>
      )}
    </div>
  );
}
