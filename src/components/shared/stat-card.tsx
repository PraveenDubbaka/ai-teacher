import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
}

export function StatCard({ label, value, delta }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
    <Card>
      <CardDescription>{label}</CardDescription>
      <CardTitle className="mt-2 text-3xl">{value}</CardTitle>
      {delta ? (
        <p className="mt-2 inline-flex items-center gap-1 text-sm text-teal-700 dark:text-teal-300">
          <ArrowUpRight className="h-4 w-4" />
          {delta}
        </p>
      ) : null}
    </Card>
    </motion.div>
  );
}
