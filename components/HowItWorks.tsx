"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const steps = [
  {
    number: "01",
    icon: "📅",
    title: "Book a Free Consult",
    description:
      "Schedule a no-pressure, 30-minute call or in-home visit. We learn about your energy usage, roof, and goals.",
  },
  {
    number: "02",
    icon: "📋",
    title: "Get Your Custom Proposal",
    description:
      "We design a system sized for your home and show you exact savings projections. We'll explain how government incentives cover 100% of the installation cost through a PPA — no payback period, because you pay nothing.",
  },
  {
    number: "03",
    icon: "🔧",
    title: "We Handle Everything",
    description:
      "From permits and HOA approvals to installation and utility interconnection — we take care of every detail.",
  },
  {
    number: "04",
    icon: "💡",
    title: "Flip the Switch",
    description:
      "Your panels go live and you start generating clean energy. Watch your electric bill shrink from day one.",
  },
];

function Step({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="relative flex gap-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
      }}
    >
      {/* Line + circle */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white text-lg font-bold shadow-md shrink-0 z-10">
          {step.icon}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-green-500 to-green-100 min-h-[40px]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">
          Step {step.number}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-gray-500 leading-relaxed max-w-md">{step.description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green-600 text-sm font-bold uppercase tracking-widest">
            The Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Going Solar Is Easier Than You Think
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg">
            Four simple steps from consultation to clean energy.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <Step
              key={step.number}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
