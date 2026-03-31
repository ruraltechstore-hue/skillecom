import { motion } from "framer-motion";

const stats = [
  { value: "5000+", label: "Students Placed" },
  { value: "200+", label: "Industry Partners" },
  { value: "95%", label: "Success Rate" },
  { value: "10+", label: "Years Experience" },
];

const Stats = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Skillecom?</h2>
          <p className="mt-4 text-muted-foreground">
            We don't just teach, we transform careers and build successful entrepreneurs
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
