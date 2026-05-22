"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const testimonials = [
  {
    stars: 5,
    quote:
      "I didn't believe it at first — I thought there had to be a catch. But I put zero dollars down, zero out of my pocket, and the panels went up in one day. My PECO bill used to run $290–$310 every summer. Last August it was $22. The PPA made it so simple: I just pay for the power I use, at a lower rate than PECO was charging me. Wish I did this five years ago.",
    author: "Frank D.",
    location: "Delaware County, PA",
    initials: "FD",
  },
  {
    stars: 5,
    quote:
      "PPL kept raising rates and I was fed up. A neighbor told me about the government program so I called for a free quote. They explained the PPA clearly — the government incentives fund the whole installation, I pay nothing upfront, and my rate is locked in below what PPL charges. It's been eight months and I've saved over $900 already. The crew was professional and cleaned up everything.",
    author: "Diane R.",
    location: "Lehigh Valley, PA",
    initials: "DR",
  },
  {
    stars: 5,
    quote:
      "My husband and I were skeptical but we had nothing to lose by getting a free consultation. They walked us through exactly how the PPA works — the government pays for the system, we use the solar power at a fixed rate lower than what we were paying Met-Ed, and we never write a check for the installation. Our electric costs dropped by almost 70%. Honest, no-pressure, and they handled every permit.",
    author: "Carol & Mike T.",
    location: "Chester County, PA",
    initials: "CT",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
      }}
    >
      <StarRating count={testimonial.stars} />
      <blockquote className="text-gray-600 leading-relaxed text-sm flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold shrink-0">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
          <p className="text-xs text-gray-400">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green-600 text-sm font-bold uppercase tracking-widest">
            Real Homeowners
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg">
            Hundreds of homeowners have already made the switch. Here&apos;s what a few of them have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
