const awards = [
  "BC Top Tech Company 2024",
  "Google Partner",
  "Microsoft Certified",
  "AWS Partner",
  "5-Star Rated on Clutch",
  "Member of BC Tech Association",
];

export function AwardsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Recognized Excellence
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg border-2 bg-card p-6 text-center text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
            >
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
