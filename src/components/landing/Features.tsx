export default function Features() {
  const topRowItems = [
    {
      title: "Precise STEM",
      desc: "Manim visuals",
      icon: "📖",
    },
    {
      title: "Step-by-step",
      desc: "problem solve",
      icon: "➡️",
    },
    {
      title: "Coding Tutor",
      desc: "w/ runtime viz",
      icon: "👨🏻‍💻",
    },
    {
      title: "AI Video Edit",
      desc: "in-browser",
      icon: "🎬",
    },
  ];

  const bottomRowItems = [
    {
      title: "RAG accuracy",
      desc: "Enhanced precision with retrieval-augmented generation",
      icon: "🎯",
    },
    {
      title: "Export HD/4K",
      desc: "High-quality video output in multiple resolutions",
      icon: "🎥",
    },
    {
      title: "API + OSS",
      desc: "Open-source with powerful API integration",
      icon: "🔓",
    },
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Core Features
          </h2>
        </div>

        {/* Top row - 4 features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topRowItems.map((item) => (
            <div
              key={item.title}
              className="glass-effect rounded-xl p-6 hover:border-primary/30 transition-colors flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bottomRowItems.map((item) => (
            <div
              key={item.title}
              className="glass-effect rounded-xl p-6 hover:border-primary/30 transition-colors flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
