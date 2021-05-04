import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DoughnutChart = ({ totalValue, value, classState }) => {
  return (
    <div>
      <strong>
        <CircularProgressbar
          value={value}
          maxValue={totalValue}
          text={`${value}`}
          strokeWidth={13}
          styles={buildStyles({
            textSize: '30px',
            fontWeight: '700',
            pathColor:
              classState === 'active'
                ? '#0056b3'
                : classState === 'inactive'
                ? '#f5148e'
                : '#24f25e',
          })}
        />
      </strong>
    </div>
  );
};

export default DoughnutChart;
