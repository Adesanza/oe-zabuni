import {  useSelector } from 'react-redux';
import BillboardCategory from '../billboard-category/billboard-category';
import BillboardDataVisuals from '../billboard-visualization/billboard-visualization';
import DisplayBillboards from '../billboards-display/billboards-display';
import CampaignManagement from '../campaigns-mgt/campaigns-mgt';
import PeopleManagement from '../people-mgt/people-mgt';
import './management-dashboard.css';

const ManagementDashboard = () => {
    const dashboardManagementState = useSelector(({dashboard}) => dashboard.management);
    return (
            dashboardManagementState.child === 'inventory' ? 
                <DisplayBillboards showCreate showCategoryNav />
            :
            dashboardManagementState.child === 'people' ?
                <PeopleManagement />
                :
                dashboardManagementState.child === 'campaign' ?
                <CampaignManagement />
                :
            <div className="dashy">
                <BillboardCategory />
                <div className="row">
                    <div className="col-md-4 pl-0">
                        <BillboardDataVisuals />
                    </div>
                    <div className="col-md-8">
                    <DisplayBillboards />
                    </div>
                    
                </div>
                
            </div> 
    )
}

export default ManagementDashboard;