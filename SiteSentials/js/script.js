document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  updateVitals();
  setInterval(updateVitals, 3000);

  setupCharts();
  setupMap();
});

function updateVitals() {
  document.getElementById('heart-rate').innerText = Math.floor(60 + Math.random() * 30);
  document.getElementById('temperature').innerText = (36 + 0.5 + Math.random()).toFixed(1);
  document.getElementById('oxygen').innerText = Math.floor(95 + Math.random() * 3);
  document.getElementById('gas').innerText = Math.floor(100 + Math.random() * 200);
}

function setupCharts() {
  new Chart(document.getElementById('monthlyChart'), {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [{ label: 'Incidents', data: [3,4,2,5,1,3], borderColor: '#ffc107', fill: false }]
    }
  });
  new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: ['Helmet','Vest','Gas Sensor'],
      datasets: [{ data: [50,40,30], backgroundColor: ['#007bff','#28a745','#dc3545'] }]
    },
    options: { plugins: { legend: { display: false } } }
  });
  new Chart(document.getElementById('doughnutChart'), {
    type: 'doughnut',
    data: {
      labels: ['Safe','Warning','Critical'],
      datasets: [{ data: [70,20,10], backgroundColor: ['#198754','#ffc107','#dc3545'] }]
    }
  });
}

function setupMap() {
  const map = L.map('map').setView([6.5244,3.3792],13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([6.5244,3.3792]).addTo(map).bindPopup('Construction Site A');
}

function logout() {
  window.location.href = 'login.html';
}
