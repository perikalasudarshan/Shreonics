import { Cpu, Gauge, Zap, Bot, ClipboardCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";

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
    {
      icon: Cpu,
      title: "Mechanical Engineering",
      items: [
        "3D CAD modeling and enclosure design",
        "Structural and thermal simulation",
        "Prototyping (3D print / CNC)",
        "Sheet metal and housing fabrication",
      ],
    },
  ];

  const galleryItems = [
    {
      src: image1,
      alt: "Circuit Board Development",
      title: "Circuit Board Development",
      subtitle: "Custom PCB design and layout",
    },
    {
      src: image2,
      alt: "Embedded Systems",
      title: "Embedded Systems",
      subtitle: "ARM-based microcontroller boards",
    },
    {
      src: image3,
      alt: "Testing Equipment",
      title: "Testing Equipment",
      subtitle: "Precision measurement and validation",
    },
    {
      src: image4,
      alt: "Power Electronics",
      title: "Power Electronics",
      subtitle: "DC-DC converters and power modules",
    },
    {
      src: image5,
      alt: "Robotic Systems",
      title: "Robotic Systems",
      subtitle: "Prosthetic and assistive technology",
    },
    {
      src: image6,
      alt: "PCB Manufacturing",
      title: "PCB Manufacturing",
      subtitle: "Prototype assembly and production",
    },
    {
      src: image7,
      alt: "Sensor Technology",
      title: "Sensor Technology",
      subtitle: "Measurement and data acquisition",
    },
    {
      src: image8,
      alt: "Engineering Workspace",
      title: "Engineering Workspace",
      subtitle: "In-house development and testing",
    },
    {
      src: image9,
      alt: "Mechanical Design",
      title: "Mechanical Design",
      subtitle: "CAD-driven enclosure and structural design",
    },
    {
      src: image10,
      alt: "Mechanical Simulation",
      title: "Mechanical Simulation",
      subtitle: "FEA/CFD validation for thermal and stress performance",
    },
    {
      src: image11,
      alt: "Mechanical Prototyping",
      title: "Mechanical Prototyping",
      subtitle: "3D printed and CNC prototype support",
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
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
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