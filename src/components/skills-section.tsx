import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"]
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase", "REST APIs", "GraphQL"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "Vite", "Webpack", "Jest", "Cypress", "Figma", "Vercel"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Leadership", "Code Review", "Mentoring", "Agile", "Communication"]
  }
];

export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit built through years of experience and continuous learning
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={category.title}
            className="group relative bg-glass/60 backdrop-blur-glass border-glass shadow-glass rounded-2xl p-8 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-fade-up"
            style={{ animationDelay: `${categoryIndex * 200}ms` }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 relative group-hover:text-primary transition-colors duration-300">
              {category.title}
              <div className="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-primary rounded-full group-hover:w-24 transition-all duration-300"></div>
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill}
                  className="group/skill relative"
                  style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 75)}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-primary rounded-lg opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-muted/80 backdrop-blur-sm hover:bg-muted-dark border border-border/50 hover:border-primary/30 text-sm py-3 px-4 rounded-lg transition-all duration-300 cursor-default hover:scale-105 hover:shadow-soft">
                    <span className="relative z-10 font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="text-sm">Always learning and growing</span>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </Section>
  );
}