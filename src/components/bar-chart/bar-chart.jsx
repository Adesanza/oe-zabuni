import { Bar } from "react-chartjs-2";

const BarChart = ({ barData }) => {
    return(
        <Bar 
            data={barData}
            height={450}
            options={{
                maintainAspectRatio: false
            }}
        />
    )
}

export default BarChart;