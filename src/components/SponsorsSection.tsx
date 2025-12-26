import { Handshake } from "lucide-react";

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="relative py-24 overflow-hidden">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
              {"// SPONSORS & PARTNERS"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Backed by <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a hackathon supported by the best in tech
            </p>
          </div>

          {/* Coming soon message */}
          <div className="flex justify-center mb-12">
            <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-card border border-primary/30 glow-box max-w-2xl w-full text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Soon to be Announced</h3>
              <p className="text-muted-foreground mb-6">
                We're partnering with amazing sponsors and organizations. The
                full list will be revealed soon!
              </p>
            </div>
          </div>

          {/* Become a sponsor CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Interested in sponsoring?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Become a Partner →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
