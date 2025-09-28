import React from "react";

export default function StatsPanel({ stats }) {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div className="p-3 border rounded-lg">
        <div className="text-xs text-slate-500">Words</div>
        <div className="text-lg font-medium">{stats.wordCount}</div>
      </div>

      <div className="p-3 border rounded-lg">
        <div className="text-xs text-slate-500">Characters (no spaces)</div>
        <div className="text-lg font-medium">{stats.charsNoSpaces}</div>
      </div>

      <div className="p-3 border rounded-lg">
        <div className="text-xs text-slate-500">Characters (with spaces)</div>
        <div className="text-lg font-medium">{stats.charsWithSpaces}</div>
      </div>

      <div className="p-3 border rounded-lg">
        <div className="text-xs text-slate-500">Avg. word length</div>
        <div className="text-lg font-medium">{stats.avgWordLen}</div>
      </div>

      <div className="p-3 border rounded-lg">
        <div className="text-xs text-slate-500">Estimated reading time (min)</div>
        <div className="text-lg font-medium">{stats.readingTimeMinutes}</div>
      </div>

      <div className="p-3 border rounded-lg">
        <div className="text-xs text-slate-500">Sample words</div>
        <div className="text-sm text-slate-700">
          {stats.wordsSample.join(", ") || "—"}
        </div>
      </div>
    </div>
  );
}
