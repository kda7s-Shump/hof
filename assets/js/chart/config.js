const config = {
  type: 'radar',
  data: data,
  options: {
    responsive: true,
  },
};

const ct1 = document.getElementById('myChart1').getContext('2d');
const ct2 = document.getElementById('myChart2').getContext('2d');
const ct3 = document.getElementById('myChart3').getContext('2d');

const chart1 = new Chart(ct1, config);
const chart2 = new Chart(ct2, config);
const chart3 = new Chart(ct3, config);