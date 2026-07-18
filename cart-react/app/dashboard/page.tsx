"use client";

import Statistics from "../../components/Statistics";
import SalesChart from "../../components/SalesChart";
import "../../styles/dashboard.css";

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📊 Dashboard de Ventas</h1>
        <p>Resumen general de la actividad del carrito de compras</p>
      </div>

      <Statistics />

      <div className="chart-section">
        <h2>Productos agregados</h2>
        <SalesChart />
      </div>
    </div>
  );
}