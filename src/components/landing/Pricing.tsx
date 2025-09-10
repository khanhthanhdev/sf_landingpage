export default function Pricing() {
  const tiers = [
    { name: "Starter", price: "$0", desc: "Basics to get started" },
    { name: "Pro", price: "$19", desc: "Advanced controls and export" },
    { name: "Team", price: "Custom", desc: "Collaboration and support" },
  ];
  return (
    <section id="pricing" className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">Pricing</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-lg border p-6 text-center">
            <div className="text-2xl font-semibold">{t.name}</div>
            <div className="mt-2 text-3xl">{t.price}</div>
            <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
            <a href="#cta" className="mt-6 inline-flex h-10 items-center rounded-md bg-primary px-5 text-primary-foreground">Choose</a>
          </div>
        ))}
      </div>
    </section>
  );
}

