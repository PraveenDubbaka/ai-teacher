"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboardSummary, notifications, weeklyLearning } from "@/mock-data/data";
import { mockDelay } from "@/lib/utils";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () =>
      mockDelay({
        summary: dashboardSummary,
        weekly: weeklyLearning,
        notifications,
      }),
  });
}
