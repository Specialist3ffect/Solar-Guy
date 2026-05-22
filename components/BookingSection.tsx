import ContactForm from "./ContactForm";
import CalendlyEmbed from "./CalendlyEmbed";

export default function BookingSection() {
  return (
    <section id="book" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-green-600 text-sm font-bold uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Book Your Free Consultation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-lg">
            Pick a time that works for you, or fill out the form and we&apos;ll
            reach out within one business day.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="tel:+12158057864"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-green-500 hover:text-green-600 transition-colors shadow-sm"
            >
              📞 (215) 805-7864
            </a>
            <a
              href="mailto:cmanemcfadden@trinity-solar.com"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-green-500 hover:text-green-600 transition-colors shadow-sm"
            >
              ✉️ cmanemcfadden@trinity-solar.com
            </a>
          </div>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Calendly placeholder */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 pt-6 pb-2">
              <h3 className="text-xl font-bold text-gray-900">
                📅 Schedule Online
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Pick a time that works for you — no phone tag required.
              </p>
            </div>

            <CalendlyEmbed />
          </div>

          {/* Right: Contact form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              ✉️ Send Us a Message
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Prefer email? Fill this out and we&apos;ll get back to you fast.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
