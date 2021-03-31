// import { useSelector } from 'react-redux';
import DateLastUpdated from '../../components/date-lastUpdated-display/date-lastUpdated';
import ManagementDashboard from '../../components/management/managementDashboard';
import SearchInputField from '../../components/search-input-field/search-input-field';
import SideBar from '../../components/side-bar/side-bar';
import './dashboard.css';

const Dashboard = ({type}) => {
    // const dashboardState = useSelector(state => state.dashboard);
    return (
        <div className="dashboard">
            <SideBar />
            <div className="dashboard-content">
                <div className="top-section">
                    <DateLastUpdated />
                    <SearchInputField />
                </div>
                {
                    type === "management" ? 
                    <ManagementDashboard />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default Dashboard;