    function showSection(id) {
      const sections = document.querySelectorAll('.dashboard__section');
      sections.forEach(section => section.classList.remove('dashboard__section--active'));
      document.getElementById(id).classList.add('dashboard__section--active');
    }

    // Ejemplo de datos (usa los datos reales de PHP o JSON si quieres)
const solarData = [
  { tijdstip: '00:00', spanning: 4.1, stroom: 0.096 },
  { tijdstip: '00:15', spanning: 4.05, stroom: 0.1 },
  { tijdstip: '00:30', spanning: 4.2, stroom: 0.12 },
  { tijdstip: '00:45', spanning: 4.1, stroom: 0.13 },
  { tijdstip: '01:00', spanning: 4.0, stroom: 0.11 },
];

// Extraemos los valores para el gráfico
const labels = solarData.map(item => item.tijdstip);
const voltageData = solarData.map(item => item.spanning);
const currentData = solarData.map(item => item.stroom);

// Crear la gráfica
const ctx = document.getElementById('solarChart').getContext('2d');
const solarChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Voltage (V)',
        data: voltageData,
        borderColor: 'rgba(255, 206, 86, 1)', // amarillo
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Current (A)',
        data: currentData,
        borderColor: 'rgba(54, 162, 235, 1)', // azul
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Solar Panel Voltage & Current Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
