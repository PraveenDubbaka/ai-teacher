import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function mockDelay<T>(data: T, ms = 280): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return data;
}
