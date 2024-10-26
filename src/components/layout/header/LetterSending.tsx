import { Button } from "@components/ui/button";
import { Form, FormField, FormItem, FormControl } from "@components/ui/form";
import { Textarea } from "@components/ui/textarea";
import { LinkFormData } from "@hooks/mutation/useSendEcho";
import useSendLetter from "@hooks/mutation/useSendLetter";
import { useForm } from "react-hook-form";

type SubmitMutation = (data: LinkFormData) => void;

export default function LetterSending() {
  const { mutate: sendLetter } = useSendLetter();
  const form = useForm<LinkFormData>();
  const { control, handleSubmit } = form;

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(sendLetter as SubmitMutation)}
        className="flex flex-col gap-4 mt-10"
      >
        <FormField
          control={control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="w-full h-[200px] resize-none border-dashed border-[#8A5A5A]"
                  placeholder="마음속 이야기를 속닥속닥 남겨보세요"
                  maxLength={255}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">업로드</Button>
      </form>
    </Form>
  );
}
