import { Rocket, Lightbulb, DollarSign, Users, TrendingUp, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const features = [
  { icon: Lightbulb, title: "Idea Validation", desc: "Expert mentors help you validate and refine your e-commerce business idea." },
  { icon: Rocket, title: "Company Setup", desc: "End-to-end support for company registration, GST, and legal formalities." },
  { icon: DollarSign, title: "Funding Support", desc: "Access to investor networks and guidance on raising capital for your startup." },
  { icon: Users, title: "50-50 Partnership", desc: "Unique partnership model where Skillecom co-invests in your business growth." },
  { icon: TrendingUp, title: "Growth Mentorship", desc: "Ongoing mentorship for scaling operations, marketing, and revenue growth." },
  { icon: ShieldCheck, title: "Risk Mitigation", desc: "Structured approach to minimize risks and maximize your chances of success." },
];

const StartupSupport = () => {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-foreground">Startup Support</h1>
            <p className="mt-4 text-muted-foreground">
              Launch and grow your e-commerce business with our comprehensive startup mentorship program
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title} className="transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default StartupSupport;
