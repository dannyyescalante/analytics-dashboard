# Analytics Dashboard

A professional business intelligence dashboard built with React, Tailwind CSS, and Recharts. Designed to visualize key business metrics, sales performance, traffic acquisition, and transaction history in a clean, data-focused interface.

## Live Demo

[View Demo](https://analytics-dashboard-chi-bice.vercel.app)

## Screenshot

<!-- Add screenshot after running the project -->

## Features

- **KPI Cards** — Revenue, active users, conversion rate, and monthly growth with trend indicators
- **Revenue Overview** — Monthly revenue vs target line chart for the full fiscal year
- **Weekly Sales** — Bar chart with daily sales and order breakdown
- **Traffic Sources** — Donut chart showing acquisition channel distribution
- **Transactions Table** — Recent transactions with status tracking and payment method

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool and dev server |
| Tailwind CSS | Styling |
| Recharts | Data visualization |
| IBM Plex fonts | Typography |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/analytics-dashboard.git
cd analytics-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Project Structure

```
analytics-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── KPICard.jsx
│   │   ├── RevenueLineChart.jsx
│   │   ├── WeeklySalesChart.jsx
│   │   ├── TrafficDonutChart.jsx
│   │   └── TransactionsTable.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Author

**Danny Escalante** — Systems Engineering Student
[GitHub](https://github.com/your-username) · [LinkedIn](https://linkedin.com/in/your-profile)
