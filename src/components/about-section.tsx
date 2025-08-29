import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Bridging the gap between design and development with pixel-perfect implementations."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed, accessibility, and seamless user experiences across all devices."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to deliver projects that exceed expectations and goals."
  }
];

export function AboutSection() {
  return (
    <Section id="about" variant="muted">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="prose prose-lg text-muted-foreground max-w-none">
            <p className="mb-6">
              I'm a passionate full-stack developer with a keen eye for design and 
              a commitment to creating exceptional digital experiences. With expertise 
              in modern web technologies, I specialize in building applications that 
              are not only functional but also beautiful and accessible.
            </p>
            
            <p className="mb-6">
              My approach combines technical excellence with user-centered design 
              principles, ensuring every project delivers both outstanding performance 
              and intuitive user experiences. I believe in the power of clean code, 
              semantic HTML, and progressive enhancement.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="group relative bg-glass/80 backdrop-blur-glass border-glass shadow-glass hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-up min-h-[200px]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                <div className="relative w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:animate-glow">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}