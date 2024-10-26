import useSuspenseGetLetter from "@hooks/query/useGetLetter";
import { useMemo, useState } from "react";

const MAX_TEXT = 120;
export default function TodaysLetter() {
  const [expanded, setExpanded] = useState(false);

  const { data: letter } = useSuspenseGetLetter();

  const displayText = useMemo(
    () =>
      expanded
        ? letter.text
        : letter.text.slice(0, MAX_TEXT) + (letter.text.length > MAX_TEXT ? "..." : ""),
    [expanded],
  );

  return (
    <div className="relative min-w-72 max-w-[500px] p-10 mx-auto bg-[#F5EDE0] border border-[#D4A96A] text-[#4B3F3B] text-body-3 leading-relaxed text-center shadow-xl transform rotate-[-2deg] grain-effect">
      <p className="text-body-3">{displayText}</p>
      {letter.text.length > MAX_TEXT && (
        <button className="text-[#8A5A5A] underline mt-3" onClick={() => setExpanded(!expanded)}>
          {expanded ? "접기" : "더보기"}
        </button>
      )}
      <div className="absolute w-10 h-5 bg-[rgba(0,0,0,0.05)] rounded-full -top-1 -left-2 transform rotate-[-5deg]"></div>
      <div className="absolute w-10 h-5 bg-[rgba(0,0,0,0.05)] rounded-full -top-1 -right-2 transform rotate-5"></div>
    </div>
  );
}
