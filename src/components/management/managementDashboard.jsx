// import { useState } from 'react';
import { useSelector } from 'react-redux';
import DisplayBillboards from '../billboards-display/billboards-display';
// import BillboardsTable from '../../components/billboards-table/billboard-table';
import './management-dashboard.css';

const ManagementDashboard = () => {
    const dashboardManagementState = useSelector(({dashboard}) => dashboard.management);
    console.log(dashboardManagementState)
    // const [managementChild,updateManagementChild] = useState({active:false, type: null})
    return (
            !dashboardManagementState.active ? 
            <div className="dashy">
                <div>
                    <h1>Hello I will be the graph and I am awaiting a full data.. winks</h1>
                </div>
                <DisplayBillboards />
            </div> 
            :
            <DisplayBillboards />
        
    )
}

export default ManagementDashboard;