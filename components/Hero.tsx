"use client";

export default function Hero() {
  const stars: [number, number][] = [
    [180, 75], [290, 45], [430, 90], [560, 55], [680, 80],
    [820, 45], [950, 70], [1200, 85], [350, 125], [700, 110],
    [1050, 100], [150, 150], [450, 140], [750, 130], [1100, 55],
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* ── SVG Neighborhood Background ── */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#010f04" />
            <stop offset="45%" stopColor="#022c12" />
            <stop offset="85%" stopColor="#0d4a1e" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
          <radialGradient id="sunG" cx="72%" cy="20%" r="32%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#86efac" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#010f04" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gndG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#021308" />
            <stop offset="100%" stopColor="#010804" />
          </linearGradient>
          <linearGradient id="panG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="45%" stopColor="#2563eb" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>

          {/* Clip paths for solar panel triangles (right roof slope of each house) */}
          <clipPath id="cp1"><polygon points="200,505 310,595 200,595" /></clipPath>
          <clipPath id="cp2"><polygon points="480,400 615,510 480,510" /></clipPath>
          <clipPath id="cp3"><polygon points="760,455 870,555 760,555" /></clipPath>
          <clipPath id="cp4"><polygon points="1045,375 1200,490 1045,490" /></clipPath>
          <clipPath id="cp5"><polygon points="1335,520 1440,600 1335,600" /></clipPath>
        </defs>

        {/* Sky + sun glow */}
        <rect width="1440" height="900" fill="url(#skyG)" />
        <rect width="1440" height="900" fill="url(#sunG)" />

        {/* Sun disc */}
        <circle cx="1040" cy="178" r="72" fill="#fef9c3" opacity="0.06" />
        <circle cx="1040" cy="178" r="46" fill="#fefce8" opacity="0.1" />
        <circle cx="1040" cy="178" r="28" fill="#fffbeb" opacity="0.16" />

        {/* Stars */}
        {stars.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={1.2} fill="#bbf7d0" opacity={0.45} />
        ))}

        {/* Ground */}
        <rect x="0" y="730" width="1440" height="170" fill="url(#gndG)" />

        {/* ── Trees ── */}
        <polygon points="32,730 58,652 84,730"  fill="#021a09" />
        <polygon points="40,710 58,644 76,710"  fill="#033d16" />
        <polygon points="316,730 330,686 344,730" fill="#021a09" />
        <polygon points="626,730 646,666 666,730" fill="#021a09" />
        <polygon points="634,712 646,658 658,712" fill="#033d16" />
        <polygon points="1207,730 1220,678 1233,730" fill="#021a09" />
        <polygon points="1422,730 1436,668 1450,730" fill="#021a09" />

        {/* ══════════════════════════════════════════
            HOUSE 1 — medium, leftmost
            Roof: (80,595)→peak(200,505)→(310,595)
            Body: x=100 y=595 w=185 h=135
        ══════════════════════════════════════════ */}
        <rect x="100" y="595" width="185" height="135" fill="#020d04" />
        {/* Full roof — split into left (shadow) + right (panels) */}
        <polygon points="80,595 200,505 200,595"  fill="#021007" />
        <polygon points="200,505 310,595 200,595" fill="url(#panG)" opacity="0.9" />
        {/* Panel grid */}
        <g clipPath="url(#cp1)" stroke="#93c5fd" strokeWidth="0.9" opacity="0.4">
          {[520,537,554,571,588].map(y => <line key={y} x1="195" y1={y} x2="315" y2={y} />)}
          {[215,232,249,266,283,300].map(x => <line key={x} x1={x} y1="500" x2={x} y2="600" />)}
        </g>
        <line x1="208" y1="510" x2="304" y2="588" stroke="#bfdbfe" strokeWidth="1.5" opacity="0.18" />
        {/* Chimney */}
        <rect x="148" y="535" width="18" height="60" fill="#020d04" />
        {/* Windows */}
        <rect x="112" y="622" width="40" height="32" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="244" y="622" width="40" height="32" rx="2" fill="#0a3d18" opacity="0.55" />
        {/* Door */}
        <rect x="181" y="652" width="30" height="78" rx="2" fill="#010a03" />

        {/* ══════════════════════════════════════════
            HOUSE 2 — large
            Roof: (330,510)→peak(480,400)→(615,510)
            Body: x=345 y=510 w=255 h=220
        ══════════════════════════════════════════ */}
        <rect x="345" y="510" width="255" height="220" fill="#020d04" />
        <polygon points="330,510 480,400 480,510"  fill="#021007" />
        <polygon points="480,400 615,510 480,510"  fill="url(#panG)" opacity="0.9" />
        <g clipPath="url(#cp2)" stroke="#93c5fd" strokeWidth="0.9" opacity="0.4">
          {[418,436,454,472,490,508].map(y => <line key={y} x1="475" y1={y} x2="620" y2={y} />)}
          {[498,518,538,558,578,598].map(x => <line key={x} x1={x} y1="396" x2={x} y2="515" />)}
        </g>
        <line x1="490" y1="408" x2="610" y2="504" stroke="#bfdbfe" strokeWidth="1.5" opacity="0.18" />
        <rect x="390" y="438" width="20" height="72" fill="#020d04" />
        <rect x="358" y="545" width="48" height="38" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="430" y="545" width="48" height="38" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="512" y="545" width="48" height="38" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="572" y="545" width="35" height="38" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="443" y="624" width="36" height="106" rx="2" fill="#010a03" />
        <rect x="451" y="632" width="20" height="16" rx="1" fill="#0a3d18" opacity="0.35" />

        {/* ══════════════════════════════════════════
            HOUSE 3 — medium center
            Roof: (645,555)→peak(760,455)→(875,555)
            Body: x=660 y=555 w=195 h=175
        ══════════════════════════════════════════ */}
        <rect x="660" y="555" width="195" height="175" fill="#020d04" />
        <polygon points="645,555 760,455 760,555"  fill="#021007" />
        <polygon points="760,455 870,555 760,555"  fill="url(#panG)" opacity="0.9" />
        <g clipPath="url(#cp3)" stroke="#93c5fd" strokeWidth="0.9" opacity="0.4">
          {[472,489,506,523,540].map(y => <line key={y} x1="755" y1={y} x2="875" y2={y} />)}
          {[778,796,814,832,850,868].map(x => <line key={x} x1={x} y1="451" x2={x} y2="560" />)}
        </g>
        <line x1="768" y1="462" x2="864" y2="549" stroke="#bfdbfe" strokeWidth="1.5" opacity="0.18" />
        <rect x="672" y="583" width="44" height="36" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="796" y="583" width="44" height="36" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="730" y="614" width="34" height="116" rx="2" fill="#010a03" />

        {/* ══════════════════════════════════════════
            HOUSE 4 — largest
            Roof: (890,490)→peak(1045,375)→(1200,490)
            Body: x=905 y=490 w=280 h=240
        ══════════════════════════════════════════ */}
        <rect x="905" y="490" width="280" height="240" fill="#020d04" />
        <polygon points="890,490 1045,375 1045,490"  fill="#021007" />
        <polygon points="1045,375 1200,490 1045,490" fill="url(#panG)" opacity="0.9" />
        <g clipPath="url(#cp4)" stroke="#93c5fd" strokeWidth="0.9" opacity="0.4">
          {[393,411,429,447,465,483].map(y => <line key={y} x1="1040" y1={y} x2="1205" y2={y} />)}
          {[1065,1087,1109,1131,1153,1175].map(x => <line key={x} x1={x} y1="371" x2={x} y2="495" />)}
        </g>
        <line x1="1056" y1="383" x2="1193" y2="484" stroke="#bfdbfe" strokeWidth="1.5" opacity="0.18" />
        <rect x="960" y="420" width="22" height="70" fill="#020d04" />
        <rect x="918" y="524" width="52" height="42" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="990" y="524" width="52" height="42" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="1105" y="524" width="52" height="42" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="1165" y="524" width="40" height="42" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="1022" y="610" width="38" height="120" rx="2" fill="#010a03" />
        <rect x="1030" y="618" width="22" height="18" rx="1" fill="#0a3d18" opacity="0.35" />

        {/* ══════════════════════════════════════════
            HOUSE 5 — small, rightmost
            Roof: (1228,600)→peak(1335,520)→(1440,600)
            Body: x=1242 y=600 w=190 h=130
        ══════════════════════════════════════════ */}
        <rect x="1242" y="600" width="190" height="130" fill="#020d04" />
        <polygon points="1228,600 1335,520 1335,600" fill="#021007" />
        <polygon points="1335,520 1440,600 1335,600" fill="url(#panG)" opacity="0.9" />
        <g clipPath="url(#cp5)" stroke="#93c5fd" strokeWidth="0.9" opacity="0.4">
          {[536,552,568,584].map(y => <line key={y} x1="1330" y1={y} x2="1445" y2={y} />)}
          {[1352,1370,1388,1406,1424].map(x => <line key={x} x1={x} y1="516" x2={x} y2="605" />)}
        </g>
        <line x1="1347" y1="527" x2="1432" y2="594" stroke="#bfdbfe" strokeWidth="1.5" opacity="0.18" />
        <rect x="1255" y="628" width="40" height="32" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="1355" y="628" width="40" height="32" rx="2" fill="#0a3d18" opacity="0.55" />
        <rect x="1298" y="650" width="30" height="80" rx="2" fill="#010a03" />
      </svg>

      {/* ── Brand-green radial overlay (keeps text readable + on-brand) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(22,163,74,0.22) 0%, rgba(5,46,22,0.52) 55%, rgba(0,0,0,0.62) 100%)",
        }}
      />

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <span className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Serving Homeowners Since 2018
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
          Cut Your Energy Bill{" "}
          <span className="text-green-400">in Half</span>
          <br />
          With Solar — For Free
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl text-green-100/80 leading-relaxed">
          The government is paying us to convert your home to solar at
          zero cost to you. Book a free consultation and see exactly how much
          you can save — we handle permits, installation, and everything else.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            ☀️ Book My Free Consultation
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            See How It Works →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 w-full max-w-3xl">
          {[
            { value: "$1,200+", label: "Avg Annual Savings" },
            { value: "26%",     label: "Federal Tax Credit" },
            { value: "500+",    label: "Happy Homeowners" },
            { value: "$0 Cost", label: "Gov't Pays for Install" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</span>
              <span className="text-xs sm:text-sm text-green-200/80 font-medium text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-300/60">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-green-400/60 to-transparent" />
      </div>
    </section>
  );
}
