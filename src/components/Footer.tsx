import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Skillecom</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              India's #1 E-Commerce & Digital Marketing Institute with Job Guarantee and Startup Mentorship.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Programs", path: "/programs" },
                { name: "About", path: "/about" },
                { name: "Partners", path: "/partners" },
                { name: "Startup Support", path: "/startup-support" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Certified Professional</li>
              <li className="text-muted-foreground">PGP Program</li>
              <li className="text-muted-foreground">Entrepreneur Program</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+919392827075" className="hover:text-primary">9392827075</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:etaileddigitalservicespvtltd@gmail.com" className="break-all hover:text-primary">
                  etaileddigitalservicespvtltd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Sai Silicon Heights, 3-118, Megha Hills Rd, Ayyappa Society, Mega Hills, Madhapur, Hyderabad,
                  Telangana 500081, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Skillecom Upstart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
