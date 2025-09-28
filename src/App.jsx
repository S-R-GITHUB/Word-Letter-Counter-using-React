import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import StatsPanel from "./components/StatsPanel";
import Controls from "./components/Controls";
import useTextStats from "./hooks/useTextStats";

export default function App() {
  const [text, setText] = useState("");
  const [ignorePunctuation, setIgnorePunctuation] = useState(false);

  const stats = useTextStats(text, ignorePunctuation);

  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-50 p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <div className="flex">
        <img src="ima.png" alt="logo" className="w-15 h-15" />
        <h1 className="text-2xl font-semibold mb-2 pt-2 pl-2">SR Word & Letter Counter</h1>
        </div>
        <p className="text-sm text-slate-500 mb-4">
          Type or paste text below — counts update live.
        </p>

        <TextEditor text={text} setText={setText} />
        <Controls
          text={text}
          setText={setText}
          ignorePunctuation={ignorePunctuation}
          setIgnorePunctuation={setIgnorePunctuation}
        />
        <StatsPanel stats={stats} />
      </div>
    </div>
  );
}
