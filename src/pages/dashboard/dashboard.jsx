import SideBar from '../../components/side-bar/side-bar';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <SideBar />
            <div className="dashboard-content">
        <h1>CONTENT</h1>
            </div>
        </div>
    )
}

export default Dashboard;