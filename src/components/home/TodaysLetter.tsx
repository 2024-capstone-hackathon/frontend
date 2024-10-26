import EchoSending from "@components/home/EchoSending";
import useSuspenseGetLetter from "@hooks/query/useGetLetter";
import useDailyAnsweredStorage from "@hooks/storage/useDailyAnsweredStorage";
import { useMemo, useState } from "react";

const MAX_TEXT = 120;
export default function TodaysLetter() {
  const [isAnswerd] = useDailyAnsweredStorage();

  const [expanded, setExpanded] = useState(false);

  const { data: letter } = useSuspenseGetLetter();

  const displayText = useMemo(
    () =>
      expanded
        ? letter.title
        : letter.title.slice(0, MAX_TEXT) + (letter.title.length > MAX_TEXT ? "..." : ""),
    [expanded],
  );

  return (
    <>
      <div className="relative w-[500px] p-10 mx-auto bg-[#F5EDE0] border border-[#D4A96A] text-[#4B3F3B] text-body-3 leading-relaxed shadow-xl transform rotate-[-2deg] grain-effect overflow-visible">
        <p className="text-body-3 whitespace-pre-line">{displayText}</p>
        {letter.title.length > MAX_TEXT && (
          <button
            className="text-[#8A5A5A] w-full text-end underline mt-3 text-detail-1"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "접기" : "더보기"}
          </button>
        )}
        <div className="absolute w-12 h-5 bg-[rgba(0,0,0,0.08)] rounded-full -top-1 -left-3 transform rotate-[-5deg] z-20"></div>
        <div className="absolute w-12 h-5 bg-[rgba(0,0,0,0.08)] rounded-full -top-1 -right-2 transform rotate-5 z-20"></div>
      </div>
      {!isAnswerd && <EchoSending letterId={letter.id} />}
    </>
  );
}
