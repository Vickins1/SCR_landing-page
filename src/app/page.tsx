"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Shield, Users, Mail, CheckCircle, FileText, Wrench, Scale, BarChart } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const testimonials = [
    {
      quote: "Smart Choice's experienced team and personal trust made property management seamless.",
      author: "Jane Doe",
      role: "Property Owner",
    },
    {
      quote: "Their driven client care and tenant screening process were exceptional.",
      author: "John Smith",
      role: "Tenant",
    },
    {
      quote: "Reliable operations and dedicated support exceeded my expectations.",
      author: "Emily Brown",
      role: "Landlord",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const counters = document.querySelectorAll(".stat-number");
          counters.forEach((counter) => {
            const updateCount = () => {
              const target = parseInt(counter.getAttribute("data-target") || "0");
              const count = parseInt((counter as HTMLElement).innerText);
              const increment = Math.ceil(target / 100);
              if (count < target) {
                (counter as HTMLElement).innerText = `${Math.min(count + increment, target)}`;
                setTimeout(updateCount, 20);
              }
            };
            updateCount();
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail("");
    setIsSubmitting(false);
    alert("Thank you for subscribing to our dedicated support updates!");
  };

  return (
    <div className="content bg-gray-50 text-gray-800">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Smart Choice: Your Success Partner in Property Management</h1>
          <p className="hero-subtitle">
            Leading rental housing and real estate solutions with professional expertise.
          </p>
          <div className="hero-buttons">
            <button
              className="contact-btn"
              onClick={() => router.push("/contact")}
              aria-label="Contact Smart Choice for property management"
            >
              Contact Us <ArrowRight size={20} className="ml-2" />
            </button>
            <button
              className="services-btn"
              onClick={() => router.push("/about")}
              aria-label="Explore our rental housing services"
            >
              Our Services <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      <section className="benefits py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Why Choose Smart Choice?</h2>
          <ol className="benefits-list grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <li className="benefits-item flex items-start text-lg">
              <span className="text-green-300 font-bold mr-2">1.</span> Managed by local experts with proven experience.
            </li>
            <li className="benefits-item flex items-start text-lg">
              <span className="text-green-300 font-bold mr-2">2.</span> Transparent and reliable operations you can trust.
            </li>
            <li className="benefits-item flex items-start text-lg">
              <span className="text-green-300 font-bold mr-2">3.</span> Innovative technology solutions for efficiency.
            </li>
            <li className="benefits-item flex items-start text-lg">
              <span className="text-green-300 font-bold mr-2">4.</span> Dedicated support for all your rental needs.
            </li>
          </ol>
        </div>
      </section>

      <section className="features py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Comprehensive Services</h2>
          <div className="feature-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Trusted Property Management</h3>
              <p>Expert oversight by experienced professionals.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Tenant Screening & Placement</h3>
              <p>Rigorous vetting for reliable tenant placement.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <BarChart className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Rent Collection & Financial Reporting</h3>
              <p>Timely collections and detailed financial insights.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <Wrench className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Maintenance Repairs</h3>
              <p>Prompt repairs with dedicated local support.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <FileText className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Lease Management</h3>
              <p>Efficient handling of lease agreements.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <Scale className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Legal Compliance</h3>
              <p>Ensuring adherence to all regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Client Experiences</h2>
          <div className="testimonial-slider max-w-2xl mx-auto text-center">
            <div className="testimonial-item">
              <p className="testimonial-quote text-lg italic mb-4">{testimonials[currentTestimonial].quote}</p>
              <p className="testimonial-author font-semibold text-blue-900">
                — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].role}
              </p>
            </div>
            <div className="testimonial-dots flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot w-3 h-3 rounded-full mx-1 ${
                    index === currentTestimonial ? "bg-green-300" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Success Partner</h2>
          <p className="text-lg mb-8">Contact us to elevate your rental housing experience.</p>
          <button
            className="bg-green-300 text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-green-400 transition"
            onClick={() => router.push("/contact")}
            aria-label="Contact us to become a success partner"
          >
            Contact Now <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>

      <section className="process py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Professional Process</h2>
          <div className="timeline max-w-3xl mx-auto">
            <div className="timeline-item flex items-center mb-8">
              <CheckCircle className="text-green-300 w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">1. Property Management Consultation</h3>
                <p>Initial assessment by local experts.</p>
              </div>
            </div>
            <div className="timeline-item flex items-center mb-8">
              <CheckCircle className="text-green-300 w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">2. Tenant Screening & Placement</h3>
                <p>Thorough screening for reliable tenants.</p>
              </div>
            </div>
            <div className="timeline-item flex items-center mb-8">
              <CheckCircle className="text-green-300 w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">3. Lease Management</h3>
                <p>Efficient execution with legal compliance.</p>
              </div>
            </div>
            <div className="timeline-item flex items-center">
              <CheckCircle className="text-green-300 w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">4. Dedicated Support</h3>
                <p>Ongoing care with technology solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Frequently Asked Questions</h2>
          <div className="faq-list max-w-3xl mx-auto">
            <div className="faq-item mb-6">
              <h3 className="text-xl font-semibold text-blue-900">How is rent collection managed?</h3>
              <p>Secure and timely collections with detailed reporting.</p>
            </div>
            <div className="faq-item mb-6">
              <h3 className="text-xl font-semibold text-blue-900">What financial reporting is available?</h3>
              <p>Comprehensive reports for transparent operations.</p>
            </div>
            <div className="faq-item mb-6">
              <h3 className="text-xl font-semibold text-blue-900">How are maintenance repairs handled?</h3>
              <p>Prompt service by local experts with 24/7 support.</p>
            </div>
            <div className="faq-item">
              <h3 className="text-xl font-semibold text-blue-900">How can I contact Smart Choice?</h3>
              <p>Reach out via email or phone for dedicated assistance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe for Dedicated Support</h2>
          <p className="text-lg mb-8">Receive updates and client care tips from Smart Choice.</p>
          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none"
              required
              aria-label="Email for dedicated support updates"
            />
            <button
              type="submit"
              className="bg-green-300 text-blue-900 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-green-400 transition"
              disabled={isSubmitting}
              aria-label="Subscribe for dedicated support"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"} <Mail size={20} className="ml-2" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}