"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  website: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Try to get reCAPTCHA hook, but handle gracefully if not available
  let executeRecaptcha: ((action: string) => Promise<string>) | undefined;
  try {
    const recaptcha = useGoogleReCaptcha();
    executeRecaptcha = recaptcha.executeRecaptcha;
  } catch (error) {
    // reCAPTCHA provider not available - form will work without it
    console.log("reCAPTCHA not available - form will work without spam protection");
  }

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage(null);

    try {
      // Get reCAPTCHA token (optional - form works without it)
      let recaptchaToken = "";
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha("contact_form");
        } catch (recaptchaError) {
          console.warn("reCAPTCHA error:", recaptchaError);
          // Continue without token if reCAPTCHA fails (allows testing without setup)
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || "",
          website: data.website || "",
          message: data.message,
          recaptchaToken,
        }),
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get("content-type") || "";
      
      // Try to parse as JSON regardless of content-type header
      let result;
      try {
        const text = await response.text();
        
        // Check if it looks like HTML
        if (text.trim().startsWith("<!DOCTYPE") || text.trim().startsWith("<html")) {
          console.error("API returned HTML instead of JSON. This usually means the API route failed or Next.js returned an error page.");
          console.error("Response preview:", text.substring(0, 300));
          setSubmitStatus("error");
          setErrorMessage("The server returned an error page. Please check the console for details or try again later.");
          return;
        }
        
        // Try to parse as JSON
        result = JSON.parse(text);
      } catch (parseError) {
        console.error("Failed to parse API response:", parseError);
        console.error("Response content-type:", contentType);
        setSubmitStatus("error");
        setErrorMessage("Unable to process server response. Please try again.");
        return;
      }

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        console.error("Form submission error:", result.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      const errorMsg = error instanceof Error ? error.message : "Network error. Please check your connection and try again.";
      setErrorMessage(errorMsg);
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-xl space-y-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-semibold leading-6 text-white">
                  Name *
                </FormLabel>
                <div className="mt-2.5">
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="block w-full h-10 rounded-md bg-white/5 px-3.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-terminal-lime" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-semibold leading-6 text-white">
                  Email *
                </FormLabel>
                <div className="mt-2.5">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="block w-full h-10 rounded-md bg-white/5 px-3.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-terminal-lime" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel className="block text-sm font-semibold leading-6 text-white">
                  Company (Optional)
                </FormLabel>
                <div className="mt-2.5">
                  <FormControl>
                    <Input
                      placeholder="Your company name"
                      className="block w-full h-10 rounded-md bg-white/5 px-3.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-terminal-lime" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel className="block text-sm font-semibold leading-6 text-white">
                  Website (Optional)
                </FormLabel>
                <div className="mt-2.5">
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      className="block w-full h-10 rounded-md bg-white/5 px-3.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-terminal-lime" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel className="block text-sm font-semibold leading-6 text-white">
                  Message *
                </FormLabel>
                <div className="mt-2.5">
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project or questions..."
                      rows={4}
                      className="block w-full min-h-[2.5rem] rounded-md bg-white/5 px-3.5 py-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-terminal-lime" />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className="mt-10">
          <Button
            type="submit"
            className="block w-full rounded-md bg-terminal-lime px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-terminal-lime-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-lime transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Let's talk"}
          </Button>
        </div>
        {submitStatus === "success" && (
          <p className="text-center text-base text-terminal-lime">
            Thank you! We'll get back to you soon.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-center text-base text-terminal-lime">
            {errorMessage || "Something went wrong. Please try again or email us directly."}
          </p>
        )}
      </form>
    </Form>
  );
}
