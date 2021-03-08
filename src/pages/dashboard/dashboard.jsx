import DisplayBillboards from '../../components/billboards-display/billboards-display';
import DateLastUpdated from '../../components/date-lastUpdated-display/date-lastUpdated';
import SearchInputField from '../../components/search-input-field/search-input-field';
import SideBar from '../../components/side-bar/side-bar';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <SideBar />
            <div className="dashboard-content">
                <div className="top-section">
                    <DateLastUpdated />
                    <SearchInputField />
                </div>
                <DisplayBillboards />
            </div>
        </div>
    )
}

export default Dashboard;