import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* ── Real photo background: aerial drone shot of suburban homes with solar panels ── */}
      <div className="absolute inset-0">
        <Image
          src="/hero-solar.jpg"
          alt="Aerial view of a suburban neighborhood with solar panels on every rooftop"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* ── Dark green overlay — keeps text readable while photo shows through ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,20,7,0.55) 0%, rgba(5,46,22,0.62) 40%, rgba(2,20,7,0.78) 100%)",
        }}
      />

      {/* ── Subtle green brand tint in the center ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(22,163,74,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">

        {/* Badge chip */}
        <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Serving Homeowners Since 2018
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
          Cut Your Energy Bill{" "}
          <span className="text-green-400">in Half</span>
          <br />
          With Solar — For Free
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg sm:text-xl text-green-100/90 leading-relaxed drop-shadow">
          The government is paying us to convert your home to solar at
          zero cost to you. Book a free consultation and see exactly how much
          you can save — we handle permits, installation, and everything else.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            ☀️ Book My Free Consultation
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            See How It Works →
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 w-full max-w-3xl">
          {[
            { value: "$1,200+", label: "Avg Annual Savings" },
            { value: "26%",     label: "Federal Tax Credit" },
            { value: "500+",    label: "Happy Homeowners" },
            { value: "$0 Cost", label: "Gov't Pays for Install" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-black/30 border border-white/15 rounded-2xl p-4 backdrop-blur-sm"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow">{stat.value}</span>
              <span className="text-xs sm:text-sm text-green-200/90 font-medium text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
