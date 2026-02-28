export const monthlyRevenue = [
  { month: 'Jan', revenue: 42500, target: 40000 },
  { month: 'Feb', revenue: 38200, target: 40000 },
  { month: 'Mar', revenue: 51800, target: 45000 },
  { month: 'Apr', revenue: 49300, target: 48000 },
  { month: 'May', revenue: 62100, target: 55000 },
  { month: 'Jun', revenue: 58700, target: 60000 },
  { month: 'Jul', revenue: 71400, target: 65000 },
  { month: 'Aug', revenue: 68900, target: 70000 },
  { month: 'Sep', revenue: 79300, target: 75000 },
  { month: 'Oct', revenue: 84200, target: 80000 },
  { month: 'Nov', revenue: 91700, target: 88000 },
  { month: 'Dec', revenue: 103500, target: 95000 },
]

export const weeklySales = [
  { day: 'Mon', sales: 1240, orders: 87 },
  { day: 'Tue', sales: 1890, orders: 124 },
  { day: 'Wed', sales: 2310, orders: 156 },
  { day: 'Thu', sales: 1750, orders: 118 },
  { day: 'Fri', sales: 2890, orders: 198 },
  { day: 'Sat', sales: 3420, orders: 231 },
  { day: 'Sun', sales: 1950, orders: 132 },
]

export const trafficSources = [
  { source: 'Organic', value: 38, color: '#0ea5e9' },
  { source: 'Direct', value: 24, color: '#10b981' },
  { source: 'Referral', value: 18, color: '#f59e0b' },
  { source: 'Social', value: 14, color: '#8b5cf6' },
  { source: 'Email', value: 6, color: '#475569' },
]

export const recentTransactions = [
  { id: 'TXN-8821', customer: 'Acme Corp', amount: 12400, status: 'completed', date: '2024-12-27', method: 'Wire Transfer' },
  { id: 'TXN-8820', customer: 'TechFlow Ltd', amount: 3280, status: 'completed', date: '2024-12-27', method: 'Credit Card' },
  { id: 'TXN-8819', customer: 'DataSys Inc', amount: 8750, status: 'pending', date: '2024-12-26', method: 'Wire Transfer' },
  { id: 'TXN-8818', customer: 'CloudBase', amount: 1920, status: 'completed', date: '2024-12-26', method: 'Credit Card' },
  { id: 'TXN-8817', customer: 'Nexus Group', amount: 24600, status: 'completed', date: '2024-12-25', method: 'Wire Transfer' },
  { id: 'TXN-8816', customer: 'Orbit Tech', amount: 5440, status: 'failed', date: '2024-12-25', method: 'Credit Card' },
  { id: 'TXN-8815', customer: 'PrimeScale', amount: 9870, status: 'completed', date: '2024-12-24', method: 'ACH' },
  { id: 'TXN-8814', customer: 'Vertex Solutions', amount: 3150, status: 'pending', date: '2024-12-24', method: 'Credit Card' },
]

export const kpiData = [
  {
    label: 'Total Revenue',
    value: 103500,
    change: 12.4,
    prefix: '$',
    suffix: '',
  },
  {
    label: 'Active Users',
    value: 24831,
    change: 8.7,
    prefix: '',
    suffix: '',
  },
  {
    label: 'Conversion Rate',
    value: 3.42,
    change: -0.8,
    prefix: '',
    suffix: '%',
  },
  {
    label: 'Monthly Growth',
    value: 18.6,
    change: 2.3,
    prefix: '',
    suffix: '%',
  },
]
