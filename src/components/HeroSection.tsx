import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-float delay-300" />

      {/* Floating code elements */}
      <div className="absolute top-20 left-10 md:left-20 opacity-20 font-mono text-sm text-primary animate-float delay-200">
        {"{ algorithm: 'optimal' }"}
      </div>
      <div className="absolute top-40 right-10 md:right-32 opacity-20 font-mono text-sm text-primary animate-float delay-500">
        {"while(learning) { build(); }"}
      </div>
      <div className="absolute bottom-40 left-10 md:left-40 opacity-20 font-mono text-sm text-primary animate-float delay-100">
        {"O(n log n)"}
      </div>
      <div className="absolute top-60 left-1/4 opacity-20 font-mono text-sm text-primary animate-float delay-700">
        {"if(idea) { execute(); }"}
      </div>
      <div className="absolute bottom-60 right-1/4 opacity-20 font-mono text-sm text-primary animate-float delay-400">
        {"const innovation = true;"}
      </div>
      <div className="absolute top-1/3 right-10 md:right-20 opacity-20 font-mono text-sm text-primary animate-float delay-600">
        {"// code the future"}
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-20 font-mono text-sm text-primary animate-float delay-800">
        {"=> breakthrough"}
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in-up">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              GFG Campus Body GLAU Presents
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in-up delay-100">
            <span className="text-gradient">Geekverse</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground/90 mb-6 animate-fade-in-up delay-150">
            A Hackathon. A Vision. A Breakthrough.
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            A flagship hackathon that challenges you to transform algorithmic
            thinking into solutions that matter. Build. Learn. Innovate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
            <Button variant="hero" size="xl">
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Problem Themes
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-400">
            {[
              { value: "36", label: "Hours" },
              { value: "500+", label: "Participants" },
              { value: "₹2L+", label: "Prize Pool" },
              { value: "20+", label: "Mentors" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-card/50 border border-border card-hover"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
