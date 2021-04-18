import { Bar } from "react-chartjs-2";

const BarChart = ({ barData }) => {
    return(
        <Bar 
            data={barData}
            height={450}
            options={{
                maintainAspectRatio: false,
                borderRadius: 33,
                legend: {
                    labels: {
                        fontSize: 13,
                        fontColor: 'rgba(52, 41, 41, 0.6)',
                        usePointStyle: true,
                    }
                }
            }}
        />
    )
}

export default BarChart;