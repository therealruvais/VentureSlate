import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden px-4 py-10 mb-10">
      <div className="h-[750px] overflow-y-auto rounded-lg shadow-lg border">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl="/sample.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PDFViewer;
