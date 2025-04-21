
import { ArrowRight, Book, Home, Image, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Team() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our <span className="text-gradient">Team</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind Webiify who turn your vision into reality with our code.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries guiding Webiify's mission and values.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member, index) => (
              <div 
                key={member.name} 
                className="team-card glass-card p-6 initially-hidden opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="team-card-inner">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-webiify-teal font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                </div>
                <div className="team-card-social">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    L
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    T
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    G
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">Development Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our skilled developers who bring your projects to life with expertise and passion.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {developmentTeam.map((member, index) => (
              <div 
                key={member.name} 
                className="team-card bg-background p-4 rounded-xl shadow-sm border initially-hidden opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="team-card-inner">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-webiify-teal font-medium mb-2">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-3">{member.specialty}</p>
                </div>
                <div className="team-card-social">
                  <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
                    L
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">
                    G
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Team */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl font-bold mb-4">Design Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our creative designers who craft beautiful, user-friendly interfaces.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {designTeam.map((member, index) => (
              <div 
                key={member.name} 
                className="team-card glass-card p-6 initially-hidden opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="team-card-inner">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-56 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-webiify-teal font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground mb-4">{member.specialty}</p>
                </div>
                <div className="team-card-social">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    D
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    I
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    B
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="initially-hidden opacity-0">
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals to join our team. If you're passionate about web development and creating exceptional digital experiences, we'd love to hear from you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Collaborative Environment</h3>
                    <p className="text-muted-foreground">Work with a team that values your input and supports your growth.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Continuous Learning</h3>
                    <p className="text-muted-foreground">We provide opportunities for skill development and professional growth.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Exciting Projects</h3>
                    <p className="text-muted-foreground">Work on diverse, challenging projects for clients across various industries.</p>
                  </div>
                </div>
              </div>
              
              <Button className="button-animated font-semibold">
                <Link to="/contact" className="flex items-center gap-2">
                  View Open Positions <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="initially-hidden opacity-0">
              <div className="glass-card p-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                  alt="Team collaboration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto text-white initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Our Team?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss your project and meet the team who will bring your vision to life.
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

const leadershipTeam = [
  {
    name: "Alex Morgan",
    position: "Founder & CEO",
    bio: "With over 15 years of experience in web development, Alex founded Webiify with a vision to create beautiful, functional websites that drive business growth.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Samantha Chen",
    position: "Creative Director",
    bio: "Samantha leads our design team with her exceptional eye for aesthetics and user experience. She ensures every project meets the highest design standards.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976",
  },
  {
    name: "David Wilson",
    position: "Technical Director",
    bio: "David oversees all technical aspects of our projects, ensuring we use the latest technologies and best practices to deliver robust, scalable solutions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070",
  },
];

const developmentTeam = [
  {
    name: "Ryan Park",
    position: "Senior Developer",
    specialty: "React, Node.js, MongoDB",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Sophia Rodriguez",
    position: "Frontend Developer",
    specialty: "React, TypeScript, CSS",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961",
  },
  {
    name: "James Johnson",
    position: "Backend Developer",
    specialty: "Node.js, Express, MongoDB",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Emily Nguyen",
    position: "Full Stack Developer",
    specialty: "MERN Stack, GraphQL",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070",
  },
];

const designTeam = [
  {
    name: "Michael Brown",
    position: "UI/UX Designer",
    specialty: "User Interface Design, Wireframing, Prototyping",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=2070",
  },
  {
    name: "Jessica Kim",
    position: "Graphic Designer",
    specialty: "Visual Design, Brand Identity, Illustration",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
  },
  {
    name: "Thomas Garcia",
    position: "Motion Designer",
    specialty: "Animations, Interactive Elements, Micro-interactions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974",
  },
];
