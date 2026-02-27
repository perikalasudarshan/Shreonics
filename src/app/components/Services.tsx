import { Wrench, Factory, Lightbulb } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Engineering Services",
      color: "from-[#00a859] to-[#0055a5]",
      items: [
        "PCB design and layout",
        "Firmware development",
        "System integration",
        "Hardware testing",
        "Product improvement",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing Support",
      color: "from-[#0055a5] to-[#00a859]",
      items: [
        "Prototype assembly",
        "Small batch production",
        "Quality inspection",
        "Documentation support",
      ],
    },
    {
      icon: Lightbulb,
      title: "Custom Development",
      color: "from-[#00a859] to-[#0055a5]",
      items: [
        "Requirement discussion",
        "Feasibility analysis",
        "Proof of concept",
        "Pilot production",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive engineering support from concept to production
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#00a859] transition-all overflow-hidden group"
                >
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                    <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 rounded-full bg-[#00a859] mt-2 mr-3 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How We Work
            </h2>
            <p className="text-xl text-gray-600">
              Clear communication and structured execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Consultation</h3>
              <p className="text-gray-600">
                Understanding your requirements and technical constraints
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Planning</h3>
              <p className="text-gray-600">
                Feasibility study and project timeline definition
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Development</h3>
              <p className="text-gray-600">
                Design, prototyping, and iterative improvements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Delivery</h3>
              <p className="text-gray-600">
                Testing, validation, and handover with support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you need a complete system or specific engineering support, we're here to help
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
