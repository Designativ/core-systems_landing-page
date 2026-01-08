const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "40%", label: "Average Time Saved" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "8 Years", label: "In Business" },
];

export function StatsSection() {
  return (
    <section className="bg-terminal-dark-teal py-20 text-terminal-text-on-dark md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Solutions That Make Real Impact
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 font-mono text-3xl font-normal text-terminal-lime sm:text-4xl md:text-5xl">
                {stat.number}
              </div>
              <div className="text-base text-terminal-text-muted-dark sm:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
