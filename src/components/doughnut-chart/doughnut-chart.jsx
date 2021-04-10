import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const DoughnutChart = () => {
    return (
        <CircularProgressbar value={65} text="5" strokeWidth={10} />
    )
    
}

export default DoughnutChart;