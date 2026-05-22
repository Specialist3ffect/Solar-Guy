"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
  return (
    <InlineWidget
      url="https://calendly.com/cmanemcfadden96/30min"
      styles={{ height: "660px", width: "100%" }}
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "22c55e",
        textColor: "111827",
      }}
    />
  );
}
