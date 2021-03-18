import './date-lastUpdated.css';
import { DateTime } from 'luxon';
import getOrdinal from '../../utils/date-lastUpdated/dateGetOrdinal';

const DateLastUpdated = () => {
const dt = DateTime.now();
const date = `${dt.toFormat('EEEE')}, ${getOrdinal(dt.toFormat('d'))} ${dt.toFormat('MMMM')} ${dt.toFormat('yyyy')}`;
const lastUpdated = dt.toFormat('h');

    return (
        <div className="display-date">
            <p>{date}</p>
            <p>Data last updated <span>{lastUpdated} hour(s) ago</span></p>
        </div>
    )
}

export default DateLastUpdated;