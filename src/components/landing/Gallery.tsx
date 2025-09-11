export default function Gallery() {
  const videoDescriptions = [
    {
      title: "Math - Integration By Substitution",
      description: "Simplify the process of integrating complex functions",
    },
    {
      title: "Chemistry - Kjeldahl Method",
      description:
        "Kjeldahl method is a technique for measuring nitrogen content (as in an organic product)",
    },
    {
      title: "Physics - Geometric Brownian Motion",
      description:
        "A continuous-time stochastic process in which the logarithm of the randomly varying quantity follows a Brownian motion",
    },
    {
      title: "Computer Science - Gradient Descent",
      description:
        "Gradient Descent is a fundamental algorithm in machine learning and optimization",
    },
    {
      title: "Math - Properties of Kites",
      description: "Calculate the area of a kite",
    },
    {
      title: "Math - Rational Zero Theorem",
      description:
        "Rational Zero Theorem used to find the rational solutions of a polynomial equation (or zeros or roots of a polynomial function)",
    },
  ];

  return (
    <section id="gallery" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center">
        Gallery
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videoDescriptions.map((video, i) => (
          <div key={i} className="rounded-lg border overflow-hidden">
            <div className="aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src={`/videos/demo_${i + 1}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {video.title}
              </h3>
              <p className="text-sm text-gray-400">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
