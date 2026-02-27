import { Lightbulb, Target, FlaskConical } from "lucide-react";

export function Research() {
  const focusAreas = [
    "Prosthetic arm development",
    "Human-machine interface systems",
    "Sensor signal processing",
    "Embedded control systems",
    "Power optimization",
    "Mechatronics integration",
  ];

  const developmentSteps = [
    { step: "Design", description: "Conceptualization and system architecture" },
    { step: "Prototype", description: "Rapid prototyping and proof of concept" },
    { step: "Test", description: "Comprehensive testing and validation" },
    { step: "Improve", description: "Iterative refinement based on results" },
    { step: "Validate", description: "Performance verification and quality checks" },
    { step: "Deploy", description: "Production implementation and support" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Advancing assistive technology through practical innovation and rigorous engineering
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Focus Areas */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Focus Areas</h2>
              </div>

              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-lg text-gray-700 pt-1">{area}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  We follow a structured development flow:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Design", "Prototype", "Test", "Improve", "Validate", "Deploy"].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-900 shadow-sm">
                        {step}
                      </span>
                      {index < 5 && <span className="text-[#00a859] mx-2 font-bold">→</span>}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  We focus on measurable performance and practical reliability.
                </p>
              </div>

              <div className="space-y-4">
                {developmentSteps.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#00a859] pl-4 py-2"
                  >
                    <h3 className="font-bold text-gray-900 mb-1">{item.step}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#00a859] to-[#0055a5] mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Innovation with Purpose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our R&D efforts are directed toward creating technologies that make a tangible difference in people's lives, particularly in the field of assistive devices and human-machine interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Practical Focus</h3>
              <p className="text-gray-600">
                Every research project targets real-world applications with measurable outcomes
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Rigorous Testing</h3>
              <p className="text-gray-600">
                Comprehensive validation ensures reliability and safety in all conditions
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accessibility Goal</h3>
              <p className="text-gray-600">
                Developing affordable solutions that expand access to advanced technologies
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
