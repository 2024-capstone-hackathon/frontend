import { Button } from "@components/ui/button";
import { Form, FormField, FormItem, FormControl } from "@components/ui/form";
import { Textarea } from "@components/ui/textarea";
import useSendEcho, { LinkFormData } from "@hooks/mutation/useSendEcho";
import { useForm } from "react-hook-form";

type SubmitMutation = (data: LinkFormData) => void;
export default function EchoSending() {
  const { mutate: sendEcho } = useSendEcho();
  const form = useForm<LinkFormData>();
  const { control, handleSubmit } = form;

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(sendEcho as SubmitMutation)}
        className="flex flex-col gap-4 mt-10"
      >
        <FormField
          control={control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="w-[240px] h-[150px] resize-none border-dashed border-[#8A5A5A]"
                  placeholder="지혜가 담긴 메아리 보내기"
                  maxLength={1000}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" size={"lg"}>
          업로드
        </Button>
      </form>
    </Form>
  );
}
