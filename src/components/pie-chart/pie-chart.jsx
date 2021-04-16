import { Pie } from "react-chartjs-2";

const PieChart = ({ pieLabels, pieData }) => {
    return (
        <Pie data={ {
            labels: [...pieLabels],
            datasets: [{
              label: 'Pie Dataset',
              data: [...pieData],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(155, 205, 86)',
                'rgb(122, 205, 86)',
                'rgb(55, 50, 86)',
                'rgb(105, 105, 86)'
              ],
              hoverOffset: 4
            }]
          }}
          options={{
                legend: {
                    labels: {
                        fontColor: '#fff'
                    },
                    position: 'left'
                }
          }}
          />
    )
    
}

export default PieChart;