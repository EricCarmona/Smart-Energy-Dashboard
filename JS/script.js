// Colors inspired by the design in the image.
const green = "#87cfa6";
const lightGreen = "#eaf8ed";
const orange = "#faa993";
const textGray = "#7f7f7f";

//Chart 1: Energy Consumption (Bar + Line)
const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Enero','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    datasets: [
      {
        label: 'Energía',
        data: [80, 90, 60, 70, 40, 60, 110, 180, 120, 115, 90, 60],
        backgroundColor: orange + "99",
        borderRadius: 8
      },
      {
        label: 'Temperatura',
        type: 'line',
        data: [10, 12, 13, 18, 20, 23, 25, 26, 22, 18, 14, 11],
        borderColor: green,
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: textGray } }
    },
    scales: {
      x: { ticks: { color: textGray } },
      y: { ticks: { color: textGray } }
    }
  }
});

//Chart 2: Pie Chart
const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Energía Principal', 'Energía Verde'],
    datasets: [{
      data: [72, 28],
      backgroundColor: [orange, green],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: textGray } }
    }
  }
});

//Chart 3: Carbon Footprint Line
const ctx3 = document.getElementById('chart3').getContext('2d');
new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['2015','2016','2017','2018','2019','2020','2021','2022','2023'],
    datasets: [{
      label: 'CO₂ (kg)',
      data: [30, 28, 25, 22, 20, 17, 16, 13, 11],
      backgroundColor: green + "66",
      borderColor: green,
      fill: true,
      tension: 0.3,
      pointRadius: 3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: textGray } },
      y: { ticks: { color: textGray } }
    }
  }
});

//Chart 4: Doughnut Capacity
const ctx4 = document.getElementById('chart4').getContext('2d');
new Chart(ctx4, {
  type: 'doughnut',
  data: {
    labels: ['Energía Principal', 'Energía Verde'],
    datasets: [{
      data: [50, 25, 25],
      backgroundColor: [orange, green, lightGreen],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: { position: 'bottom', labels: { color: textGray } }
    }
  }
});

//Chart 5: Line Demo 
const ctx5 = document.getElementById('chart5').getContext('2d');
new Chart(ctx5, {
  type: 'line',
  data: {
    labels: ['A','B','C','D','E','F','G','H'],
    datasets: [{
      label: 'Serie A',
      data: [10, 20, 15, 30, 20, 25, 18, 22],
      borderColor: orange,
      backgroundColor: orange + "33",
      fill: true,
      tension: 0.4,
      pointRadius: 3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: textGray } },
      y: { ticks: { color: textGray } }
    }
  }
});

// Chart 6: Bar Demo 
const ctx6 = document.getElementById('chart6').getContext('2d');
new Chart(ctx6, {
  type: 'bar',
  data: {
    labels: ['1','2','3','4','5','6'],
    datasets: [{
      label: 'Cantidad',
      data: [4, 8, 5, 7, 6, 3],
      backgroundColor: green + "cc",
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: textGray } },
      y: { ticks: { color: textGray } }
    }
  }
});

// Chart 7: Radar Demo 
const ctx7 = document.getElementById('chart7').getContext('2d');
new Chart(ctx7, {
  type: 'radar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      label: 'Valores',
      data: [20, 10, 30, 15, 25],
      backgroundColor: green + "33",
      borderColor: green,
      pointBackgroundColor: orange
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      r: {
        angleLines: { color: lightGreen },
        grid: { color: lightGreen },
        pointLabels: { color: textGray }
      }
    }
  }
});

// Chart 8: Polar Area Demo
const ctx8 = document.getElementById('chart8').getContext('2d');
new Chart(ctx8, {
  type: 'polarArea',
  data: {
    labels: ['Uno', 'Dos', 'Tres', 'Cuatro'],
    datasets: [{
      data: [11, 16, 7, 14],
      backgroundColor: [green, orange, lightGreen, "#fff"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: textGray } }
    }
  }
});

// Chart 9: Producción Solar Mensual
const ctx9 = document.getElementById('chart9').getContext('2d');
new Chart(ctx9, {
  type: 'bar',
  data: {
    labels: ['Enero','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    datasets: [{
      label: 'kWh Generados',
      data: [320, 410, 540, 600, 730, 820, 900, 870, 760, 620, 410, 300],
      backgroundColor: "#87cfa6cc",
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: textGray } },
      y: { ticks: { color: textGray } }
    }
  }
});