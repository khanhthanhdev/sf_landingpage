export default function Integrations() {
  const integrations = [
    {
      name: "Manim",
      description: "Mathematical Animation Engine",
      icon: "🎬",
    },
    {
      name: "FFmpeg",
      description: "Video Processing Library",
      icon: "🎞️",
    },
    {
      name: "Jupyter",
      description: "Interactive Computing Platform",
      icon: "📓",
    },
    {
      name: "Canvas/LMS",
      description: "Learning Management System",
      icon: "🎯",
    },
    {
      name: "Google Classroom",
      description: "Educational Platform",
      icon: "🎓",
    },
    {
      name: "GitHub",
      description: "Version Control Platform",
      icon: "🐙",
    },
  ];

  return (
    <section id="integrations" className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Integrations
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Seamlessly connect with your favorite tools and platforms
          </p>

          {/* Integrations card layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-gray-900 rounded-xl px-6 py-6 shadow-sm transition-all duration-200 min-w-[180px] hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-3xl">{integration.icon}</div>
                  <div className="text-center">
                    <span className="text-base font-medium text-white block">
                      {integration.name}
                    </span>
                    <span className="text-sm text-gray-400 block mt-1">
                      {integration.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
