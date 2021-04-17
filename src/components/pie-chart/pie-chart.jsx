import { Pie } from "react-chartjs-2";

// function handleHover(evt, item, legend) {
//     legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
//       colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
//     });
//     legend.chart.update();
//   }
//   function handleLeave(evt, item, legend) {
//     legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
//       colors[index] = color.length === 9 ? color.slice(0, -2) : color;
//     });
//     legend.chart.update();
//   }

const PieChart = ({ pieLabels, pieData }) => {
    
    return (
        <Pie data={{
            labels: [...pieLabels],
            datasets: [{
              label: 'Pie Dataset',
              data: [...pieData],
              backgroundColor: [
                '#342929',
                '#F5148E',
                '#FFB800',
                '#24F25E',
                '#fff',
                '#97B9DF'
              ],
              hoverOffset: 4
            }]
          }}
          options={{
                legend: {
                    labels: {
                        fontSize: 13,
                        fontColor: '#fff',
                        usePointStyle: true,
                    },
                    position: 'left'
                }
          }}
          />
    )
    
}

export default PieChart;