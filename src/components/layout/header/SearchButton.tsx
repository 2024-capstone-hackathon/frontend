import { Separator } from "@components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@components/ui/sheet";

export default function SearchButton() {
  return (
    <Sheet>
      <SheetTrigger className="flex flex-row items-center justify-center hover:underline hover:underline-offset-1">
        나와 닮은 메아리 듣기
      </SheetTrigger>
      <SheetContent className="bg-[#DCD6C8] w-[600px] sm:w-[640px]">
        <SheetHeader className="my-5">
          <SheetTitle className="flex flex-row items-center gap-3 mb-3">
            <p className="text-body-1 font-medium">
              나와 닮아서, 더 맘에 닿는 <span className="text-[#D4A96A]">메아리</span>들
            </p>
          </SheetTitle>
          <SheetDescription>
            <p className="text-detail-1 font-regular mb-3">
              나와 비슷한 상황의 속삭임을 찾아보고,
              <br /> 따뜻한 메아리의 이야기를 차분히 들어보세요
            </p>
            <p className="text-detail-1 font-regular">
              언제든지 꺼내볼 수 있는 이야기 모음 속에서
              <br /> 마음에 남는 조언들을 하나씩 만나보세요
            </p>
          </SheetDescription>
        </SheetHeader>
        <Separator />
        {/* 검색 */}
        {/* 라디오  */}
      </SheetContent>
    </Sheet>
  );
}
