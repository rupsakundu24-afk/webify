import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Calendar, ExternalLink, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "rupsakundu24@gmail.com",
    href: "mailto:rupsakundu24@gmail.com",
    description: "Drop me a line anytime"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7003200832",
    href: "tel:+917003200832",
    description: "Let's talk directly"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Available Worldwide",
    description: "Remote-first approach"
  },
  {
    icon: Calendar,
    title: "Availability",
    value: "Open to new projects",
    description: "Let's discuss your ideas"
  }
];

export function ContactSection() {
  return (
    <Section id="contact" variant="gradient">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'd love to hear about your project 
          and explore how we can create something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <Card 
            key={method.title}
            className="group relative bg-glass/80 backdrop-blur-glass border-glass shadow-glass hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-105 animate-fade-up min-h-[180px]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6 text-center h-full flex flex-col justify-center">
              <div className="relative w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:animate-glow">
                <method.icon className="h-7 w-7 text-primary-foreground" />
                <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {method.title}
              </h3>
              {method.href ? (
                <a 
                  href={method.href}
                  className="text-primary hover:text-primary-light transition-colors duration-300 font-medium text-sm mb-1 hover:underline"
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-foreground font-medium text-sm mb-1">{method.value}</p>
              )}
              <p className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                {method.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button 
          size="lg"
          className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 text-lg px-8 py-6 group"
          asChild
        >
          <a href="mailto:rupsakundu24@gmail.com">
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            Start a Conversation
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          Typically respond within 24 hours
        </p>
      </div>
    </Section>
  );
}