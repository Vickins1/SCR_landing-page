"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Shield, Users, Mail, FileText, Wrench, Scale, BarChart, ChevronUp } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const testimonials = [
    {
      quote: "Smart Choice transformed our property management with their seamless processes.",
      author: "Jane Doe",
      role: "Property Owner",
    },
    {
      quote: "Their tenant screening and client care are top-notch, making leasing effortless.",
      author: "John Smith",
      role: "Tenant",
    },
    {
      quote: "Reliable, professional, and innovative—Smart Choice exceeded all expectations.",
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

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail("");
    setIsSubmitting(false);
    alert("Thank you for subscribing to our newsletter!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="content">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Elevate Your Property Management with Smart Choice</h1>
          <p className="hero-subtitle">
            Streamlined, professional solutions for rental housing and real estate success.
          </p>
          <div className="hero-buttons">
            <button
              className="contact-btn"
              onClick={() => router.push("https://app.smartchoicerentalmanagement.com/sign-up")}
              aria-label="Get started with Smart Choice"
            >
              Get Started <ArrowRight size={20} className="ml-2" />
            </button>
            <button
              className="services-btn"
              onClick={() => router.push("/pricing")}
              aria-label="Explore pricing plans"
            >
              View Pricing <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      <section className="benefits py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Why Smart Choice?</h2>
          <div className="benefits-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="benefits-item">
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p>Managed by seasoned professionals with deep market knowledge.</p>
            </div>
            <div className="benefits-item">
              <h3 className="text-xl font-semibold mb-2">Transparent Operations</h3>
              <p>Clear, reliable processes you can trust every step of the way.</p>
            </div>
            <div className="benefits-item">
              <h3 className="text-xl font-semibold mb-2">Innovative Technology</h3>
              <p>Cutting-edge tools for seamless property management.</p>
            </div>
            <div className="benefits-item">
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p>24/7 assistance tailored to your rental needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
          <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-item">
              <Shield className="lucide text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Property Management</h3>
              <p>Comprehensive oversight by trusted experts.</p>
            </div>
            <div className="feature-item">
              <Users className="lucide text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Tenant Placement</h3>
              <p>Rigorous screening for reliable tenants.</p>
            </div>
            <div className="feature-item">
              <BarChart className="lucide text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Financial Reporting</h3>
              <p>Timely rent collection and detailed insights.</p>
            </div>
            <div className="feature-item">
              <Wrench className="lucide text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Maintenance</h3>
              <p>Swift repairs with dedicated support.</p>
            </div>
            <div className="feature-item">
              <FileText className="lucide text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Lease Management</h3>
              <p>Efficient handling of all lease agreements.</p>
            </div>
            <div className="feature-item">
              <Scale className="lucide text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Legal Compliance</h3>
              <p>Ensuring full adherence to regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">What Our Clients Say</h2>
          <div className="testimonial-slider max-w-3xl mx-auto text-center">
            <div className="testimonial-item">
              <p className="testimonial-quote text-xl italic mb-6">{testimonials[currentTestimonial].quote}</p>
              <p className="testimonial-author font-semibold text-blue-900">
                — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].role}
              </p>
            </div>
            <div className="testimonial-dots flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot w-3 h-3 rounded-full mx-2 ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe for the latest property management tips and updates.
          </p>
          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-blue-700 transition"
              disabled={isSubmitting}
              aria-label="Subscribe to newsletter"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"} <Mail size={20} className="ml-2" />
            </button>
          </form>
        </div>
      </section>

      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}