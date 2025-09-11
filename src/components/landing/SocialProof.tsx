export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "The best STEM explainer tool we've tried. It transforms complex concepts into engaging visual stories that our students actually understand.",
      author: "Dr. Sarah Chen",
      title: "Professor of Physics",
      institution: "University of California, Berkeley",
    },
    {
      quote:
        "This platform has revolutionized how we teach abstract mathematical concepts. The interactive visualizations are simply outstanding.",
      author: "Prof. Michael Rodriguez",
      title: "Department Head of Mathematics",
      institution: "Stanford University",
    },
    {
      quote:
        "Our student engagement has increased by 300% since implementing this tool. The ability to visualize complex processes is game-changing.",
      author: "Dr. Emily Thompson",
      title: "Director of STEM Education",
      institution: "MIT Technology Institute",
    },
  ];

  return (
    <section id="social-proof" className="container mx-auto px-4 py-16">
      {/* Testimonials Section */}
      <div className="mt-24">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center mb-8">
          Testimonials
        </h2>

        {/* Rating and Stats */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            "The best STEM explainer tool we've tried." — Dr. X, University Y
          </p>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                ★
              </span>
            ))}
            <span className="ml-2 text-lg font-semibold">4.9/5</span>
          </div>
          <p className="text-muted-foreground">(1,200+ educators)</p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-muted-foreground">{testimonial.title}</div>
                <div className="text-muted-foreground">
                  {testimonial.institution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
