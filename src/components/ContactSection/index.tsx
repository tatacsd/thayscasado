import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Toaster } from "@/components/ui/toaster";

const formContactSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(50, { message: "Name must be at most 50 characters long" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .min(2, {
      message: "Message must be at least 2 characters long",
    })
    .max(500, {
      message: "Message must be at most 500 characters long",
    }),
});

type ContactSectionProps = {
  nextSection?: () => void;
  previousSection?: () => void;
};



export const ContactSection = ({
  nextSection,
  previousSection,
}: ContactSectionProps) => {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formContactSchema>) => {
    try {
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );

      toast({
        title: "Email sent successfully",
          className: "sm:max-w-[200px] lg:w-full",
      });

      setIsSubmitted(true);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please try again later.",
      })
      console.log(error);

      //TODO: SEND EMAILJS ERROR TO MYSELF
    }
  };

  const returnToHome = () => {
    setIsSubmitted(false);

    previousSection && previousSection();
  };
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full bg-[#1E2227]">
      {previousSection && (
        <div className="pt-12 flex flex-col justify-center items-center text-white cursor-pointer">
          <ArrowCircleUp color="#fff" size={50} onClick={returnToHome} />
        </div>
      )}
      <div className="flex flex-col justify-center items-center h-screen w-full p-4">
        {!isSubmitted ? (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              ref={formRef} // Step 3: Attach the reference to the form
              className="space-y-8 min-w-[300px] max-w-[500px] w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="bg-[#1E2227] border-[#343A40] text-white"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="bg-[#1E2227] border-[#343A40] text-white"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      {/* do not allow textare to be resizeable */}
                      <Textarea
                        placeholder="Write your message here (be nice!)"
                        {...field}
                        className="bg-[#1E2227] border-[#343A40] resize-none min-h-[200px] text-white"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        ) : (
          <div className="flex flex-col justify-center items-center h-screen w-full p-4">
            <p className="text-white text-center lg:text-2xl text-lg lg:min-w-[300px] lg:max-w-[500px] w-full p-4 border-2 border-[#343A40] rounded-md shadow-md">
              Thank you for your message! I will get back to you as soon as
              possible.
            </p>
          </div>
        )}
      </div>

      {nextSection && (
        <div
          className="pb-6 flex flex-col justify-center items-center text-white cursor-pointer"
          onClick={() => {
            console.log("clicked");
          }}
        >
          <ArrowCircleDown color="#fff" size={50} onClick={nextSection} />
        </div>
      )}
      <Toaster />
    </section>
  );
};
