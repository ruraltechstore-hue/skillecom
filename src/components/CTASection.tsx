import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
          Ready to Transform Your Career?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Join thousands of successful professionals who chose Skillecom for their digital marketing journey
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/programs">Explore Programs</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            <a href="tel:+919392827075">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
