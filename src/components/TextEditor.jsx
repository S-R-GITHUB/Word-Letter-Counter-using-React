import React from "react";

export default function TextEditor({ text, setText }) {
  return (
    <textarea
      className="w-full h-48 p-4 border rounded-lg resize-vertical focus:outline-none focus:ring-2 focus:ring-indigo-400"
      placeholder="Start typing..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
