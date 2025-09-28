import React from "react";

export default function Controls({ text, setText, ignorePunctuation, setIgnorePunctuation }) {
  
  function handleClear() {
    setText("");
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      console.error("Copy failed", e);
    }
  }

  function handleDownload() {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "text.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex items-center gap-3">
        <button
          onClick={handleClear}
          className="px-3 py-1 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm"
        >
          Clear
        </button>

        <button
          onClick={handleCopy}
          className="px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm"
        >
          Copy
        </button>

        <button
          onClick={handleDownload}
          className="px-3 py-1 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm"
        >
          Download .txt
        </button>

        <label className="ml-2 inline-flex items-center text-sm">
          <input
            type="checkbox"
            checked={ignorePunctuation}
            onChange={(e) => setIgnorePunctuation(e.target.checked)}
            className="mr-2"
          />
          Ignore punctuation
        </label>
      </div>
    </div>
  );
}
