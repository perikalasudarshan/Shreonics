import { Users, Target, Award, TrendingUp } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Shreonics
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Engineering-driven innovation with a focus on reliability and practical solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Shreonics Solutions Pvt Ltd was founded by engineers with expertise in electronics, electrical systems, and mechanical design. Our strength lies in building complete systems — not just circuits or code, but integrated solutions that work reliably in real environments.
              </p>
              <p>
                As a young company, we are focused on steady growth through strong engineering practice and continuous improvement. We believe in practical innovation that delivers measurable results.
              </p>
              <p>
                Our team combines hands-on experience in embedded systems, power electronics, precision measurement, robotics, and assistive technology development. This cross-disciplinary expertise allows us to tackle complex challenges and deliver comprehensive solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600">
              Our core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quality First</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing and validation
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Practical Solutions</h3>
              <p className="text-gray-600">
                We focus on what works in real-world conditions
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Technical Clarity</h3>
              <p className="text-gray-600">
                Direct communication with our engineering team
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Continuous Growth</h3>
              <p className="text-gray-600">
                Always learning and improving our capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Our Capabilities
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We handle the complete development cycle in-house, ensuring quality control and faster iteration.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a859] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Design & Engineering</h3>
                    <p className="text-gray-600">Circuit design, PCB layout, firmware, and mechanical integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a859] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Prototyping</h3>
                    <p className="text-gray-600">Rapid development and iterative refinement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a859] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Testing & Validation</h3>
                    <p className="text-gray-600">Comprehensive testing setups and quality assurance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00a859] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Small-Scale Manufacturing</h3>
                    <p className="text-gray-600">Pilot production and batch assembly</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Technical Expertise
              </h2>
              <div className="bg-gradient-to-r from-[#00a859] to-[#0055a5] rounded-xl p-8 text-white">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Embedded Systems & Microcontrollers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Power Electronics & Control Circuits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Precision Measurement & Sensing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Signal Processing & Data Acquisition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Robotics & Mechatronics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Prosthetic Technology & HMI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>PCB Design & Manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Firmware & Software Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Looking Ahead
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Our long-term focus includes advanced prosthetic systems and human-machine interface technologies aimed at improving accessibility and affordability. We're committed to building solutions that make a meaningful difference.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 italic">
                "We aim to grow as a respected engineering company known for practical innovation and reliable execution."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
