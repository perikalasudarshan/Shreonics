import { Link } from "react-router";
import { Cpu, Zap, Activity, Gauge, HeartPulse, ArrowRight } from "lucide-react";

export function Home() {
  const capabilities = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Custom ARM-based controllers and automation solutions",
    },
    {
      icon: Zap,
      title: "Power Electronics",
      description: "DC-DC converters, protected modules, and control systems",
    },
    {
      icon: Activity,
      title: "Robotics",
      description: "Robotic systems and mechatronics integration",
    },
    {
      icon: Gauge,
      title: "Mechanical Engineering",
      description: "Structural design, simulation, prototyping, and manufacturing-ready parts",
    },
    {
      icon: Gauge,
      title: "Measurement",
      description: "Precision monitoring and data acquisition systems",
    },
    {
      icon: HeartPulse,
      title: "Prosthetics R&D",
      description: "EMG-based control and assistive technology development",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Engineering Practical Electronics & Assistive Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Embedded Systems • Power Electronics • Robotics • Measurement • Prosthetics R&D
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-2xl">
              Shreonics Solutions Pvt Ltd is an engineering-focused startup developing customized electronic systems and assistive technologies for industrial and medical applications. We believe in simple, strong engineering and clear execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-white text-[#0055a5] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0055a5] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cross-disciplinary expertise in electronics, electrical systems, and mechanical design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border-2 border-gray-200 hover:border-[#00a859] transition-all hover:shadow-lg group"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Company Overview
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Shreonics Solutions Pvt Ltd is a technology startup focused on developing reliable electronic systems and assistive technologies. We work in embedded systems, power electronics, precision measurement, robotics, and prosthetic technology.
                </p>
                <p>
                  Our team has hands-on expertise in electronics, electrical systems, and mechanical design, allowing us to build complete systems from concept to working product.
                </p>
                <p>
                  As a growing engineering-driven company, we focus on practical innovation — building solutions that are efficient, safe, and ready for real-world use. We handle design, prototyping, testing, and small-scale manufacturing in-house, ensuring quality control and faster development cycles.
                </p>
                <p>
                  Our long-term focus includes advanced prosthetic systems and human-machine interface technologies aimed at improving accessibility and affordability.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#00a859]">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Vision</h3>
                <p className="text-gray-700">
                  To build dependable technology solutions that improve industrial systems and support human mobility. We aim to grow as a respected engineering company known for practical innovation and reliable execution.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0055a5]">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Mission</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#00a859] mr-2">•</span>
                    <span>To design and develop reliable electronic and control systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a859] mr-2">•</span>
                    <span>To combine electronics, electrical, and mechanical expertise into complete working solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a859] mr-2">•</span>
                    <span>To maintain strong in-house development and testing capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a859] mr-2">•</span>
                    <span>To develop affordable assistive technologies with real impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00a859] mr-2">•</span>
                    <span>To build long-term partnerships based on technical clarity and trust</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss your requirements and explore how we can help
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#0055a5] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
