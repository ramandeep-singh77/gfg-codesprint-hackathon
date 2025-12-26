import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/gfg_campusbody_glau/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/geeksforgeeks-glau/",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Themes", href: "#themes" },
    { name: "Prizes", href: "#prizes" },
    { name: "Judges", href: "#judges" },
    { name: "Sponsors", href: "#sponsors" },
  ];

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative px-6">
        <div className="max-w-6xl mx-auto">
          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to{" "}
              <span className="text-gradient">Build Something Great?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join hundreds of developers in the ultimate DSA-meets-real-world
              challenge.
            </p>
            <Button variant="glow" size="xl">
              Register Now
            </Button>
          </div>

          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 py-12 border-t border-border">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <p className="font-bold">GFG Campus Body GLAU</p>
                  <p className="text-xs text-muted-foreground">Geekverse v2</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                A flagship hackathon bridging the gap between algorithmic
                thinking and real-world impact.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 GFG Campus Body GLAU. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
