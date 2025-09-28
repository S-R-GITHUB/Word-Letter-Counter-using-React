// src/hooks/useTextStats.js
import { useMemo } from "react";

export default function useTextStats(text, ignorePunctuation) {
  const normalizedText = useMemo(() => {
    if (!ignorePunctuation) return text;

    // Preferred: Unicode-aware removal of punctuation/symbols (modern browsers)
    try {
      return text.replace(/[\p{P}\p{S}]+/gu, "").replace(/\s+/g, " ").trim();
    } catch (e) {
      // Fallback if Unicode property escapes are not supported:
      // remove common punctuation, normalize whitespace
      return text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").trim();
    }
  }, [text, ignorePunctuation]);

  return useMemo(() => {
    const charsWithSpaces = normalizedText.length;
    const charsNoSpaces = normalizedText.replace(/\s+/g, "").length;

    const trimmed = normalizedText.trim();
    const words = trimmed === "" ? [] : trimmed.split(/\s+/);

    const wordCount = words.length;
    const avgWordLen = wordCount === 0 ? 0 : (words.join("").length / wordCount).toFixed(2);
    const readingTimeMinutes = (wordCount / 200).toFixed(2); // 200 wpm

    return {
      charsWithSpaces,
      charsNoSpaces,
      wordCount,
      avgWordLen,
      readingTimeMinutes,
      wordsSample: words.slice(0, 10),
    };
  }, [normalizedText]);
}
