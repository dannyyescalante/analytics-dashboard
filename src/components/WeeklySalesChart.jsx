import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts'
import { weeklySales } from '../data/mockData'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null

  const entry = weeklySales.find((d) => d.day === label)

  return (
    <div className="bg-[#0b1420] border border-[#1a2d42] p-3 shadow-2xl">
      <p className="text-[10px] font-mono text-[#3d5a72] tracking-widest uppercase mb-2">
        {label}
      </p>
      <div className="flex items-center gap-2 text-[11px] font-mono">
        <span className="text-[#3d5a72]">Sales:</span>
        <span className="text-[#dde8f0] font-medium">${payload[0].value.toLocaleString()}</span>
      </div>
      <div className="flex items-center gap-2 text-[11px] font-mono mt-1">
        <span className="text-[#3d5a72]">Orders:</span>
        <span className="text-[#dde8f0] font-medium">{entry?.orders}</span>
      </div>
    </div>
  )
}

export default function WeeklySalesChart() {
  const maxSales = Math.max(...weeklySales.map((d) => d.sales))

  return (
    <div className="bg-[#0b1420] border border-[#1a2535] p-5 h-full">
      <div className="mb-6">
        <h2 className="text-[13px] font-semibold text-[#c8d8e8] tracking-tight mb-1">
          Weekly Sales
        </h2>
        <p className="text-[10px] font-mono text-[#3d5a72] tracking-[0.15em] uppercase">
          Current week — daily breakdown
        </p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={weeklySales}
          margin={{ top: 5, right: 8, left: 4, bottom: 5 }}
          barSize={22}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1a2535" vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: '#3d5a72', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#3d5a72', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
            width={44}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1a2535' }} />
          <Bar dataKey="sales" radius={[2, 2, 0, 0]}>
            {weeklySales.map((entry) => (
              <Cell
                key={entry.day}
                fill={entry.sales === maxSales ? '#0ea5e9' : '#142030'}
                stroke={entry.sales === maxSales ? 'transparent' : '#1e3045'}
                strokeWidth={1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
