import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBillboards } from '../../redux/billboard-data/billboardDataReducer';
import BillboardCategory from '../billboard-category/billboard-category';
import BillboardDataVisuals from '../billboard-visualization/billboard-visualization';
import DisplayBillboards from '../billboards-display/billboards-display';
// import BillboardsTable from '../billboards-table/billboard-table';
import CampaignManagement from '../campaigns-mgt/campaigns-mgt';
import PeopleManagement from '../people-mgt/people-mgt';
// import BillboardsTable from '../../components/billboards-table/billboard-table';
import './management-dashboard.css';

const ManagementDashboard = () => {
    const dashboardManagementState = useSelector(({dashboard}) => dashboard.management);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllBillboards()); //eslint-disable-next-line
    },[])
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