import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Digital Marketing Manager at Flipkart",
    quote: "Skillecom transformed my career. The job guarantee program got me placed at Flipkart with a 300% salary hike.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Priya Singh",
    role: "E-commerce Entrepreneur",
    quote: "Started my own e-commerce store with Skillecom mentorship. Now earning 6 figures monthly!",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    name: "Amit Patel",
    role: "Performance Marketing Lead at Zomato",
    quote: "The practical approach and industry connections at Skillecom are unmatched. Highly recommended!",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-muted-foreground">
            Hear from our alumni who transformed their careers with Skillecom
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="mt-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm italic text-muted-foreground">"{t.quote}"</p>
                <p className="mt-4 font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
