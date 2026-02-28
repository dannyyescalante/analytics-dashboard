import React from 'react'
import { recentTransactions } from '../data/mockData'

const STATUS = {
  completed: {
    label: 'Completed',
    className: 'text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20',
  },
  pending: {
    label: 'Pending',
    className: 'text-[#f59e0b] bg-[#f59e0b]/10 border border-[#f59e0b]/20',
  },
  failed: {
    label: 'Failed',
    className: 'text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/20',
  },
}

const COLUMNS = ['Transaction ID', 'Customer', 'Method', 'Amount', 'Status', 'Date']

export default function TransactionsTable() {
  return (
    <div className="bg-[#0b1420] border border-[#1a2535] p-5 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[13px] font-semibold text-[#c8d8e8] tracking-tight mb-1">
            Recent Transactions
          </h2>
          <p className="text-[10px] font-mono text-[#3d5a72] tracking-[0.15em] uppercase">
            Last 8 entries
          </p>
        </div>
        <button className="text-[10px] font-mono text-[#0ea5e9] border border-[#0ea5e9]/25 px-3 py-1.5 hover:bg-[#0ea5e9]/8 hover:border-[#0ea5e9]/50 transition-all duration-150 tracking-wider uppercase">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-[#1a2535]">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className="text-left text-[10px] font-mono text-[#2d4050] tracking-[0.15em] uppercase pb-3 pr-5 last:pr-0 font-normal"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx) => {
              const status = STATUS[tx.status]
              return (
                <tr
                  key={tx.id}
                  className="border-b border-[#1a2535]/60 hover:bg-[#0ea5e9]/[0.04] transition-colors duration-150 group"
                >
                  <td className="py-3 pr-5">
                    <span className="text-[11px] font-mono text-[#0ea5e9] group-hover:text-[#38bdf8] transition-colors">
                      {tx.id}
                    </span>
                  </td>
                  <td className="py-3 pr-5">
                    <span className="text-[13px] text-[#c8d8e8]">{tx.customer}</span>
                  </td>
                  <td className="py-3 pr-5">
                    <span className="text-[11px] font-mono text-[#3d5a72]">{tx.method}</span>
                  </td>
                  <td className="py-3 pr-5">
                    <span className="text-[13px] font-mono font-medium text-[#dde8f0]">
                      ${tx.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-3 pr-5">
                    <span className={`text-[10px] font-mono px-2 py-0.5 tracking-wide ${status.className}`}>
                      {status.label}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className="text-[11px] font-mono text-[#2d4050]">{tx.date}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
