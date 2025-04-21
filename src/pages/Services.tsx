
import { ArrowRight, Book, CheckCircle, Code, Image, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Services() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Services</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive web development solutions to help your business succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-16">
            {mainServices.map((service, index) => (
              <div 
                key={service.title} 
                className={`grid md:grid-cols-2 gap-12 items-center initially-hidden opacity-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div>
                  <div className="mb-4 p-3 w-fit rounded-full bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-webiify-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="button-animated">
                    <Link to="/contact" className="flex items-center gap-2">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="service-card p-6 rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized services to enhance your digital presence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service, index) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure successful project delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <div 
                key={step.title} 
                className="relative p-6 border rounded-xl bg-background initially-hidden opacity-0 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                )}
                <div className="mb-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today for a free consultation and quote.
            </p>
            <Button size="lg" variant="secondary" className="hover-scale">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const mainServices = [
  {
    title: "Custom Web Development",
    description: "We build tailored web solutions from scratch that align perfectly with your business goals and user needs.",
    icon: Code,
    features: [
      "Custom front-end and back-end development",
      "Responsive design for all devices",
      "Scalable architecture for future growth",
      "Integration with third-party APIs and services",
      "Performance optimization for fast loading times"
    ],
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=1974"
  },
  {
    title: "E-commerce Development",
    description: "Transform your business with powerful online stores that drive sales and enhance customer experience.",
    icon: Book,
    features: [
      "Custom shopping cart and checkout process",
      "Secure payment gateway integration",
      "Inventory and order management systems",
      "Customer account and profile management",
      "Product search and filtering capabilities"
    ],
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=1974"
  },
  {
    title: "UI/UX Design",
    description: "We create intuitive, engaging user experiences that delight your visitors and keep them coming back.",
    icon: Image,
    features: [
      "User research and persona creation",
      "Wireframing and prototyping",
      "Visual design and branding consistency",
      "Usability testing and optimization",
      "Accessibility compliance"
    ],
    image: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a5b7?auto=format&fit=crop&q=80&w=1974"
  },
];

const additionalServices = [
  {
    title: "Website Maintenance",
    description: "Keep your website secure, up-to-date, and running smoothly with our ongoing maintenance services.",
    icon: Book,
  },
  {
    title: "Performance Optimization",
    description: "Speed up your website loading times and improve user experience with our performance tuning.",
    icon: Image,
  },
  {
    title: "SEO Services",
    description: "Improve your search engine rankings and drive more organic traffic to your website.",
    icon: Users,
  },
  {
    title: "Content Management Systems",
    description: "Custom CMS solutions that make updating your website content easy and hassle-free.",
    icon: Code,
  },
  {
    title: "Progressive Web Apps",
    description: "Create app-like experiences for your users with fast, reliable, and engaging PWAs.",
    icon: Image,
  },
  {
    title: "API Development & Integration",
    description: "Connect your website with external services and create powerful, data-driven applications.",
    icon: Code,
  },
];

const process = [
  {
    title: "Discovery",
    description: "We analyze your requirements and define the scope of your project.",
  },
  {
    title: "Design",
    description: "Creating wireframes and visual designs that align with your brand.",
  },
  {
    title: "Development",
    description: "Building your website with clean, efficient code and best practices.",
  },
  {
    title: "Launch",
    description: "Thorough testing and deployment of your website to production.",
  },
];
