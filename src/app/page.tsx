
"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Shield, Star, Headphones, Users, MapPin, Clock } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  // Testimonial data
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

  return (
    <div className="content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your Trusted Partner in Rental Success</h1>
          <p className="hero-subtitle">
            Discover premium properties and seamless rental management with Smart Choice.
          </p>
          <div className="hero-buttons">
            <a
              href="/contact"
              className="contact-btn"
              onClick={() => router.push("/contact")}
            >
              Get Started <ArrowRight size={20} />
            </a>
            <a
              href="/services"
              className="services-btn"
              onClick={() => router.push("/services")}
            >
              Explore Services <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="benefits">
        <h2>Why Rent with Us?</h2>
        <ol className="benefits-list">
          <li className="benefits-item">Discover top-tier rental management services.</li>
          <li className="benefits-item">Trust us to handle your rental success.</li>
          <li className="benefits-item">Explore our curated list of premium properties.</li>
          <li className="benefits-item">Enjoy seamless tenant and landlord support.</li>
        </ol>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Smart Choice?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <Shield className="lucide" />
            <h3>Trusted Service</h3>
            <p>Reliable management for tenants and landlords.</p>
          </div>
          <div className="feature-item">
            <Star className="lucide" />
            <h3>Premium Properties</h3>
            <p>Handpicked properties to suit your needs.</p>
          </div>
          <div className="feature-item">
            <Headphones className="lucide" />
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance for all your queries.</p>
          </div>
          <div className="feature-item">
            <Users className="lucide" />
            <h3>Personalized Matching</h3>
            <p>Find the perfect property with our tailored approach.</p>
          </div>
          <div className="feature-item">
            <MapPin className="lucide" />
            <h3>Prime Locations</h3>
            <p>Properties in the most desirable neighborhoods.</p>
          </div>
          <div className="feature-item">
            <Clock className="lucide" />
            <h3>Efficient Processes</h3>
            <p>Streamlined leasing with advanced technology.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-item">
            <p className="testimonial-quote">"{testimonials[currentTestimonial].quote}"</p>
            <p className="testimonial-author">
              — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].role}
            </p>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentTestimonial ? "active" : ""}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats" ref={statsRef}>
        <h2>Our Achievements</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number" data-target="500">0</span>
            <p>Properties Managed</p>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-target="1000">0</span>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-target="10">0</span>
            <p>Years of Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}
