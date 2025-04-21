
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/6ae9e6b6-9bf8-4fd1-bbfe-dd54b72c4b29.png" 
              alt="Webiify Logo" 
              className="h-10 w-auto" 
            />
            <span className="font-bold text-xl">Webiify</span>
          </Link>
          <p className="mt-4 text-muted-foreground">Your vision, our code.</p>
          <p className="mt-2 text-muted-foreground">Crafting powerful digital experiences tailored to your business.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <div className="grid gap-2">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link to="/why-us" className="text-muted-foreground hover:text-foreground transition-colors">Why Us</Link>
            <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors">Team</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <div className="grid gap-2">
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Web Development</Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">App Development</Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">UI/UX Design</Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">E-commerce Solutions</Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">SEO Optimization</Link>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <address className="not-italic text-muted-foreground">
            <p>123 Web Street, Digital City</p>
            <p>tech@webiify.com</p>
            <p>+1 (555) 123-4567</p>
          </address>
          <div className="flex gap-4 mt-4">
            {/* Social media icons would go here - simplified for now */}
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              F
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              T
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              I
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              L
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Webiify. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
