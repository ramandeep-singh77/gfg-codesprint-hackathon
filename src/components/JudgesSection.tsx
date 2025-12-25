import { Linkedin, Twitter } from "lucide-react";

const JudgesSection = () => {
  const judges = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Data Scientist",
      company: "TechCorp India",
      expertise: "Machine Learning & DSA",
    },
    {
      name: "Rahul Verma",
      role: "Senior SDE",
      company: "Google",
      expertise: "Systems Design",
    },
    {
      name: "Ananya Patel",
      role: "Founder & CEO",
      company: "StartupHub",
      expertise: "Product & Innovation",
    },
    {
      name: "Vikram Singh",
      role: "Principal Engineer",
      company: "Microsoft",
      expertise: "Algorithms & Optimization",
    },
    {
      name: "Neha Gupta",
      role: "VP Engineering",
      company: "Flipkart",
      expertise: "Scalable Systems",
    },
    {
      name: "Arjun Reddy",
      role: "Research Lead",
      company: "IIT Bombay",
      expertise: "Competitive Programming",
    },
  ];

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
              Industry leaders and experts who've built at scale. Get mentored by the people 
              who've been there, done that.
            </p>
          </div>

          {/* Judges grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {judges.map((judge, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border card-hover"
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <span className="text-2xl font-bold text-primary">
                    {judge.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold mb-1">{judge.name}</h3>
                <p className="text-sm text-primary mb-1">{judge.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{judge.company}</p>
                
                {/* Expertise badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium text-primary/80 bg-primary/10 rounded-full">
                  {judge.expertise}
                </span>

                {/* Social links */}
                <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgesSection;
