
import { ArrowRight, CheckCircle, Home, Image, Book } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function WhyUs() {
  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll(".initially-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-gradient">Webiify</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what sets us apart and why businesses trust us for their web development needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="initially-hidden opacity-0">
              <h2 className="text-3xl font-bold mb-6">Our Strengths</h2>
              <p className="text-muted-foreground mb-6">
                At Webiify, we combine technical expertise, creative design, and strategic thinking to deliver websites that stand out from the competition and drive real business results.
              </p>

              <div className="space-y-6">
                {strengths.map((strength) => (
                  <div key={strength.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-webiify-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{strength.title}</h3>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="initially-hidden opacity-0">
              <div className="relative">
                <div className="absolute -z-10 -bottom-4 -right-4 h-72 w-72 rounded-full bg-webiify-teal/10 blur-2xl"></div>
                <div className="glass-card p-8">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
                    alt="Our development team"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">The Webiify Difference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what makes our approach to web development truly special.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differences.map((difference, index) => (
              <div 
                key={difference.title} 
                className="bg-background p-6 rounded-xl shadow-sm border initially-hidden opacity-0 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 w-fit rounded-full bg-primary/10">
                  <difference.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{difference.title}</h3>
                <p className="text-muted-foreground">{difference.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use the latest technologies to build fast, scalable, and secure websites.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name} 
                className="bg-background p-6 rounded-xl shadow-sm border text-center initially-hidden opacity-0 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{tech.letter}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it—here's what our clients have to say about working with Webiify.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className="bg-background p-8 rounded-xl shadow-sm border initially-hidden opacity-0 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto text-white initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Webiify Difference?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss your project and see how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-scale">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/services" className="flex items-center gap-2">
                  Explore Our Services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const strengths = [
  {
    title: "Technical Expertise",
    description: "Our team of experienced developers are proficient in the latest technologies and best practices.",
  },
  {
    title: "Creative Design",
    description: "We create visually stunning websites that capture your brand's essence and engage your audience.",
  },
  {
    title: "Strategic Thinking",
    description: "We don't just build websites—we develop digital solutions that align with your business goals.",
  },
  {
    title: "Attention to Detail",
    description: "From pixel-perfect designs to clean code, we ensure every aspect of your website is flawless.",
  },
  {
    title: "Customer-Centric Approach",
    description: "Your satisfaction is our priority, and we go above and beyond to exceed your expectations.",
  },
];

const differences = [
  {
    title: "Collaborative Process",
    description: "We involve you at every stage of development to ensure your vision is realized.",
    icon: Home,
  },
  {
    title: "Customized Solutions",
    description: "We don't use templates—every website we build is custom-designed for your specific needs.",
    icon: Image,
  },
  {
    title: "Responsive Support",
    description: "We provide ongoing support to ensure your website continues to perform optimally.",
    icon: Book,
  },
  {
    title: "Transparent Communication",
    description: "We keep you informed throughout the process with clear, jargon-free communication.",
    icon: Home,
  },
  {
    title: "Results-Driven Approach",
    description: "We focus on creating websites that deliver measurable results for your business.",
    icon: CheckCircle,
  },
  {
    title: "Future-Proof Technology",
    description: "We build with scalability in mind so your website can grow with your business.",
    icon: Image,
  },
];

const technologies = [
  {
    name: "MongoDB",
    letter: "M",
    description: "NoSQL database for flexible, scalable data storage.",
  },
  {
    name: "Express.js",
    letter: "E",
    description: "Web application framework for Node.js",
  },
  {
    name: "React",
    letter: "R",
    description: "Front-end library for building interactive UIs",
  },
  {
    name: "Node.js",
    letter: "N",
    description: "JavaScript runtime for server-side applications",
  },
  {
    name: "Next.js",
    letter: "N",
    description: "React framework for production-ready applications",
  },
  {
    name: "TypeScript",
    letter: "TS",
    description: "Typed superset of JavaScript for improved code quality",
  },
  {
    name: "Tailwind CSS",
    letter: "T",
    description: "Utility-first CSS framework for custom designs",
  },
  {
    name: "GraphQL",
    letter: "G",
    description: "Query language for APIs for more efficient data fetching",
  },
];

const testimonials = [
  {
    quote: "Webiify transformed our outdated website into a modern, user-friendly platform that has significantly increased our online conversions.",
    name: "Sarah Johnson",
    position: "Marketing Director, TechInnovate",
  },
  {
    quote: "The team at Webiify understood our vision from day one and delivered a website that perfectly represents our brand and meets our business objectives.",
    name: "Michael Chen",
    position: "CEO, GrowthFusion",
  },
  {
    quote: "Working with Webiify was a pleasure from start to finish. Their attention to detail and commitment to quality is unmatched.",
    name: "Emma Rodriguez",
    position: "Founder, Artisan Crafts",
  },
];
