import './date-lastUpdated.css';
import { DateTime } from 'luxon';
import getOrdinal from '../../utils/date-lastUpdated/dateGetOrdinal';
import { getTimeSince } from '../../utils/date-lastUpdated/getTimeSince';
import { useBillboardGeneralInfo } from '../../hooks/billboard-data-hook';
const DateLastUpdated = () => {
    const { billboardGeneralInfo, isError } = useBillboardGeneralInfo();
const dt = DateTime.now();
const date = `${dt.toFormat('EEEE')}, ${getOrdinal(dt.toFormat('d'))} ${dt.toFormat('MMMM')} ${dt.toFormat('yyyy')}`;
const lastUpdated = dt.toFormat('h');

    return (
        <div className="display-date">
            <p>{date}</p>
            {
                billboardGeneralInfo ? 
                <p>Data last updated <span>{getTimeSince(billboardGeneralInfo.billboard_info.billboardLastUpdated)}</span></p>
                :
                null
            }
            
        </div>
    )
}
export default DateLastUpdated;
