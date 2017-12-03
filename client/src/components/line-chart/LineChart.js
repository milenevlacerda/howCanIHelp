import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          borderColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40],
          fill: {
            disabled: true
          }
        },
        {
          label: 'Data Two',
          borderColor: '#97CE68',
          data: [49, 60, 20, 50, 80, 90, 70],
          fill: {
            disabled: true
          }
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000,
        easing: 'easeInSine'
      },
      elements: {
        line: {
          tension: 0
        }
      }
    })
  }
}
