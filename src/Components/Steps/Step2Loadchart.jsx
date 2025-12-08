import React from "react";

export default function Step2Loadchart({
  uploadedFile,
  handleFileUpload,
  handleDragOver,
  handleDrop,
  onNext
}) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-center text-sm">
        Ready to upload the loadchart? We'll extract faculty assignments.
      </p>

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-teal-500 transition"
      >
        <div className="space-y-2">
          <p className="text-gray-600">Drag and drop loadchart file to upload</p>

          <label className="text-teal-600 hover:text-teal-700 cursor-pointer">
            Choose file (Excel/Word)
            <input
              type="file"
              className="hidden"
              accept=".xlsx,.xls,.doc,.docx"
              onChange={handleFileUpload}
            />
          </label>

          {uploadedFile && (
            <p className="text-sm text-green-600 mt-2">
              File selected: {uploadedFile.name}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded shadow-lg transition"
      >
        Upload Loadchart
      </button>
    </div>
  );
}
