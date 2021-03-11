import { useSelector } from 'react-redux';
import DisplayBillboards from '../../components/billboards-display/billboards-display';
import DateLastUpdated from '../../components/date-lastUpdated-display/date-lastUpdated';
import SearchInputField from '../../components/search-input-field/search-input-field';
import SideBar from '../../components/side-bar/side-bar';
import './dashboard.css';

const Dashboard = () => {
    const dashboardState = useSelector(state => state.dashboard);
    return (
        <div className="dashboard">
            <SideBar />
            <div className="dashboard-content">
                <div className="top-section">
                    <DateLastUpdated />
                    <SearchInputField />
                </div>
                {/* {
                    dashboardState === 'inventory' ?
                    (<DisplayBillboards />)
                    :
                    <div className="dashy">
                        <div>
                        <h1>Hello</h1>
                        </div>
                        <DisplayBillboards />
                    </div>
                } */}
                {/* uncomment the code above and comment the one below to test the dashboard out if the one above cannot be sorted out comment it out and use the one below*/}
                <DisplayBillboards/>
            </div>
        </div>
    )
}

export default Dashboard;