<!DOCTYPE html>

// Controleer of de gebruiker is ingelogd.
// Als dat niet zo is, wordt hij doorgestuurd naar index.php om in te loggen.
<?php
session_start();

if (!isset($_SESSION['user_is_logged_in']) || $_SESSION['user_is_logged_in'] !== true) {
    header("Location: index.php");
    exit();
}
?>

<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Smart Energy Dashboard</title>
  <link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./CSS/style.css">
  <!-- Chart.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div class="dashboard-container">
    <header>
      <h1>Smart Energy Dashboard</h1>
    </header>
    <main>
      <a href="index.php?action=logout">Log uit</a>

      <section class="stats-grid">
        <div class="stat-card green">
          <span class="stat-title">Eficiencia General</span>
          <span class="stat-value">70%</span>
        </div>
        <div class="stat-card green">
          <span class="stat-title">Uso Energía Renovable</span>
          <span class="stat-value">70%</span>
        </div>
        <div class="stat-card green">
          <span class="stat-title">Reducción de CO₂</span>
          <span class="stat-value">40%</span>
        </div>
        <div class="stat-card green">
          <span class="stat-title">Ahorro Costos</span>
          <span class="stat-value">150</span>
        </div>
        <div class="stat-card green">
          <span class="stat-title">Huella de Carbono</span>
          <span class="stat-value">150</span>
        </div>
      </section>
      <section class="charts-grid">
        <div class="chart-card">
          <h2>Consumo de Energía</h2>
          <canvas id="chart1"></canvas>
        </div>
        <div class="chart-card">
          <h2>Costo Diario de Energía</h2>
          <canvas id="chart2"></canvas>
        </div>
        <div class="chart-card">
          <h2>Huella de Carbono CO₂</h2>
          <canvas id="chart3"></canvas>
        </div>
        <div class="chart-card">
          <h2>Capacidad de Almacenamiento</h2>
          <canvas id="chart4"></canvas>
        </div>
        <div class="chart-card">
          <h2>Gráfica 5</h2>
          <canvas id="chart5"></canvas>
        </div>
        <div class="chart-card">
          <h2>Gráfica 6</h2>
          <canvas id="chart6"></canvas>
        </div>
        <div class="chart-card">
          <h2>Gráfica 7</h2>
          <canvas id="chart7"></canvas>
        </div>
        <div class="chart-card">
          <h2>Gráfica 8</h2>
          <canvas id="chart8"></canvas>
        </div>
        <div class="chart-card">
          <h2>Producción Solar Mensual</h2>
          <canvas id="chart9"></canvas>
        </div>
      </section>
    </main>
  </div>
  <script src="./JS/script.js"></script>
</body>
</html>