const SponsorsSection = () => {
  const sponsors = {
    title: [
      { name: "TechCorp", tier: "Title Sponsor" },
    ],
    learning: [
      { name: "GFG", tier: "Learning Partner" },
      { name: "Coursera", tier: "Learning Partner" },
    ],
    community: [
      { name: "DevCommunity", tier: "Community Partner" },
      { name: "HackerEarth", tier: "Community Partner" },
      { name: "CodeChef", tier: "Community Partner" },
    ],
  };

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

          {/* Title Sponsor */}
          <div className="mb-12">
            <p className="text-center text-xs font-mono text-muted-foreground mb-6">TITLE SPONSOR</p>
            <div className="flex justify-center">
              {sponsors.title.map((sponsor, index) => (
                <div
                  key={index}
                  className="w-64 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-card border border-primary/30 flex items-center justify-center glow-box card-hover cursor-pointer"
                >
                  <span className="text-3xl font-bold text-gradient">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Partners */}
          <div className="mb-12">
            <p className="text-center text-xs font-mono text-muted-foreground mb-6">LEARNING PARTNERS</p>
            <div className="flex flex-wrap justify-center gap-6">
              {sponsors.learning.map((sponsor, index) => (
                <div
                  key={index}
                  className="w-48 h-24 rounded-xl bg-card border border-border flex items-center justify-center card-hover cursor-pointer"
                >
                  <span className="text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Community Partners */}
          <div>
            <p className="text-center text-xs font-mono text-muted-foreground mb-6">COMMUNITY PARTNERS</p>
            <div className="flex flex-wrap justify-center gap-4">
              {sponsors.community.map((sponsor, index) => (
                <div
                  key={index}
                  className="px-8 py-4 rounded-lg bg-card/50 border border-border flex items-center justify-center card-hover cursor-pointer"
                >
                  <span className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Become a sponsor CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Interested in sponsoring?</p>
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
