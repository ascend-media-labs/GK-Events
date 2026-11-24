export function HowItWorks() {
  const steps = [
    {
      num: 1,
      image: "/images/step1.webp",
      title: "Choose your equipment",
      desc: "Browse our catalogue. Select the items you need for your event type and size.",
    },
    {
      num: 2,
      image: "/images/step2.webp",
      title: "WhatsApp or call us",
      desc: "Share your event date, venue, and city. We confirm availability and pricing within minutes.",
    },
    {
      num: 3,
      image: "/images/step3.webp",
      title: "We deliver and set up",
      desc: "Our team arrives before your event, sets everything up, and collects after. Zero hassle.",
    },
  ];

  return (
    <section
      className="relative bg-white py-14 sm:py-20 border-t border-slate-100"
      aria-label="How to book"
    >
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-950 tracking-tight">
            How it works
          </h2>
          <p className="mt-2.5 sm:mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Three simple steps from enquiry to event-ready setup.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Step Illustration */}
              <div className="flex h-36 w-36 sm:h-40 sm:w-40 items-center justify-center mb-5 transition-transform duration-300 hover:scale-105">
                <img
                  src={step.image}
                  alt={`Step ${step.num}`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain drop-shadow-sm"
                />
              </div>

              {/* Step Title */}
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2 text-sm sm:text-[15px] text-slate-500 font-normal leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
