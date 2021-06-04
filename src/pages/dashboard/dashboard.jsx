// import { useSelector } from 'react-redux';
import DateLastUpdated from '../../components/date-lastUpdated-display/date-lastUpdated';
import ManagementDashboard from '../../components/management/managementDashboard';
import SearchInputField from '../../components/search-input/search-input';
import SideBar from '../../components/side-bar/side-bar';
import { BiRefresh } from 'react-icons/bi';
import './dashboard.css';
import { mutate } from 'swr';
import { DateTime } from 'luxon';
import { billboardRoute } from '../../utils/billboard-table/billboard-api';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = ({ type }) => {
  const { _id } = useSelector((state) => state.user);
  // eslint-disable-next-line
  const [currTime, setCurrTime] = useState(DateTime.now());
  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard-content">
        <div className="top-section">
          <DateLastUpdated />
          <SearchInputField />
        </div>
        <div
          className="refresh-billboard-visuals"
          onClick={async () => {
            await mutate(`${billboardRoute.url}${_id}/billboard-general`);
            setCurrTime(DateTime.now());
          }}
        >
          <BiRefresh />
        </div>
        {type === 'management' ? <ManagementDashboard /> : null}
      </div>
    </div>
  );
};

export default Dashboard;
