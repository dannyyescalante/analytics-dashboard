import React from 'react'

export default function Header() {
  const now = new Date()
  const formatted = now
    .toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    .toUpperCase()

  return (
    <header className="border-b border-[#1a2535] px-4 sm:px-6 py-4 mb-4">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-4">
          <div className="w-[3px] h-8 bg-[#0ea5e9]" />
          <div>
            <h1 className="text-[15px] font-semibold tracking-tight text-[#e2e8f0] leading-none mb-1">
              Analytics Dashboard
            </h1>
            <p className="text-[10px] font-mono text-[#3d5a72] tracking-[0.15em] uppercase">
              Business Intelligence — Q4 2024
            </p>
          </div>
        </div>

        {/* Right: Status + User */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-6 pr-5 border-r border-[#1a2535]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-[10px] font-mono text-[#3d5a72] tracking-widest">LIVE</span>
            </div>
            <span className="text-[10px] font-mono text-[#3d5a72] tracking-wider">{formatted}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-[13px] font-medium text-[#c8d8e8] leading-none mb-0.5">
                Danny Escalante
              </p>
              <p className="text-[10px] font-mono text-[#3d5a72]">Administrator</p>
            </div>
            <div className="w-8 h-8 bg-[#0d1826] border border-[#1a2d42] flex items-center justify-center">
              <span className="text-[11px] font-mono font-semibold text-[#0ea5e9] leading-none">
                DE
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
