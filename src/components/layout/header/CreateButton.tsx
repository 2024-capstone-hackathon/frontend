import LetterSending from "@components/layout/header/LetterSending";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@components/ui/sheet";
import useLikeLetter from "@hooks/mutation/useLikeLetter";
import useSuspenseGetLetterList from "@hooks/query/useGetLetterList";
import { PropsWithChildren, Suspense } from "react";

export default function CreateButton() {
  return (
    <Sheet>
      <SheetTrigger className="flex flex-row items-center justify-center hover:underline hover:underline-offset-1">
        나의 속삭임 띄우기
      </SheetTrigger>
      <SheetContent className="bg-[#DCD6C8] w-[600px] sm:w-[640px]">
        <SheetHeader className="my-5">
          <SheetTitle className="flex flex-col gap-3 mb-3">
            <p className="text-body-1 font-medium">
              편지로 전하는 나의 <span className="text-[#D4A96A]">속삭임</span>,
              <br /> 내일을 기다려요
            </p>
          </SheetTitle>
          <SheetDescription>
            <p className="text-detail-1 font-regular mb-3">
              마음에 닿는 속삭임이 없다면
              <br /> 여기에서 당신의 이야기를 남겨보세요
            </p>
            <p className="text-detail-1 font-regular">
              오늘 가장 따스했던 속삭임은
              <br /> 내일 <span className="text-[#8A5A5A]">오늘의 속삭임</span>으로 선정되어
              <br /> 다른 사람들의 메아리를 받아볼 수 있어요
            </p>
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <Suspense>
          <div className="w-full h-[calc(100vh-280px)] overflow-scroll pb-10">
            {/* 사연 보내기 */}
            <LetterSending />
            {/* 사연 리스트  */}
            <p className="text-body-3 font-medium mt-15">
              아래는 오늘 보니들이 먼저 남긴 속삭임들이에요
            </p>
            <LetterList />
          </div>
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}

function LetterList() {
  const { data: letterList } = useSuspenseGetLetterList();

  return (
    <>
      {letterList.map(({ isLiked, text, count }) => (
        <Letter key={text} isLiked={isLiked} count={count}>
          {text}
        </Letter>
      ))}
    </>
  );
}

function Letter({
  count,
  isLiked,
  children,
}: PropsWithChildren<{ count: number; isLiked: boolean }>) {
  const { mutate: like } = useLikeLetter();

  return (
    <div className="w-full mx-auto pt-9 pb-4 border-b border-dashed border-[#8A5A5A70]">
      <p className="mb-4 text-detail-1">{children}</p>
      <div className="flex flex-row justify-between">
        <p className="text-detail-3 mt-3 text-red-950">
          이 속삭임의 온도는 <span className="text-rose-700">{count}</span>도
        </p>
        <Button
          onClick={() => like()}
          disabled={isLiked}
          size="sm"
          variant={"ghost"}
          className="flex text-red-700 hover:text-red-900 items-center justify-center py-0 px-2 hover:bg-rose-100/10  text-detail-3 font-regular transition-transform duration-300 active:scale-95"
        >
          {isLiked ? "온기를 더했어요" : "온기 더하기"}
        </Button>
      </div>
    </div>
  );
}
