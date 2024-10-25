import EchoList from "@components/home/EchoList";
import EchoSending from "@components/home/EchoSending";
import Episode from "@components/home/Episode";
import useDailyAnsweredStorage from "@hooks/storage/useDailyAnsweredStorage";
import { colors } from "@styles/theme";
import { PropsWithChildren, Suspense } from "react";
import LoadListLottie from "@assets/lottie-letter.json";
import Lottie from "react-lottie";

export default function HomePage() {
  const [isAnswerd] = useDailyAnsweredStorage();

  return (
    <div className="flex flex-col justify-center items-center gap-[130px] p-[100px]">
      {/* 오늘의 속삭임(사연) */}
      <div className={`flex flex-col items-center gap-15`}>
        <div className={`flex flex-col items-center`}>
          <h3>
            {/* TODO: 툴팁으로 '속삭임' 설명 추가하기 */}
            <Highlight>오늘의 속삭임</Highlight>이 도착했어요
          </h3>
          <HelperText />
        </div>
        <Episode />
        {!isAnswerd && <EchoSending />}
      </div>
      {/* 오늘의 메아리(답변) */}
      <div className={`flex flex-col h-full items-center gap-15`}>
        <div className={`flex flex-col items-center gap-3`}>
          <h4>
            다른 <span className={`text-[#D4A96A]`}>보니</span>들이 남긴 메아리를 모아봤어요
          </h4>
          <p className="text-body-3">따뜻한 조언의 울림을 함께 느껴봐요 😊</p>
        </div>
        {/* 답변 */}
        <Suspense
          fallback={
            <Lottie
              options={{ animationData: LoadListLottie, loop: true, autoplay: true }}
              height={"500px"}
            />
          }
        >
          <EchoList />
        </Suspense>
      </div>
    </div>
  );
}

function HelperText() {
  const [isAnswerd] = useDailyAnsweredStorage();

  return (
    <>
      {!isAnswerd ? (
        <p className="text-body-3">
          {/* TODO: 툴팁으로 '보니' 설명 추가하기 */}
          <span className={`text-[#D4A96A]`}>보니</span>의 사연에 지혜가 담긴{" "}
          <Highlight>메아리</Highlight>를 보내주세요
        </p>
      ) : (
        <p className="text-body-3">
          {/* TODO: 툴팁으로 '보니' 설명 추가하기 */}
          <span className={`text-[#D4A96A]`}>보니</span>의 사연에 소중한{" "}
          <Highlight>메아리</Highlight>를 보내주셨네요!
        </p>
      )}
    </>
  );
}

function Highlight({ color = colors.highlight, children }: PropsWithChildren<{ color?: string }>) {
  return <span className={`text-[${color}]`}>{children}</span>;
}
