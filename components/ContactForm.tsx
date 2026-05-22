"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-().+]+$/, "Please enter a valid phone number"),
  interest: z.string().min(1, "Please select an option"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormValues) => {
    // TODO: Wire up to your backend or a form service (e.g. Formspree, Resend, or a Next.js API route)
    await new Promise((r) => setTimeout(r, 800)); // Simulate network request
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-4 py-12">
        <div className="text-6xl">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900">
          We&apos;ll Be in Touch!
        </h3>
        <p className="text-gray-500 max-w-sm">
          Thanks for reaching out. A Solar Guy advisor will contact you within
          one business day to discuss your free consultation.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition";
  const errorClass = "text-red-500 text-xs mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register("firstName")}
            placeholder="First Name"
            className={inputClass}
          />
          {errors.firstName && (
            <p className={errorClass}>{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("lastName")}
            placeholder="Last Name"
            className={inputClass}
          />
          {errors.lastName && (
            <p className={errorClass}>{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          className={inputClass}
        />
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      <div>
        <select {...register("interest")} className={inputClass}>
          <option value="">I&apos;m interested in...</option>
          <option value="residential">Residential Solar</option>
          <option value="commercial">Commercial Solar</option>
          <option value="battery">Battery Storage</option>
          <option value="ev-charger">EV Charger</option>
          <option value="other">Other / Not Sure</option>
        </select>
        {errors.interest && (
          <p className={errorClass}>{errors.interest.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Any questions or notes? (optional)"
          rows={4}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors duration-200 text-base shadow-md hover:shadow-lg"
      >
        {isSubmitting ? "Sending…" : "Send My Request ☀️"}
      </button>

      <p className="text-center text-xs text-gray-400">
        No spam. We respect your privacy and will never sell your information.
      </p>
    </form>
  );
}
