"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof schema>;

export default function SignupPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-lg p-6">
        <CardTitle className="text-2xl">Create your family workspace</CardTitle>
        <CardDescription className="mt-2">Set up Hey Teacher for voice-first learning at home.</CardDescription>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(() => router.push("/onboarding"))}>
          <div>
            <Input placeholder="Parent name" {...register("name")} />
            {errors.name ? <p className="mt-1 text-xs text-red-600">Name is required.</p> : null}
          </div>
          <div>
            <Input placeholder="Email" {...register("email")} />
            {errors.email ? <p className="mt-1 text-xs text-red-600">Valid email required.</p> : null}
          </div>
          <div>
            <Input type="password" placeholder="Password" {...register("password")} />
            {errors.password ? <p className="mt-1 text-xs text-red-600">Minimum 8 characters.</p> : null}
          </div>
          <Button type="submit" className="w-full">Continue to Onboarding</Button>
        </form>
      </Card>
    </div>
  );
}
