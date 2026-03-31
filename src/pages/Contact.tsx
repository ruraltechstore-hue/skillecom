import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "9392827075", href: "tel:+919392827075" },
  { icon: Mail, label: "Email", value: "etaileddigitalservicespvtltd@gmail.com", href: "mailto:etaileddigitalservicespvtltd@gmail.com" },
  {
    icon: MapPin,
    label: "Address",
    value: "Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081, India",
  },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 9:00 AM – 7:00 PM" },
];

const Contact = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
          <p className="mt-4 text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
            <div className="mt-6 space-y-6">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-muted-foreground hover:text-primary break-all">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Skillecom Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.3878!3d17.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU0LjIiTiA3OMKwMjMnMTYuMSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <Card>
            <CardContent className="p-6 sm:p-8">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Send us a Message</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
