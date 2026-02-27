import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
    timeline: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
        timeline: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Let's discuss your project requirements and explore how we can work together
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:shreonics@gmail.com"
                      className="text-[#0055a5] hover:underline"
                    >
                      shreonics@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00a859] to-[#0055a5] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+917386402694"
                      className="text-[#0055a5] hover:underline"
                    >
                      +91-7386402694
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#00a859] to-[#0055a5] rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Shreonics Solutions Pvt Ltd
                </h3>
                <p className="text-white/90 mb-6">
                  We're committed to understanding your requirements and providing practical, reliable solutions. Whether you need custom development, engineering support, or have questions about our capabilities, we're here to help.
                </p>
                <p className="font-semibold">
                  Designed to Perform
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Project Inquiry Form
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-700">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-semibold text-gray-900 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00a859] focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block font-semibold text-gray-900 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00a859] focus:outline-none transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-semibold text-gray-900 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00a859] focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-semibold text-gray-900 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00a859] focus:outline-none transition-colors"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="requirement"
                        className="block font-semibold text-gray-900 mb-2"
                      >
                        Project Requirement *
                      </label>
                      <textarea
                        id="requirement"
                        name="requirement"
                        required
                        rows={4}
                        value={formData.requirement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00a859] focus:outline-none transition-colors resize-none"
                        placeholder="Please describe your project requirements..."
                      ></textarea>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block font-semibold text-gray-900 mb-2"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00a859] focus:outline-none transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (1-2 weeks)</option>
                        <option value="short">Short term (1-2 months)</option>
                        <option value="medium">Medium term (3-6 months)</option>
                        <option value="long">Long term (6+ months)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
