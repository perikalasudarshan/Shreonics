import { CheckCircle, Shield, Zap, Users, Headphones, TrendingUp } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: "In-house Development Capability",
      description: "Complete control over the entire development process from design to manufacturing, ensuring faster iterations and better quality control.",
    },
    {
      icon: Users,
      title: "Cross-disciplinary Engineering Expertise",
      description: "Our team combines knowledge in electronics, electrical systems, and mechanical design, allowing us to build integrated solutions.",
    },
    {
      icon: Shield,
      title: "Practical and Realistic Design Approach",
      description: "We focus on solutions that work in real-world conditions, not just on paper. Our designs prioritize reliability and manufacturability.",
    },
    {
      icon: CheckCircle,
      title: "Custom Solution Capability",
      description: "Every project gets tailored attention. We don't force one-size-fits-all solutions but adapt to your specific requirements.",
    },
    {
      icon: Headphones,
      title: "Direct Technical Communication",
      description: "Work directly with our engineering team. No layers of management — just clear, technical discussions with the people building your solution.",
    },
    {
      icon: TrendingUp,
      title: "Long-term Support Mindset",
      description: "We build relationships, not just products. Our commitment extends beyond initial delivery to ongoing support and improvements.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Shreonics
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Engineering excellence meets practical execution
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another electronics company. Here's what makes working with Shreonics different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#00a859] transition-all p-8 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              The Shreonics Difference
            </h2>
            <p className="text-xl text-gray-600">
              Engineering-first approach with practical outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#00a859]">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Complete Systems</h3>
              <p className="text-gray-600">
                We don't just deliver circuits or code. Our solutions are complete, integrated systems ready for deployment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0055a5]">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Real-world Tested</h3>
              <p className="text-gray-600">
                Every product undergoes extensive testing to ensure it performs reliably in actual operating conditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#00a859]">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Fast Iteration</h3>
              <p className="text-gray-600">
                In-house capabilities mean quicker prototyping, testing, and refinement cycles for your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#00a859] to-[#0055a5] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partnership Built on Trust
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We believe in building long-term relationships based on technical clarity, reliable execution, and mutual respect.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Transparent Communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Realistic Timelines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span>Quality Commitment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help bring your project to life
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
