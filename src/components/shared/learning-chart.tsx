"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { weeklyLearning } from "@/mock-data/data";

export function LearningChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={weeklyLearning} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
          <defs>
            <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0D9488" stopOpacity={0.45} />
              <stop offset="95%" stopColor="#0D9488" stopOpacity={0.04} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" opacity={0.25} />
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />
          <Area type="monotone" dataKey="score" stroke="#0D9488" strokeWidth={2.5} fill="url(#scoreGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
