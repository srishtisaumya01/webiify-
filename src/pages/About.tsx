
import { ArrowRight, Book, CheckCircle, Code, Home, Image, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Webiify</span></h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate developers and designers dedicated to turning your digital visions into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Webiify was founded with a simple but powerful mission: to make exceptional web development accessible to businesses of all sizes.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small team of freelancers has grown into a full-service web development agency with a reputation for excellence and innovation.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe that great websites aren't just about code—they're about understanding your business goals and creating digital solutions that help you achieve them.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -z-10 top-0 right-0 h-64 w-64 rounded-full bg-webiify-green/10 blur-3xl"></div>
              <div className="glass-card p-8">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
                  alt="Team collaboration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Webiify, we're guided by principles that ensure we deliver exceptional value and results for every client.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="bg-background p-6 rounded-xl shadow-sm border animate-scale-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 w-fit rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-muted-foreground mb-6">
                We believe in a collaborative, transparent process that puts your needs at the center of everything we do.
              </p>

              <div className="space-y-6">
                {approach.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative">
                <div className="absolute -z-10 -bottom-4 -left-4 h-72 w-72 rounded-full bg-webiify-teal/10 blur-2xl"></div>
                <div className="glass-card p-8">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
                    alt="Our development process"
                    className="w-full h-auto rounded-lg"
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
          <div className="max-w-3xl mx-auto text-white animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Let's discuss how Webiify can help bring your digital vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-scale">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: "Client-Focused",
    description: "Your goals and vision guide every decision we make throughout the development process.",
    icon: Users,
  },
  {
    title: "Technical Excellence",
    description: "We maintain the highest standards of code quality and technical implementation.",
    icon: Code,
  },
  {
    title: "Creative Innovation",
    description: "We push creative boundaries to deliver websites that stand out from the competition.",
    icon: Image,
  },
  {
    title: "Transparent Communication",
    description: "We believe in clear, honest communication throughout every stage of the project.",
    icon: Book,
  },
  {
    title: "Continuous Improvement",
    description: "We're constantly learning and evolving to bring you the latest in web technology.",
    icon: Home,
  },
  {
    title: "Results-Driven",
    description: "We measure our success by the results and value we create for your business.",
    icon: CheckCircle,
  },
];

const approach = [
  {
    title: "Discovery & Planning",
    description: "We start by understanding your business, goals, and target audience to create a strategic plan.",
  },
  {
    title: "Design & Prototyping",
    description: "Our designers create visually stunning interfaces that align with your brand and engage users.",
  },
  {
    title: "Development & Testing",
    description: "Our developers build robust, scalable solutions with rigorous testing throughout.",
  },
  {
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support to help your website thrive.",
  },
];
