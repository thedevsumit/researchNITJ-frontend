import Navbar from "../components/Common/Navbar";
import Charts from "../components/Analytics/Charts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function AnalyticsPage() {
  const chartsRef = useRef(null);

  const exportAsImage = async () => {
    if (!chartsRef.current) return;
    const canvas = await html2canvas(chartsRef.current, {
      scale: 2,
      backgroundColor: "#0B0E12",
    });
    const link = document.createElement("a");
    link.download = "analytics.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const exportAsPDF = async () => {
    if (!chartsRef.current) return;
    const canvas = await html2canvas(chartsRef.current, {
      scale: 2,
      backgroundColor: "#0B0E12",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
    pdf.save("analytics.pdf");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen w-full bg-background px-6 py-14 animate-fadeIn">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <h1 className="text-4xl font-bold text-primary mb-3">
            Analytics Overview
          </h1>
          <p className="text-muted-foreground text-lg">
            Visual insights into research output, faculty participation, funding
            trends, and project distribution.
          </p>
        </div>

        {/* EXPORT BUTTONS */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={exportAsImage}
            className="px-6 py-3 bg-primary text-background rounded-lg 
                       hover:opacity-80 transition shadow-md"
          >
            Export as PNG
          </button>

          <button
            onClick={exportAsPDF}
            className="px-6 py-3 bg-transparent border border-primary text-primary 
                       rounded-lg hover:bg-primary/10 transition shadow-md"
          >
            Export as PDF
          </button>
        </div>

        {/* CHARTS AREA */}
        <div ref={chartsRef} className="max-w-7xl mx-auto">
          <Charts />
        </div>
      </div>
    </>
  );
}
