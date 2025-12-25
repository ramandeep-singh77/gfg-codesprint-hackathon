import { Binary, Globe, GraduationCap, Heart, Leaf, Zap } from "lucide-react";

const ThemesSection = () => {
  const themes = [
    {
      icon: Binary,
      title: "DSA → Real-World Systems",
      description: "Apply algorithmic thinking to build scalable systems, optimize processes, and solve complex computational challenges.",
      color: "from-primary to-emerald-400",
    },
    {
      icon: Leaf,
      title: "Sustainability & Green Tech",
      description: "Tackle pollution, waste management, and environmental monitoring with data-driven solutions.",
      color: "from-emerald-400 to-teal-400",
    },
    {
      icon: GraduationCap,
      title: "Education & Learning Tools",
      description: "Revolutionize how people learn with adaptive platforms, gamified experiences, and accessible resources.",
      color: "from-teal-400 to-cyan-400",
    },
    {
      icon: Heart,
      title: "Community & Accessibility",
      description: "Build inclusive technology that empowers differently-abled individuals and underserved communities.",
      color: "from-cyan-400 to-primary",
    },
  ];

  return (
    <section id="themes" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
              {"// PROBLEM THEMES"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-gradient">Track</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four challenging domains where your algorithmic skills can create real impact. 
              Pick your battlefield.
            </p>
          </div>

          {/* Themes grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden card-hover cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${theme.color} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <theme.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {theme.title}
                </h3>
                <p className="relative text-muted-foreground">
                  {theme.description}
                </p>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
