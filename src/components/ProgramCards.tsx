import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    title: "Certified E-Commerce & Digital Marketing Professional",
    duration: "12 Months",
    plans: [
      { label: "Job Assistance Plan", price: "₹25,000" },
      { label: "Job Guarantee Plan", price: "₹88,000" },
    ],
    features: ["Job Assistance", "Industry Projects", "Live Training", "Certificate"],
    slug: "certified-professional",
    popular: false,
  },
  {
    title: "PGP in E-Commerce & Digital Marketing",
    duration: "12 Months",
    plans: [
      { label: "Job Assistance Plan", price: "₹59,000" },
      { label: "Job Guarantee Plan", price: "₹1,18,000" },
    ],
    features: ["Job Guarantee", "Advanced Modules", "Startup Internship", "PG Certificate"],
    slug: "pgp-program",
    popular: true,
  },
  {
    title: "E-Commerce Store Entrepreneur Program",
    duration: "1-5 Years",
    plans: [
      { label: "1 Year Mentorship", price: "₹1,18,000" },
      { label: "5 Year Mentorship", price: "₹5,00,000" },
    ],
    features: ["Business Mentorship", "Company Setup", "50-50 Partnership", "Funding Support"],
    slug: "entrepreneur-program",
    popular: false,
  },
];

const ProgramCards = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Choose Your Success Path</h2>
          <p className="mt-4 text-muted-foreground">
            From beginner to entrepreneur, we have the perfect program to accelerate your career
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.slug}
              className={`relative flex flex-col transition-shadow hover:shadow-lg ${
                program.popular ? "border-2 border-primary shadow-md" : ""
              }`}
            >
              {program.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{program.duration}</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                {program.plans.map((plan) => (
                  <div key={plan.label} className="flex items-baseline justify-between">
                    <span className="text-sm text-muted-foreground">{plan.label}</span>
                    <span className="text-lg font-bold text-foreground">{plan.price}</span>
                  </div>
                ))}
                <ul className="space-y-2 pt-4">
                  {program.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" className="flex-1">
                  <Link to={`/programs`}>Learn More</Link>
                </Button>
                <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://razorpay.me/@iiecm" target="_blank" rel="noopener noreferrer">
                    Pay via Razorpay
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;
