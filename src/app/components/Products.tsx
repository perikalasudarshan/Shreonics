import { Cpu, Gauge, Zap, Bot, ClipboardCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Products() {
  const productCategories = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      items: [
        "Custom ARM-based control boards",
        "Automation controllers",
        "Monitoring and data logging systems",
        "Firmware development",
      ],
    },
    {
      icon: Gauge,
      title: "Measurement & Sensing",
      items: [
        "Voltage and current measurement modules",
        "Isolated monitoring boards",
        "Signal conditioning circuits",
        "Data acquisition systems",
      ],
    },
    {
      icon: Zap,
      title: "Power Electronics",
      items: [
        "DC–DC converters (up to 50W)",
        "Protected power modules",
        "Solid state switching systems",
        "Power control boards",
      ],
    },
    {
      icon: Bot,
      title: "Robotics & Assistive Technology",
      items: [
        "Robotic wrist systems",
        "Prosthetic arm electronics (R&D)",
        "EMG-based control platforms",
        "Actuator driver systems",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Testing & Validation",
      items: [
        "Load banks",
        "Burn-in systems",
        "Custom testing setups",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Products & Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Complete electronic systems designed for reliability and performance. From concept to deployment.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#00a859] transition-all p-8 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 pt-2">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-[#00a859] mt-2 mr-3 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Development Approach
            </h2>
            <p className="text-xl text-gray-600">
              Structured engineering process for reliable outcomes
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Design", "Prototype", "Test", "Improve", "Validate", "Deploy"].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gray-200 hover:border-[#00a859] transition-colors">
                  <span className="font-semibold text-gray-900">{step}</span>
                </div>
                {index < 5 && (
                  <div className="hidden sm:block text-[#00a859] mx-2 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We focus on measurable performance and practical reliability. Every solution is tested rigorously to ensure it meets real-world requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Product Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Our work in action - products, prototypes, and testing systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611663806011-b37e091090f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGNpcmN1aXQlMjBib2FyZCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MjIxOTc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Circuit Board Development"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Circuit Board Development</h3>
                  <p className="text-sm text-white/80">Custom PCB design and layout</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1743090661056-e51700546169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXMlMjBtaWNyb2NvbnRyb2xsZXJ8ZW58MXx8fHwxNzcyMjE5NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Embedded Systems"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Embedded Systems</h3>
                  <p className="text-sm text-white/80">ARM-based microcontroller boards</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHRlc3RpbmclMjBlcXVpcG1lbnQlMjBvc2NpbGxvc2NvcGV8ZW58MXx8fHwxNzcyMjE5NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Testing Equipment"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Testing Equipment</h3>
                  <p className="text-sm text-white/80">Precision measurement and validation</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672689956124-18666b4cdae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGVsZWN0cm9uaWNzJTIwY29udmVydGVyJTIwbW9kdWxlfGVufDF8fHx8MTc3MjIxOTc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Power Electronics"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Power Electronics</h3>
                  <p className="text-sm text-white/80">DC-DC converters and power modules</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581090465357-c8a1f71f0407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwYXJtJTIwcHJvc3RoZXRpYyUyMGRldmljZXxlbnwxfHx8fDE3NzIyMTk3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Robotic Systems"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Robotic Systems</h3>
                  <p className="text-sm text-white/80">Prosthetic and assistive technology</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729843420196-1ff32bb39db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQQ0IlMjBtYW51ZmFjdHVyaW5nJTIwYXNzZW1ibHl8ZW58MXx8fHwxNzcyMjE5NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="PCB Manufacturing"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">PCB Manufacturing</h3>
                  <p className="text-sm text-white/80">Prototype assembly and production</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1662776704670-ba57453dfb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zb3IlMjBtZWFzdXJlbWVudCUyMGRldmljZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMjE5NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sensor Technology"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Sensor Technology</h3>
                  <p className="text-sm text-white/80">Measurement and data acquisition</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGVuZ2luZWVyaW5nJTIwd29ya3NwYWNlJTIwc29sZGVyaW5nfGVufDF8fHx8MTc3MjIxOTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Engineering Workspace"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Engineering Workspace</h3>
                  <p className="text-sm text-white/80">In-house development and testing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Note: These are representative images. For detailed information about specific products and custom solutions, please contact us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}