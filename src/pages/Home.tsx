
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, CheckCircle, Code, Image, Users } from "lucide-react";

export default function Home() {
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle z-0" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Your Vision, Our Code
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              We craft powerful digital experiences tailored to your business using the latest technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-animated font-semibold">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end web development solutions
              that help businesses thrive in the digital realm.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="service-card p-6 glass-card initially-hidden opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 w-fit rounded-full bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-primary inline-flex items-center gap-1 animated-border font-medium"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 initially-hidden opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient">Webiify</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine technical expertise with creative flair to deliver websites
                that not only look great but also drive results for your business.
              </p>

              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="mt-1 text-webiify-green">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button>
                  <Link to="/why-us">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2 initially-hidden opacity-0">
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-webiify-teal/10 animate-pulse-light"></div>
                <div className="glass-card p-8 relative">
                  <img 
                    src="/lovable-uploads/4127f132-6e75-43a8-bdca-e37c81ae514c.png" 
                    alt="Webiify Logo" 
                    className="w-full h-auto animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Let's collaborate to bring your vision to life with our code expertise.
            </p>
            <Button size="lg" variant="secondary" className="hover-scale">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with React, Angular, or Vue to create seamless user experiences tailored to your specific needs.",
    icon: Code,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first designs that ensure your website looks and functions perfectly on all devices and screen sizes.",
    icon: Image,
  },
  {
    title: "E-commerce Solutions",
    description: "Robust online stores with secure payment gateways, inventory management, and optimized checkout processes.",
    icon: Book,
  },
  {
    title: "CMS Integration",
    description: "Easy-to-use content management systems that allow you to update your website without technical knowledge.",
    icon: Users,
  },
  {
    title: "Performance Optimization",
    description: "Speed optimization techniques to ensure your website loads quickly and provides a smooth user experience.",
    icon: Image,
  },
  {
    title: "SEO Strategies",
    description: "Search engine optimization to improve your website's visibility and attract more organic traffic.",
    icon: Book,
  },
];

const features = [
  {
    title: "Expert Development Team",
    description: "Our developers are skilled in the latest technologies and best practices.",
  },
  {
    title: "Collaborative Process",
    description: "We work closely with you to ensure your vision is realized in every aspect.",
  },
  {
    title: "Fast Turnaround",
    description: "Efficient development process to get your website live in record time.",
  },
  {
    title: "Ongoing Support",
    description: "We're with you long after launch to ensure everything runs smoothly.",
  },
];
