// import { useState } from 'react';
import { useSelector } from 'react-redux';
import DisplayBillboards from '../billboards-display/billboards-display';
import CampaignManagement from '../campaigns-mgt/campaigns-mgt';
import PeopleManagement from '../people-mgt/people-mgt';
// import BillboardsTable from '../../components/billboards-table/billboard-table';
import './management-dashboard.css';

const ManagementDashboard = () => {
    const dashboardManagementState = useSelector(({dashboard}) => dashboard.management);
    console.log(dashboardManagementState)
    // const [managementChild,updateManagementChild] = useState({active:false, type: null})
    return (
            dashboardManagementState.child === 'inventory' ? 
                <DisplayBillboards showCreate/>
            :
            dashboardManagementState.child === 'people' ?
                <PeopleManagement />
                :
                dashboardManagementState.child === 'campaign' ?
                <CampaignManagement />
                :
            <div className="dashy">
                <div>
                    <h1>Hello I will be the graph and I am awaiting a full data.. winks</h1>
                </div>
                <DisplayBillboards />
            </div> 
            
        
    )
}

export default ManagementDashboard;