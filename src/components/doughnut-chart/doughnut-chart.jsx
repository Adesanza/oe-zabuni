import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const DoughnutChart = ({totalValue, value, classState}) => {
    return (
        <div >
            <CircularProgressbar 
                value={value}
                maxValue={totalValue} 
                text={`${value}`} 
                strokeWidth={15} 
                styles={buildStyles({
                    pathColor: classState === 'active' ? '#0056b3' : classState === 'inactive' ? '#f5148e' : '#24f25e' 
                })}
                />
        </div>
    )
    
}

export default DoughnutChart;