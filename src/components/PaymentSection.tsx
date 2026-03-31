import { CreditCard, Smartphone, Building2, Wallet, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const methods = [
  { icon: CreditCard, label: "RuPay Cards" },
  { icon: Smartphone, label: "UPI Payment" },
  { icon: Building2, label: "Net Banking" },
  { icon: Wallet, label: "Digital Wallets" },
  { icon: ShieldCheck, label: "Secure & Safe" },
];

const PaymentSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Secure Payment Options</h2>
          <p className="mt-4 text-muted-foreground">
            We accept all major Indian payment methods including Razorpay
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {methods.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-2 text-muted-foreground">
              <m.icon className="h-8 w-8 text-primary" />
              <span className="text-sm">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-foreground">Pay Securely with Razorpay</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Use our secure Razorpay link to make payments for any program
          </p>
          <Button asChild className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <a href="https://razorpay.me/@iiecm" target="_blank" rel="noopener noreferrer">
              Pay via Razorpay
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
