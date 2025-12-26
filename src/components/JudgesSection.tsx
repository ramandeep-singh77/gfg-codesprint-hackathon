import { Target } from "lucide-react";

const JudgesSection = () => {
  return (
    <section id="judges" className="relative py-24 overflow-hidden">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
              {"// JUDGES & MENTORS"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Learn from the <span className="text-gradient">Best</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry leaders and experts who've built at scale. Get mentored
              by the people who've been there, done that.
            </p>
          </div>

          {/* Coming soon message */}
          <div className="flex justify-center">
            <div className="p-12 rounded-2xl bg-card border border-border max-w-2xl w-full text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Soon to be Announced</h3>
              <p className="text-muted-foreground">
                We're finalizing our lineup of exceptional judges and mentors.
                Stay tuned for the announcement!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;
