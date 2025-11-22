export default function UploadSummary({ totalRows }) {
  return (
    <div className="bg-bgSec p-4 rounded-lg border border-white/10 mt-4">
      <h2 className="text-lg text-accentTeal mb-2">Upload Summary</h2>
      <p className="text-textSecondary">Total Rows Detected: {totalRows}</p>
    </div>
  );
}
