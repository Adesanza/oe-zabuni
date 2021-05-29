import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { managementDashboard } from '../../redux/dashboard/dashboardReducer';
import SidebarDropdown from '../side-bar-dropdown/side-bar-dropdown';
import './side-bar.css';
import { dropdownData } from './sidebar-dropdown-data';

const SideBar = () => {
  const [activeSidebar, setactiveSidebar] = useState(dropdownData);
  const dispatch = useDispatch();
  const dashboardState = useSelector(({ dashboard }) => dashboard);
  let location = useLocation();

  useEffect(() => {
    setactiveSidebar({
      ...dropdownData,
      [location.pathname.replace('/', '')]: {
        active: false,
        title: location.pathname.replace('/', ''),
      },
    });
  }, [location.pathname]);
  return (
    <div className="side-bar">
      <SidebarDropdown
        data={activeSidebar.management}
        setactiveSidebar={setactiveSidebar}
      >
        <p
          onClick={() => dispatch(managementDashboard('inventory'))}
          className={
            dashboardState.management.child === 'inventory' ? 'highlight' : ''
          }
        >
          Inventory
        </p>
        <p
          onClick={() => dispatch(managementDashboard('people'))}
          className={
            dashboardState.management.child === 'people' ? 'highlight' : ''
          }
        >
          People
        </p>
        <p
          onClick={() => dispatch(managementDashboard('campaign'))}
          className={
            dashboardState.management.child === 'campaign' ? 'highlight' : ''
          }
        >
          Campaigns
        </p>
      </SidebarDropdown>
      <SidebarDropdown
        data={activeSidebar.marketing}
        setactiveSidebar={setactiveSidebar}
      >
        <p>zabuni</p>
        <p>zabuni</p>
        <p>zabuni</p>
      </SidebarDropdown>
      <SidebarDropdown
        data={activeSidebar.technical}
        setactiveSidebar={setactiveSidebar}
      >
        <p>Javascript</p>
        <p>React</p>
        <p>Node</p>
      </SidebarDropdown>
      <SidebarDropdown
        data={activeSidebar.operations}
        setactiveSidebar={setactiveSidebar}
      >
        <p>Addition</p>
        <p>Multiplication</p>
        <p>Division</p>
      </SidebarDropdown>
      <SidebarDropdown
        data={activeSidebar.finance}
        setactiveSidebar={setactiveSidebar}
      >
        <p>Dollar</p>
        <p>Naira</p>
        <p>Kobo</p>
      </SidebarDropdown>
    </div>
  );
};

export default SideBar;
