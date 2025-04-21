
import { Book, Code, Home, Image, Mail, MapPin, Phone, Users } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our code.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="initially-hidden opacity-0">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us using any of the following methods or fill out the contact form. We'd love to hear from you!
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Web Street, Digital City, Tech State 12345</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">info@webiify.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    F
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    T
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    I
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    L
                  </a>
                </div>
              </div>
            </div>

            <div className="initially-hidden opacity-0">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" required placeholder="Your name" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" required placeholder="Your email" className="bg-background/50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" required placeholder="How can we help you?" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      className="min-h-32 bg-background/50"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full button-animated">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contact us about any of these services or to discuss a custom solution for your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="bg-background p-6 rounded-xl shadow-sm border text-center initially-hidden opacity-0 hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={faq.question} 
                  className="border bg-background rounded-xl p-6 initially-hidden opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container initially-hidden opacity-0">
          <div className="w-full h-[400px] bg-muted rounded-xl overflow-hidden">
            {/* Placeholder for a map - would be replaced with an actual map component */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Map Placeholder - Our Location</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    description: "Custom websites tailored to your specific business needs.",
    icon: Code,
  },
  {
    title: "E-commerce",
    description: "Online stores with secure payment processing.",
    icon: Book,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive interfaces that enhance user experience.",
    icon: Image,
  },
  {
    title: "Consultation",
    description: "Expert advice on digital strategy and implementation.",
    icon: Users,
  },
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline varies depending on the scope and complexity of the project. A simple website might take 2-4 weeks, while a more complex site could take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "How much does a website cost?",
    answer: "Our pricing is customized based on your specific requirements. We take into account factors like design complexity, functionality, number of pages, and integration needs. Contact us for a personalized quote.",
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes, we offer ongoing maintenance packages to ensure your website remains secure, up-to-date, and functioning optimally. This includes regular updates, security monitoring, and technical support.",
  },
  {
    question: "Can you help with an existing website?",
    answer: "Absolutely! We can help with redesigns, updates, or optimizations of existing websites. We'll assess your current site and recommend improvements to enhance its performance and user experience.",
  },
  {
    question: "What technologies do you use?",
    answer: "We primarily work with the MERN stack (MongoDB, Express.js, React, Node.js) for full-stack development. However, we're flexible and can adapt to different technologies based on your project requirements.",
  },
];
