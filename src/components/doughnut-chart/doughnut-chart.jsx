import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const DoughnutChart = () => {
    return (
        <div >
            <CircularProgressbar value={45} text="5" strokeWidth={15} />
        </div>
    )
    
}

export default DoughnutChart;