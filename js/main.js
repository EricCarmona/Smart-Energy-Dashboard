
let chartInstance = null;
let allData = []; // Original JSON data from PHP

// Thema personalisatie
window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const opgeslagenThema = localStorage.getItem('thema');

  if (opgeslagenThema === 'donker') {
    body.classList.add('dark-theme');
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('thema', 'donker');
      } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('thema', 'licht');
      }
    });
  }

  fetch('php/data.php')
    .then(res => res.json())
    .then(data => {
      allData = Object.values(data);
      renderChartForYear(); // Default view
    });

  document.getElementById('filterJaar').addEventListener('click', renderChartForYear);
  document.getElementById('filterMaand').addEventListener('click', () => renderSelector('maand'));
  document.getElementById('filterDag').addEventListener('click', () => renderSelector('dag'));
  document.getElementById('filterUur').addEventListener('click', () => renderSelector('uur'));
});

function renderSelector(mode) {
  const container = document.getElementById('filterControls');
  container.innerHTML = '';

  const years = [...new Set(allData.map(item => item.Tijdstip.split('-')[0]))];
  const yearSelect = createSelect(years, 'yearSelect');
  container.appendChild(yearSelect);

  if (mode === 'dag' || mode === 'uur') {
    const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
    const monthSelect = createSelect(months, 'monthSelect');
    container.appendChild(monthSelect);
  }

  if (mode === 'uur') {
    const daySelect = document.createElement('input');
    daySelect.type = 'number';
    daySelect.id = 'dayInput';
    daySelect.placeholder = 'Dag (1-31)';
    container.appendChild(daySelect);
  }

  const apply = document.createElement('button');
  apply.textContent = 'Toepassen';
  apply.addEventListener('click', () => {
    const y = document.getElementById('yearSelect')?.value;
    const m = document.getElementById('monthSelect')?.value;
    const d = document.getElementById('dayInput')?.value;

    if (mode === 'maand') renderChartForMonth(y);
    else if (mode === 'dag') renderChartForDay(y, m);
    else if (mode === 'uur') renderChartForHour(y, m, d);
  });
  container.appendChild(apply);
}

function createSelect(options, id) {
  const select = document.createElement('select');
  select.id = id;
  options.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt;
    o.textContent = opt;
    select.appendChild(o);
  });
  return select;
}

function destroyChart() {
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }
}

function renderBarChart(labels, datasetLabel, datasetValues) {
  destroyChart();
  const ctx = document.getElementById('solarChart');
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: datasetLabel,
          data: datasetValues,
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: datasetLabel,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function renderChartForYear() {
  const yearMap = {};
  allData.forEach(item => {
    const year = item.Tijdstip.split('-')[0];
    yearMap[year] = (yearMap[year] || 0) + parseFloat(item['Zonnepaneelstroom (A)']);
  });
  renderBarChart(Object.keys(yearMap), 'Totaal stroom per jaar (A)', Object.values(yearMap));
}

function renderChartForMonth(year) {
  const monthMap = {};
  allData.forEach(item => {
    const [y, m] = item.Tijdstip.split(' ')[0].split('-');
    if (y === year) {
      monthMap[m] = (monthMap[m] || 0) + parseFloat(item['Zonnepaneelstroom (A)']);
    }
  });
  renderBarChart(Object.keys(monthMap), `Stroom per maand in ${year}`, Object.values(monthMap));
}

function renderChartForDay(year, month) {
  const dayMap = {};
  allData.forEach(item => {
    const [y, m, d] = item.Tijdstip.split(' ')[0].split('-');
    if (y === year && m === month) {
      dayMap[d] = (dayMap[d] || 0) + parseFloat(item['Zonnepaneelstroom (A)']);
    }
  });
  renderBarChart(Object.keys(dayMap), `Stroom per dag in ${month}-${year}`, Object.values(dayMap));
}

function renderChartForHour(year, month, day) {
  const hourMap = {};
  allData.forEach(item => {
    const [datum, tijd] = item.Tijdstip.split(' ');
    const [y, m, d] = datum.split('-');
    if (y === year && m === month && d === day.padStart(2, '0')) {
      const uur = tijd.split(':')[0];
      hourMap[uur] = (hourMap[uur] || 0) + parseFloat(item['Zonnepaneelstroom (A)']);
    }
  });
  renderBarChart(Object.keys(hourMap), `Stroom per uur op ${day}-${month}-${year}`, Object.values(hourMap));
}