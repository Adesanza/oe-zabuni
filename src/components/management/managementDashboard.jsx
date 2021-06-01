import { useSelector } from 'react-redux';
import BillboardCategory from '../billboard-category/billboard-category';
import BillboardDataVisuals from '../billboard-visualization/billboard-visualization';
import DisplayBillboards from '../billboards-display/billboards-display';
import CampaignManagement from '../campaigns-mgt/campaigns-mgt';
import PeopleManagement from '../people-mgt/people-mgt';
import { useBillboardGeneralInfo } from '../../hooks/billboard-data-hook';
import RingLoader from '../loader/loader';
import './management-dashboard.css';

const ManagementDashboard = () => {
  const dashboardManagementState = useSelector(
    ({ dashboard }) => dashboard.management
  );
  const { billboardGeneralInfo, isLoading } = useBillboardGeneralInfo();
  return dashboardManagementState.child === 'inventory' ? (
    <DisplayBillboards showCreate showCategoryNav />
  ) : dashboardManagementState.child === 'people' ? (
    <PeopleManagement />
  ) : dashboardManagementState.child === 'campaign' ? (
    <CampaignManagement />
  ) : (
    <div className="dashy">
      <BillboardCategory />
      <div className="row">
        <div className="col-md-4 p-0">
          {isLoading ? (
            <div className="loading-container">
              <RingLoader borderColor="#0056b3" />
            </div>
          ) : !isLoading &&
            !billboardGeneralInfo.billboard_info.billboardCount ? (
            <p>Sorry, no data yet</p>
          ) : (
            <BillboardDataVisuals billboardGeneralInfo={billboardGeneralInfo} />
          )}
        </div>
        <div className="col-md-8 pr-1">
          <DisplayBillboards />
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
