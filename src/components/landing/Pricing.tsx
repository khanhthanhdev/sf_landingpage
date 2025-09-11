export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      subtitle: "One small step",
      price: "$0",
      period: "/month",
      features: [
        "200,000 tokens for Pro models",
        "20 video projects",
        "100 image storage",
        "200 scene generations",
        "Unlimited scenes for projects",
      ],
      cta: "Get One",
      highlighted: false,
    },
    {
      name: "Pro",
      subtitle: "Professional Work",
      price: "$39",
      period: "/month",
      features: [
        "500,000 tokens for Pro models",
        "100 video projects",
        "500 image storage",
        "1000 scene generations",
        "Unlimited scenes for projects",
      ],
      cta: "Get Pro",
      highlighted: true,
    },
    {
      name: "Team / Edu",
      subtitle: "Groundbreaking Power",
      price: "$99",
      period: "/month",
      features: [
        "2 million tokens for Pro models",
        "500 video projects",
        "2500 image storage",
        "5000 scene generations",
        "Unlimited scenes for projects",
      ],
      cta: "Get Advanced",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass-effect rounded-2xl p-8 relative ${
                tier.highlighted
                  ? "border-primary/50 shadow-lg shadow-primary/25"
                  : ""
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-muted-foreground mt-1">{tier.subtitle}</p>

                <div className="mt-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>

                <button
                  className={`w-full mt-6 h-12 rounded-lg font-medium transition-colors cursor-pointer ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
