export default function UseCases() {
  return (
    <section id="use-cases" className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Use Cases
          </h2>

          {/* Use cases card layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "K-12 Math",
              "University Physics",
              "Chemistry",
              "Algorithms",
              "Data Viz",
              "Research Talks",
            ].map((useCase) => (
              <div
                key={useCase}
                className="bg-gray-900 rounded-xl px-8 py-5 shadow-sm transition-all duration-200 min-w-[180px] transform hover:scale-105"
              >
                <span className="text-base font-medium text-white">
                  {useCase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
