"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bookingSchema, type BookingFormData } from "@/lib/booking-schema";
import { popIn } from "@/lib/motion";
import { LINKS } from "@/data/business";

const serviceOptions = [
  "Wedding",
  "Portrait",
  "Family",
  "Event",
  "Graduation",
  "Real Estate",
  "Sports",
  "Wildlife",
  "Other",
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "Something went wrong. Please try again.");
      }

      reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or contact us on WhatsApp."
      );
    }
  };

  if (submitted) {
    return (
      <motion.div
        variants={popIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center rounded-sm border border-border bg-ivory/50 px-8 py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
        >
          <CheckCircle2 className="h-14 w-14 text-gold" />
        </motion.div>
        <h3 className="mt-6 font-display text-2xl text-charcoal">Thank you!</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-warm-gray">
          Your inquiry has been received. Innocent will be in touch within 24 hours to discuss your
          session.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {submitError ? (
        <div
          role="alert"
          className="flex gap-3 rounded-sm border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-charcoal"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <div>
            <p>{submitError}</p>
            <a
              href={LINKS.whatsappBook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block font-medium text-gold underline-offset-4 hover:underline"
            >
              Message us on WhatsApp instead
            </a>
          </div>
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" {...register("fullName")} placeholder="Your name" />
          {errors.fullName ? (
            <p className="text-xs text-destructive">{errors.fullName.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} placeholder="you@email.com" />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" {...register("phone")} placeholder="850-000-0000" />
          {errors.phone ? (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label>Service Type</Label>
          <Select onValueChange={(v) => setValue("serviceType", v, { shouldValidate: true })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType ? (
            <p className="text-xs text-destructive">{errors.serviceType.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="eventDate">Event Date</Label>
          <Input id="eventDate" type="date" {...register("eventDate")} />
          {errors.eventDate ? (
            <p className="text-xs text-destructive">{errors.eventDate.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location")} placeholder="City or venue" />
          {errors.location ? (
            <p className="text-xs text-destructive">{errors.location.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your session..."
          rows={5}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-charcoal py-6 text-sm font-semibold uppercase tracking-wider hover:bg-charcoal/90 sm:w-auto sm:px-12"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </Button>
      </motion.div>
    </form>
  );
}
