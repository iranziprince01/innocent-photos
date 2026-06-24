"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
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
import { cn } from "@/lib/utils";

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

const fieldClass =
  "h-11 rounded-sm border-border/80 bg-ivory/40 px-4 shadow-none transition-colors focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/15";

const labelClass = "text-xs font-semibold uppercase tracking-[0.14em] text-charcoal";

function FormShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-border/80 bg-white p-6 shadow-[0_2px_20px_rgba(26,24,20,0.06)] ring-1 ring-black/[0.03] sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold-bright" aria-hidden />
      {children}
    </div>
  );
}

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
      <FormShell>
        <motion.div
          variants={popIn}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center px-2 py-10 text-center sm:py-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10"
          >
            <CheckCircle2 className="h-8 w-8 text-gold" />
          </motion.div>
          <h3 className="mt-6 font-display text-2xl text-charcoal">Thank you</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-warm-gray">
            Your inquiry is on its way. Innocent will reply within 24 hours to plan your session.
          </p>
        </motion.div>
      </FormShell>
    );
  }

  return (
    <FormShell>
      <div className="pt-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Email inquiry</p>
        <h2 className="mt-2 font-display text-2xl text-charcoal sm:text-[1.75rem]">
          Tell us about your session
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-warm-gray">
          Share your date, location, and vision. We&apos;ll follow up by email.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" noValidate>
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

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName" className={labelClass}>
              Full name
            </Label>
            <Input
              id="fullName"
              className={cn(fieldClass, errors.fullName && "border-destructive")}
              {...register("fullName")}
              placeholder="Your name"
            />
            {errors.fullName ? (
              <p className="text-xs text-destructive">{errors.fullName.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className={labelClass}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className={cn(fieldClass, errors.email && "border-destructive")}
              {...register("email")}
              placeholder="you@email.com"
            />
            {errors.email ? (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone" className={labelClass}>
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              className={cn(fieldClass, errors.phone && "border-destructive")}
              {...register("phone")}
              placeholder="850-000-0000"
            />
            {errors.phone ? (
              <p className="text-xs text-destructive">{errors.phone.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label className={labelClass}>Service type</Label>
            <Select onValueChange={(v) => setValue("serviceType", v, { shouldValidate: true })}>
              <SelectTrigger
                className={cn(
                  "w-full",
                  fieldClass,
                  "h-11",
                  errors.serviceType && "border-destructive"
                )}
              >
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

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="eventDate" className={labelClass}>
              Event date
            </Label>
            <Input
              id="eventDate"
              type="date"
              className={cn(fieldClass, errors.eventDate && "border-destructive")}
              {...register("eventDate")}
            />
            {errors.eventDate ? (
              <p className="text-xs text-destructive">{errors.eventDate.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className={labelClass}>
              Location
            </Label>
            <Input
              id="location"
              className={cn(fieldClass, errors.location && "border-destructive")}
              {...register("location")}
              placeholder="City or venue"
            />
            {errors.location ? (
              <p className="text-xs text-destructive">{errors.location.message}</p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className={labelClass}>
            Message
          </Label>
          <Textarea
            id="message"
            className={cn(
              "min-h-[132px] rounded-sm border-border/80 bg-ivory/40 px-4 py-3 shadow-none focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/15",
              errors.message && "border-destructive"
            )}
            {...register("message")}
            placeholder="Tell us about your session, timeline, and anything else we should know..."
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
            className="h-12 w-full rounded-full bg-gold px-8 text-sm font-semibold text-white hover:bg-gold-light sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending inquiry...
              </>
            ) : (
              <>
                Submit inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </FormShell>
  );
}
