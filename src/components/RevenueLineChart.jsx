import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { monthlyRevenue } from '../data/mockData'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null

  return (
    <div className="bg-[#0b1420] border border-[#1a2d42] p-3 shadow-2xl">
      <p className="text-[10px] font-mono text-[#3d5a72] tracking-widest uppercase mb-2">
        {label} 2024
      </p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 text-[11px] font-mono">
          <div className="w-1.5 h-1.5" style={{ backgroundColor: entry.color }} />
          <span className="text-[#3d5a72] capitalize">{entry.name}:</span>
          <span className="text-[#dde8f0] font-medium">
            ${entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function RevenueLineChart() {
  return (
    <div className="bg-[#0b1420] border border-[#1a2535] p-5 h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-[13px] font-semibold text-[#c8d8e8] tracking-tight mb-1">
            Revenue Overview
          </h2>
          <p className="text-[10px] font-mono text-[#3d5a72] tracking-[0.15em] uppercase">
            Monthly — FY 2024
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-px bg-[#0ea5e9]" />
            <span className="text-[10px] font-mono text-[#3d5a72]">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="20" height="1" viewBox="0 0 20 1">
              <line
                x1="0" y1="0.5" x2="20" y2="0.5"
                stroke="#2d4a63"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
            </svg>
            <span className="text-[10px] font-mono text-[#3d5a72]">Target</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart
          data={monthlyRevenue}
          margin={{ top: 5, right: 8, left: 4, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1a2535" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#3d5a72', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#3d5a72', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            width={48}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#0ea5e9"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#0ea5e9', stroke: '#0b1420', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#2d4a63"
            strokeWidth={1.5}
            strokeDasharray="5 4"
            dot={false}
            activeDot={{ r: 3, fill: '#2d4a63', stroke: '#0b1420', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
