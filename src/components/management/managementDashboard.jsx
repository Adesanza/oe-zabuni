// import { useState } from 'react';
import { useSelector } from 'react-redux';
import DisplayBillboards from '../billboards-display/billboards-display';
import BillboardsTable from '../billboards-table/billboard-table';
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
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6 digital">
                                <p>Digital</p>
                                <div className="">Active</div>
                                <div className="">Inactive</div>
                            </div>
                            <div className="col-md-6 digital">
                                <p>Digital</p>
                                <div className="">Active</div>
                                <div className="">Inactive</div>
                            </div>
                        </div>
                        <div className="col-md-12 types">
                            <p>Types</p>
                            <div className="">Active</div>
                            <div className="">Inactive</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 total">
                                <p>Total</p>
                                <div className="">Active</div>
                                <div className="">Inactive</div>
                            </div>
                            <div className="col-md-9 billboards">
                                <p>Billboards</p>
                                <div className="">Active</div>
                                <div className="">Inactive</div>
                            </div>
        
                        </div>
                        <div className="col-md-12 lagos">
                            <p>Lagos</p>
                            <div className="">Active</div>
                            <div className="">Inactive</div>
                        </div>
                    </div>
                    <div className="hermis col-md-8">
                    <BillboardsTable />
                    </div>
                    
                </div>
                
            </div> 
    )
}

export default ManagementDashboard;