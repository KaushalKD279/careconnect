"use client"

import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Line, LineChart, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartTooltip, ChartTooltipContent, ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { Activity } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

type HrPoint = { date: string; fullDate: string; heartRate: number }
type BpPoint = { date: string; fullDate: string; systolic: number; diastolic: number }

const bpChartConfig = {
  systolic: {
    label: "Systolic (mmHg)",
    color: "hsl(var(--chart-1))",
  },
  diastolic: {
    label: "Diastolic (mmHg)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const hrChartConfig = {
  heartRate: {
    label: "Heart Rate (BPM)",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

interface HealthTrendsChartProps {
  refreshTrigger?: number;
}

export function HealthTrendsChart({ refreshTrigger = 0 }: HealthTrendsChartProps) {
  const { user } = useAuth()
  const [bpData, setBpData] = useState<BpPoint[]>([])
  const [hrData, setHrData] = useState<HrPoint[]>([])

  const loadData = async () => {
    if (!user) return;
    
    try {
      const [bpRes, hrRes] = await Promise.all([
        fetch('/api/health/readings?metric=blood_pressure&limit=50'),
        fetch('/api/health/readings?metric=heart_rate&limit=50')
      ])
      const [bpJson, hrJson] = await Promise.all([bpRes.json(), hrRes.json()])
      console.log('Chart data loaded:', { bpJson, hrJson });
      
      const bp = (bpJson as any[]).map(r => {
        const date = new Date(r.taken_at);
        return {
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          fullDate: date.toLocaleString(),
          systolic: r.value_json?.systolic ?? 0,
          diastolic: r.value_json?.diastolic ?? 0,
        };
      }).reverse()
      const hr = (hrJson as any[]).map(r => {
        const date = new Date(r.taken_at);
        return {
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          fullDate: date.toLocaleString(),
          heartRate: r.value_num ?? 0,
        };
      }).reverse()
      setBpData(bp)
      setHrData(hr)
    } catch (error) {
      console.error('Error loading chart data:', error);
    }
  }

  useEffect(() => {
    void loadData()
  }, [user, refreshTrigger])

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <CardTitle className="font-headline">Health Trends</CardTitle>
        </div>
        <CardDescription>Visual overview of key health metrics over the past week.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground/80">Blood Pressure (Last 7 Days)</h3>
          <ChartContainer config={bpChartConfig} className="h-[300px] w-full">
            <BarChart accessibilityLayer data={bpData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="systolic" fill="var(--color-systolic)" radius={4} />
              <Bar dataKey="diastolic" fill="var(--color-diastolic)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground/80">Heart Rate (Last 7 Days)</h3>
          <ChartContainer config={hrChartConfig} className="h-[300px] w-full">
            <LineChart accessibilityLayer data={hrData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Legend />
              <Line
                dataKey="heartRate"
                type="monotone"
                stroke="var(--color-heartRate)"
                strokeWidth={3}
                dot={{
                  fill: "var(--color-heartRate)",
                  r: 4,
                }}
                activeDot={{
                  r: 6,
                }}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
