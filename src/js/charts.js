import Chart from 'chart.js/auto';

export function initializeCharts() {
  // AI Performance Chart
  const performanceCtx = document.getElementById('ai-performance-chart');
  if (performanceCtx) {
    new Chart(performanceCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Chatbot Response Time (ms)',
          data: [150, 140, 125, 110, 95, 85],
          borderColor: '#007bff',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // Success Rate Chart
  const successCtx = document.getElementById('success-rate-chart');
  if (successCtx) {
    new Chart(successCtx, {
      type: 'doughnut',
      data: {
        labels: ['Successful', 'In Progress', 'Pending'],
        datasets: [{
          data: [85, 10, 5],
          backgroundColor: ['#28a745', '#ffc107', '#dc3545']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}