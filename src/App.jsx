import React from 'react'
import Header from './components/Header'
import KPICard from './components/KPICard'
import RevenueLineChart from './components/RevenueLineChart'
import WeeklySalesChart from './components/WeeklySalesChart'
import TrafficDonutChart from './components/TrafficDonutChart'
import TransactionsTable from './components/TransactionsTable'
import { kpiData } from './data/mockData'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 pb-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
          {kpiData.map((kpi) => (
            <KPICard
              key={kpi.label}
              label={kpi.label}
              value={kpi.value}
              change={kpi.change}
              prefix={kpi.prefix}
              suffix={kpi.suffix}
            />
          ))}
        </div>

        {/* Row 1: Revenue chart + Traffic donut */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
          <div className="xl:col-span-2">
            <RevenueLineChart />
          </div>
          <div>
            <TrafficDonutChart />
          </div>
        </div>

        {/* Row 2: Weekly sales + Transactions table */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div>
            <WeeklySalesChart />
          </div>
          <div className="xl:col-span-2">
            <TransactionsTable />
          </div>
        </div>
      </main>
    </div>
  )
}
