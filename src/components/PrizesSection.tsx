import { Award, Gift, Medal, Star, Trophy, Zap } from "lucide-react";

const PrizesSection = () => {
  const prizes = [
    {
      icon: Trophy,
      position: "1st Place",
      amount: "₹75,000",
      perks: ["Internship opportunities", "GFG Premium subscription", "Exclusive swag kit"],
      featured: true,
    },
    {
      icon: Medal,
      position: "2nd Place",
      amount: "₹50,000",
      perks: ["GFG Premium subscription", "Mentorship sessions", "Swag kit"],
      featured: false,
    },
    {
      icon: Award,
      position: "3rd Place",
      amount: "₹25,000",
      perks: ["GFG Premium subscription", "Swag kit"],
      featured: false,
    },
  ];

  const specialAwards = [
    { icon: Star, title: "Best DSA Implementation", amount: "₹15,000" },
    { icon: Zap, title: "Most Innovative Solution", amount: "₹15,000" },
    { icon: Gift, title: "Best UI/UX Design", amount: "₹10,000" },
  ];

  return (
    <section id="prizes" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container relative px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
              {"// PRIZE POOL"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">₹2,00,000+</span> in Prizes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compete for cash prizes, internships, and exclusive opportunities
            </p>
          </div>

          {/* Main prizes */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border overflow-hidden ${
                  prize.featured 
                    ? 'bg-gradient-to-b from-primary/20 to-card border-primary/50 md:-translate-y-4 glow-box' 
                    : 'bg-card border-border card-hover'
                }`}
              >
                {prize.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-b-lg">
                    GRAND PRIZE
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  prize.featured ? 'bg-primary/30' : 'bg-primary/10'
                }`}>
                  <prize.icon className={`w-8 h-8 ${prize.featured ? 'text-primary' : 'text-primary/80'}`} />
                </div>

                <p className="text-muted-foreground mb-2">{prize.position}</p>
                <h3 className={`text-4xl font-bold mb-6 ${prize.featured ? 'text-gradient' : ''}`}>
                  {prize.amount}
                </h3>

                <ul className="space-y-2">
                  {prize.perks.map((perk, perkIndex) => (
                    <li key={perkIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Special awards */}
          <div className="grid md:grid-cols-3 gap-4">
            {specialAwards.map((award, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <award.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{award.title}</p>
                  <p className="text-sm text-primary">{award.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
