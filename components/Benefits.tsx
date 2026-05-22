"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "⚡",
    title: "Reduce Your Electric Bill",
    description:
      "Most homeowners cut their monthly electric bill by 50–90%. Lock in low energy costs and stop dreading the utility statement.",
  },
  {
    icon: "🏡",
    title: "Boost Your Home Value",
    description:
      "Studies show solar adds an average of $15,000 to home resale value. It's one of the highest-ROI home improvements available.",
  },
  {
    icon: "🌿",
    title: "Go Green",
    description:
      "Offset thousands of pounds of carbon emissions each year. Power your home with clean, renewable energy from the sun.",
  },
  {
    icon: "🔒",
    title: "Lock In Your Energy Rate",
    description:
      "Utility rates rise every year. Solar lets you generate your own power and protect yourself from unpredictable price increases.",
  },
  {
    icon: "💰",
    title: "Government-Funded Solar — $0 Cost to You",
    description:
      "Federal and state incentives pay us to convert your home to solar at absolutely no cost to you. Through a PPA (Power Purchase Agreement), you use the power and we handle everything — no upfront cost, no surprises.",
  },
  {
    icon: "🤝",
    title: "Honest, No-Pressure Advice",
    description:
      "We give you a real picture of what solar can do for your home — even if it means telling you it's not the right fit right now.",
  },
];

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, box-shadow 0.2s, translate 0.2s`,
      }}
    >
      <div className="text-4xl mb-4">{benefit.icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
    </div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green-600 text-sm font-bold uppercase tracking-widest">
            Why Solar?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Everything You Gain by Going Solar
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg">
            Solar isn&apos;t just about saving money — though you&apos;ll save a lot of it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
