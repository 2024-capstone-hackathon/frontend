import { Button } from "@components/ui/button";
import { Form, FormField, FormItem, FormControl } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Separator } from "@components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@components/ui/sheet";
import useSearchLetter, { SearchLetterFormData } from "@hooks/mutation/useSearchLetter";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SearchButton() {
  const { mutate: search, isPending } = useSearchLetter();
  const [answer, setAnswer] = useState<string | null>(null);

  const form = useForm<SearchLetterFormData>();
  const { control, handleSubmit } = form;

  return (
    <Sheet>
      <SheetTrigger className="flex flex-row items-center justify-center hover:underline hover:underline-offset-1 min-w-fit font-medium">
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
              나와 비슷한 상황의 속삭임을 찾아서,
              <br /> 따뜻한 메아리의 이야기를 차분히 들어보세요
            </p>
            <p className="text-detail-1 font-regular">
              언제든지 꺼내볼 수 있는 이야기 모음 속에서
              <br /> 마음에 남는 조언들을 하나씩 만나보세요
            </p>
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="w-full h-[calc(100vh-200px)] overflow-scroll pb-10">
          {/* 검색 */}
          <Form {...form}>
            <form
              onSubmit={handleSubmit(data =>
                search(data, { onSuccess: answer => setAnswer(answer as string) }),
              )}
              className="flex my-10 gap-4"
            >
              <FormField
                control={control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="속삭임 찾기" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">메아리 듣기</Button>
            </form>
          </Form>
          {/* 라디오  */}
          <p className="text-detail-1 whitespace-pre-line">
            {isPending ? "불러오는 중..." : answer}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
