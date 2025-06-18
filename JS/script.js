/*
  Dit bestand maakt deel uit van de map 'js/' waarin alle
  JavaScript-bestanden van het project zijn verzameld.
  Hier worden de belangrijkste functies behandeld zoals:
  - Beheer van energiedata
  - Dynamische update van het dashboard
  - Interactie met grafieken (Chart.js)
  Het overzichtelijk houden van de code maakt lezen en onderhoud makkelijker.
*/
// Data values can be filled with PHP (echo json_encode($array)) if embedded in a PHP file

// Energy Usage: Bar (energy) + Line (temperature)
const ctxEnergy = document.getElementById('energyUsageChart').getContext('2d');
new Chart(ctxEnergy, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            type: 'bar',
            label: 'Energy (kWh)',
            data: [120, 180, 130, 90, 60, 80, 160, 210, 150, 190, 170, 110], // PHP: <?=json_encode($energyData)?>
            backgroundColor: 'rgba(255, 189, 169, 0.37)',
            borderRadius: 6,
            yAxisID: 'y',
        },{
            type: 'line',
            label: 'Temperature (°C)',
            data: [10,12,16,18,20,22,24,26,24,20,15,12], // PHP: <?=json_encode($tempData)?>
            borderColor: '#6abf7a',
            backgroundColor: 'rgba(106, 191, 122, 0.15)',
            tension: 0.35,
            pointRadius: 3,
            fill: false,
            yAxisID: 'y1'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: true }},
        scales: {
            y: {
                beginAtZero: true,
                position: 'left',
                title: { display: true, text: 'kWh' },
                grid: { color: '#eee' }
            },
            y1: {
                beginAtZero: true,
                position: 'right',
                title: { display: true, text: '°C' },
                grid: { drawOnChartArea: false }
            }
        }
    }
});

// Daily Energy Cost Pie
const ctxPie = document.getElementById('costPieChart').getContext('2d');
new Chart(ctxPie, {
    type: 'doughnut',
    data: {
        labels: ['Main Power', 'Green Energy'],
        datasets: [{
            data: [236, 90], // PHP: <?=json_encode([$mainPower, $greenEnergy])?>
            backgroundColor: ['#ffbda9', '#b1e7bb']
        }]
    },
    options: {
        plugins: {
            legend: { display: true, position: 'bottom' }
        },
        cutout: '65%',
    }
});

// Carbon Footprint line
const ctxCarbon = document.getElementById('carbonFootprintChart').getContext('2d');
new Chart(ctxCarbon, {
    type: 'line',
    data: {
        labels: ['2014','2015','2016','2017','2018','2019','2020','2021','2022','2023'],
        datasets: [{
            label: 'CO₂ (kg)',
            data: [30, 29, 27, 25, 22, 20, 19, 15, 13, 10], // PHP: <?=json_encode($carbonData)?>
            borderColor: '#6abf7a',
            backgroundColor: 'rgba(106, 191, 122, 0.2)',
            fill: true,
            tension: 0.3,
            pointBackgroundColor: '#6abf7a'
        }]
    },
    options: {
        plugins: { legend: { display: false }},
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'kg' },
                grid: { color: '#e3f3e7' }
            }
        }
    }
});

// Storage donut
const ctxStorage = document.getElementById('storageChart').getContext('2d');
new Chart(ctxStorage, {
    type: 'doughnut',
    data: {
        labels: ['Main Power', 'Green Energy'],
        datasets: [{
            data: [50, 25], // PHP: <?=json_encode([$storageMain, $storageGreen])?>
            backgroundColor: ['#ffbda9', '#b1e7bb'],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        cutout: '80%',
    }
});