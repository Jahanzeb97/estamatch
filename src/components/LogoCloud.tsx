const logos = ["LOTTE", "MANGO", "PayPal", "CBRE", "JLL", "Colliers"];

export function LogoCloud() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-8 text-sm text-loft-muted">
          Trusted by the world&apos;s leading real estate firms.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-lg font-bold tracking-wider text-gray-300 select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
