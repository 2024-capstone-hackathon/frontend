import { Button } from "@components/ui/button";
import { Form, FormField, FormItem, FormControl } from "@components/ui/form";
import { Textarea } from "@components/ui/textarea";
import useSendEcho, { LinkFormData } from "@hooks/mutation/useSendEcho";
import { useForm } from "react-hook-form";

export default function EchoSending({ letterId }: { letterId: number }) {
  const { mutate: sendEcho } = useSendEcho();
  const form = useForm<LinkFormData>();
  const { control, handleSubmit } = form;

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(({ content }) => sendEcho({ letterId, content }))}
        className="flex flex-col gap-4 mt-10"
      >
        <FormField
          control={control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="w-[350px] h-[150px] resize-none border-dashed border-[#8A5A5A]"
                  placeholder="토닥토닥, 메아리를 남겨주세요"
                  maxLength={255}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" size={"lg"}>
          메아리 보내기
        </Button>
      </form>
    </Form>
  );
}
