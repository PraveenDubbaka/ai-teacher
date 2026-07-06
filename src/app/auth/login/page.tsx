"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(20,184,166,.22),transparent_40%)] p-4">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="p-6">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription className="mt-2">Parent console sign-in for Hey Teacher.</CardDescription>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit(() => router.push("/dashboard"))}>
            <div>
              <Input placeholder="Email" {...register("email")} />
              {errors.email ? <p className="mt-1 text-xs text-red-600">Valid email required.</p> : null}
            </div>
            <div>
              <Input type="password" placeholder="Password" {...register("password")} />
              {errors.password ? <p className="mt-1 text-xs text-red-600">Minimum 8 characters.</p> : null}
            </div>
            <Button className="w-full" type="submit">Sign In</Button>
          </form>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">New parent? <Link className="text-teal-700" href="/auth/signup">Create account</Link></p>
        </Card>
      </motion.div>
    </div>
  );
}
