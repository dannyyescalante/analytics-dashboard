import React from 'react'

function formatValue(value, prefix, suffix) {
  if (suffix === '%') {
    return `${prefix}${value.toFixed(2)}${suffix}`
  }
  if (prefix === '$') {
    if (value >= 1_000_000) return `${prefix}${(value / 1_000_000).toFixed(2)}M`
    if (value >= 1_000) return `${prefix}${(value / 1_000).toFixed(1)}K`
    return `${prefix}${value.toLocaleString()}`
  }
  if (value >= 1_000_000) return `${prefix}${(value / 1_000_000).toFixed(1)}M${suffix}`
  if (value >= 1_000) return `${prefix}${(value / 1_000).toFixed(1)}K${suffix}`
  return `${prefix}${value.toLocaleString()}${suffix}`
}

export default function KPICard({ label, value, change, prefix = '', suffix = '' }) {
  const isPositive = change >= 0
  const barWidth = Math.min(Math.abs(change) * 7, 100)

  return (
    <div className="kpi-card bg-[#0b1420] border border-[#1a2535] p-5 hover:border-[#2d4a63] transition-colors duration-300 group">
      {/* Label + Badge */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-[10px] font-mono text-[#3d5a72] tracking-[0.18em] uppercase leading-none">
          {label}
        </span>
        <span
          className={`text-[10px] font-mono px-2 py-0.5 leading-none ${
            isPositive
              ? 'text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20'
              : 'text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/20'
          }`}
        >
          {isPositive ? '+' : ''}
          {change.toFixed(1)}%
        </span>
      </div>

      {/* Value */}
      <div className="mb-3">
        <span className="text-[2rem] font-mono font-medium text-[#dde8f0] leading-none group-hover:text-white transition-colors duration-200">
          {formatValue(value, prefix, suffix)}
        </span>
      </div>

      {/* Period label */}
      <p className="text-[10px] font-mono text-[#2d4050] mb-4">vs last month</p>

      {/* Accent bar */}
      <div className="h-px bg-[#1a2535] relative overflow-hidden">
        <div
          className="accent-bar absolute left-0 top-0 h-full"
          style={{
            width: `${barWidth}%`,
            backgroundColor: isPositive ? '#0ea5e9' : '#ef4444',
          }}
        />
      </div>
    </div>
  )
}
