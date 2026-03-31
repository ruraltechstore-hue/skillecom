import { Target, Eye, Users, Award, BookOpen, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";

const values = [
  { icon: Target, title: "Mission", desc: "To create industry-ready digital marketing professionals and successful e-commerce entrepreneurs." },
  { icon: Eye, title: "Vision", desc: "To be India's most trusted institute for digital marketing education and startup mentorship." },
  { icon: Users, title: "Community", desc: "A thriving alumni network of 5000+ professionals working at top companies across India." },
  { icon: Award, title: "Excellence", desc: "Industry-recognized certifications and curriculum designed by marketing experts." },
  { icon: BookOpen, title: "Practical Learning", desc: "Hands-on projects, live campaigns, and real-world case studies — not just theory." },
  { icon: Briefcase, title: "Career Support", desc: "Dedicated placement cell with 200+ hiring partners ensuring job guarantee." },
];

const About = () => {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-foreground">About Skillecom</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Skillecom is India's leading E-Commerce & Digital Marketing Institute, dedicated to transforming careers
              through practical, industry-aligned education. With over 10 years of experience and 5000+ successful
              placements, we bridge the gap between education and employment.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Stats />
      <CTASection />
    </>
  );
};

export default About;
