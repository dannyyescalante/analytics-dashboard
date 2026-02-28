import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
import { trafficSources } from '../data/mockData'

function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null

  return (
    <div className="bg-[#0b1420] border border-[#1a2d42] p-2.5 shadow-2xl">
      <p className="text-[11px] font-mono text-[#dde8f0]">
        {payload[0].name}:{' '}
        <span className="font-semibold">{payload[0].value}%</span>
      </p>
    </div>
  )
}

export default function TrafficDonutChart() {
  return (
    <div className="bg-[#0b1420] border border-[#1a2535] p-5 h-full">
      <div className="mb-4">
        <h2 className="text-[13px] font-semibold text-[#c8d8e8] tracking-tight mb-1">
          Traffic Sources
        </h2>
        <p className="text-[10px] font-mono text-[#3d5a72] tracking-[0.15em] uppercase">
          Acquisition channels
        </p>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={trafficSources}
            cx="50%"
            cy="50%"
            innerRadius={52}
            outerRadius={78}
            paddingAngle={3}
            dataKey="value"
            nameKey="source"
            startAngle={90}
            endAngle={-270}
          >
            {trafficSources.map((entry, index) => (
              <Cell key={index} fill={entry.color} stroke="transparent" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-4 space-y-2.5">
        {trafficSources.map((item) => (
          <div key={item.source} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5" style={{ backgroundColor: item.color }} />
              <span className="text-[11px] font-mono text-[#5a7a96]">{item.source}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-20 h-[3px] bg-[#1a2535] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${item.value}%`,
                    backgroundColor: item.color,
                    opacity: 0.7,
                  }}
                />
              </div>
              <span className="text-[11px] font-mono text-[#8aafc8] w-6 text-right">
                {item.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
