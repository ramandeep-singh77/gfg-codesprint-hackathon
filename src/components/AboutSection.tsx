import { BookOpen, Brain, Code, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "DSA-First Approach",
      description: "Apply data structures and algorithms to solve complex, real-world problems.",
    },
    {
      icon: Code,
      title: "Learn by Building",
      description: "Transform theoretical knowledge into practical, working solutions.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Collaborate with like-minded developers and industry mentors.",
    },
    {
      icon: BookOpen,
      title: "Strong Fundamentals",
      description: "GFG's philosophy: master the basics, build anything.",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
              {"// ABOUT THE HACKATHON"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              More Than a <span className="text-gradient">Hackathon</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This isn't your typical coding marathon. We're bridging the gap between 
              competitive programming and real-world impact. Bring your algorithmic skills, 
              leave with solutions that matter.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Code block decoration */}
          <div className="mt-16 p-6 rounded-2xl bg-card/50 border border-border font-mono text-sm overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-4 text-muted-foreground">hackathon.config</span>
            </div>
            <pre className="text-muted-foreground">
              <code>
{`const hackathon = {
  name: "GFG CodeSprint",
  duration: "48 hours",
  focus: ["DSA", "Real-World Problems", "Innovation"],
  goal: "Transform algorithms into impact",
  status: "REGISTRATIONS_OPEN"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
