const partners = [
  { id: "google", src: "/logos/google.png", alt: "Google", invert: false, width: "w-[120px] md:w-[140px]" },
  { id: "lotte", src: "/logos/lotte.png", alt: "LOTTE", invert: false, width: "w-[100px] md:w-[120px]" },
  { id: "naver", src: "/logos/naver.png", alt: "NAVER", invert: false, width: "w-[110px] md:w-[130px]" },
  { id: "paypal", src: "/logos/paypal.png", alt: "PayPal", invert: false, width: "w-[120px] md:w-[140px]" },
  { id: "bosch", src: "/logos/bosch.png", alt: "Bosch", invert: false, width: "w-[130px] md:w-[150px]" },
  {
    id: "techcrunch",
    src: "/logos/techcrunch.png",
    alt: "TechCrunch",
    invert: false,
    width: "w-[150px] md:w-[180px]",
  },
] as const;

function PartnerLogo({
  partner,
  hidden = false,
}: {
  partner: (typeof partners)[number];
  hidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center px-8 md:px-12"
      aria-hidden={hidden}
    >
      <img
        src={partner.src}
        alt={hidden ? "" : partner.alt}
        draggable={false}
        className={`h-10 object-contain opacity-80 transition-opacity hover:opacity-100 md:h-12 ${partner.width} ${partner.invert ? "invert" : ""}`}
      />
    </div>
  );
}

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <>
      {partners.map((partner) => (
        <PartnerLogo key={`${hidden ? "dup-" : ""}${partner.id}`} partner={partner} hidden={hidden} />
      ))}
    </>
  );
}

export function AgencyLogos() {
  return (
    <section className="bg-[#f9f9f9] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-12 text-center text-sm text-[#888888]">
          Supported and being used with large agencies like
        </p>

        <div className="logo-slider-fade relative overflow-hidden">
          <div className="logo-slider-track items-center">
            <LogoRow />
            <LogoRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
