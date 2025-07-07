"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Shield, Star, Headphones, Users, MapPin, Clock, Mail, CheckCircle } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Testimonial data with single quotes to avoid ESLint error
  const testimonials = [
    {
      quote: "Smart Choice made renting our property a breeze. Their support is unmatched!",
      author: "Jane Doe",
      role: "Landlord",
    },
    {
      quote: "Found my dream apartment thanks to their personalized matching service!",
      author: "John Smith",
      role: "Tenant",
    },
    {
      quote: "Their technology streamlined everything. Highly recommend!",
      author: "Emily Brown",
      role: "Property Owner",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Animate stats on scroll
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

  // Handle newsletter signup (mock)
  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail("");
    setIsSubmitting(false);
    alert("Thank you for subscribing!");
  };

  return (
    <div className="content bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your Trusted Partner in Rental Success</h1>
          <p className="hero-subtitle">
            Discover premium properties and seamless rental management with Smart Choice.
          </p>
          <div className="hero-buttons">
            <button
              className="contact-btn"
              onClick={() => router.push("/contact")}
              aria-label="Get started with SCR"
            >
              Get Started <ArrowRight size={20} className="ml-2" />
            </button>
            <button
              className="services-btn"
              onClick={() => router.push("/services")}
              aria-label="Explore SCR services"
            >
              Explore Services <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="benefits py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Why Rent with Us?</h2>
          <ol className="benefits-list grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <li className="benefits-item flex items-start text-lg">
              <span className="text-green-300 font-bold mr-2">1.</span> Discover top-tier rental management services.
            </li>
            <li className="benefits-item flex items-start text-lg">
              <span className="text-green-300 font-bold mr-2">2.</span> Trust us to handle your rental success.
            </li>
            <li className="benefits-item flex items-start text-lg">
              <span className="text-green-300 font-bold mr-2">3.</span> Explore our curated list of premium properties.
            </li>
            <li className="benefits-item flex items-start text-lg">
              <span className="text-green-300 font-bold mr-2">4.</span> Enjoy seamless tenant and landlord support.
            </li>
          </ol>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Why Choose Smart Choice?</h2>
          <div className="feature-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Trusted Service</h3>
              <p>Reliable management for tenants and landlords.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <Star className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Premium Properties</h3>
              <p>Handpicked properties to suit your needs.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <Headphones className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">24/7 Support</h3>
              <p>Round-the-clock assistance for all your queries.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Personalized Matching</h3>
              <p>Find the perfect property with our tailored approach.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Prime Locations</h3>
              <p>Properties in the most desirable neighborhoods.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="lucide text-green-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900">Efficient Processes</h3>
              <p>Streamlined leasing with advanced technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">What Our Clients Say</h2>
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

      {/* Call-to-Action Banner */}
      <section className="cta-banner bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
          <p className="text-lg mb-8">Join SCR today and experience seamless rental management.</p>
          <button
            className="bg-green-300 text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-green-400 transition"
            onClick={() => router.push("/signup")}
            aria-label="Sign up for SCR"
          >
            Sign Up Now <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="process py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Rental Process</h2>
          <div className="timeline max-w-3xl mx-auto">
            <div className="timeline-item flex items-center mb-8">
              <CheckCircle className="text-green-300 w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">1. Explore Properties</h3>
                <p>Browse our curated list of premium properties in prime locations.</p>
              </div>
            </div>
            <div className="timeline-item flex items-center mb-8">
              <CheckCircle className="text-green-300 w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">2. Connect with Us</h3>
                <p>Contact our team for personalized matching and support.</p>
              </div>
            </div>
            <div className="timeline-item flex items-center mb-8">
              <CheckCircle className="text-green-300 w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">3. Sign Lease</h3>
                <p>Complete the leasing process with our streamlined technology.</p>
              </div>
            </div>
            <div className="timeline-item flex items-center">
              <CheckCircle className="text-green-300 w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-900">4. Move In</h3>
                <p>Enjoy your new home with ongoing support from SCR.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Frequently Asked Questions</h2>
          <div className="faq-list max-w-3xl mx-auto">
            <div className="faq-item mb-6">
              <h3 className="text-xl font-semibold text-blue-900">How do I pay rent?</h3>
              <p>Tenants receive a unique portal link via email or SMS to make secure online payments.</p>
            </div>
            <div className="faq-item mb-6">
              <h3 className="text-xl font-semibold text-blue-900">Can I manage multiple properties?</h3>
              <p>Yes, our admin panel allows landlords to manage multiple properties efficiently.</p>
            </div>
            <div className="faq-item mb-6">
              <h3 className="text-xl font-semibold text-blue-900">What support do you offer?</h3>
              <p>We provide 24/7 support for tenants and landlords via phone, email, and our platform.</p>
            </div>
            <div className="faq-item">
              <h3 className="text-xl font-semibold text-blue-900">How do I get started?</h3>
              <p>Sign up on our platform or contact us to explore properties or list your own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with SCR</h2>
          <p className="text-lg mb-8">Subscribe to our newsletter for the latest properties and rental tips.</p>
          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none"
              required
              aria-label="Email for newsletter subscription"
            />
            <button
              type="submit"
              className="bg-green-300 text-blue-900 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-green-400 transition"
              disabled={isSubmitting}
              aria-label="Subscribe to newsletter"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"} <Mail size={20} className="ml-2" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}