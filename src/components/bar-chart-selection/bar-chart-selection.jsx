import { formatBillboardState } from '../../utils/billboard-table/format-text';
import './bar-chart-selection.css';

const ControlBarchartDisplay = ({stateData, currState, setCurrState}) => {
    return (
        <div className="sttates">
                {
                    stateData.map(stateObject => (
                        <p key={stateObject.state} onClick={() => setCurrState(stateObject)}>{formatBillboardState(stateObject.state)}</p>
                    ))
                }
                <div>arr</div>
            </div>
    )
}

export default ControlBarchartDisplay;