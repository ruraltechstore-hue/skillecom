import { Building2, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const partners = [
  "Flipkart", "Amazon", "Myntra", "Zomato", "Swiggy", "Paytm",
  "PhonePe", "Nykaa", "Meesho", "BigBasket", "Urban Company", "CRED",
];

const Partners = () => {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-foreground">Our Industry Partners</h1>
            <p className="mt-4 text-muted-foreground">
              We collaborate with 200+ leading companies to ensure our students get the best career opportunities
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <Card key={p} className="transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Building2 className="h-8 w-8 text-primary" />
                  <p className="mt-3 font-semibold text-foreground">{p}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-border bg-muted/50 p-8 text-center">
            <Handshake className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">Become a Hiring Partner</h2>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Partner with Skillecom to access a pool of trained, industry-ready digital marketing professionals for your organization.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Partners;
