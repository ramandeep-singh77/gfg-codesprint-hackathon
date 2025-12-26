import {
  CheckCircle2,
  Code2,
  FileCode,
  MessageSquare,
  Target,
  Workflow,
} from "lucide-react";

const WhyDifferentSection = () => {
  const features = [
    {
      icon: Code2,
      title: "Tech Stack Innovation",
      description:
        "We evaluate your choice of modern technologies and how creatively you leverage them. Experiment with cutting-edge tools and frameworks.",
    },
    {
      icon: MessageSquare,
      title: "Technical Documentation",
      description:
        "Explain your architecture decisions, tech choices, and implementation details. Clear documentation shows engineering maturity.",
    },
    {
      icon: Target,
      title: "Scalability & Reach",
      description:
        "Build solutions that can actually scale and reach real users. We value projects with genuine market potential, not just proof of concepts.",
    },
    {
      icon: Workflow,
      title: "Process Over Product",
      description:
        "We value how you break down problems as much as the final solution. Show us your engineering thinking.",
    },
  ];

  return (
    <section id="why" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container relative px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
              {"// WHY THIS HACKATHON"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Not Your Typical <span className="text-gradient">Hackathon</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We do things differently. Here's what sets us apart.
            </p>
          </div>

          {/* Features timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-2xl bg-card border border-border card-hover ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center order-1 md:order-none">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                Ready to prove your algorithmic skills?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
