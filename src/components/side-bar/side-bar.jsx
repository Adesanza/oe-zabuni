import { useState } from 'react';
import { FaVectorSquare } from "react-icons/fa";
import SidebarDropdown from '../side-bar-dropdown/side-bar-dropdown';
import './side-bar.css';
import { dropdownData } from './sidebar-dropdown-data';

const SideBar = () => {
    const [activeSidebar, setactiveSidebar] = useState(dropdownData);
    // console.log("state",activeSidebar === dropdownData)
    const handleActiveSidebar = (sidebarTitle) => {
        const updateSidebar = {...activeSidebar};
        // console.log("updayte",updateSidebar == dropdownData);
        console.log("title",sidebarTitle)
        // updateSidebar[sidebarTitle].active = !updateSidebar[sidebarTitle].active;
        console.log("data",updateSidebar)
        setactiveSidebar({...dropdownData,[sidebarTitle]:{active: !updateSidebar[sidebarTitle].active,title:sidebarTitle}});
    }
    return (
        <div className="side-bar">
            <SidebarDropdown data={activeSidebar.dashboard} handleActiveSidebar={handleActiveSidebar} >
                    <p>Inventory</p>
                    <p>People</p>
                    <p>Campaign</p>
                </SidebarDropdown>
            <SidebarDropdown data={activeSidebar.marketing} handleActiveSidebar={handleActiveSidebar} >
                    <p>Yaba market</p>
                    <p>Kogi market</p>
                    <p>Enugu market</p>
                </SidebarDropdown>
            <SidebarDropdown data={activeSidebar.technical} handleActiveSidebar={handleActiveSidebar} >
                        <p>Javascript</p>
                        <p>React</p>
                        <p>Firebase</p>
                </SidebarDropdown>
            <SidebarDropdown data={activeSidebar.operations} handleActiveSidebar={handleActiveSidebar} >
                            <p>Addition</p>
                            <p>Multiplication</p>
                            <p>Division</p>
                </SidebarDropdown>
            <SidebarDropdown data={activeSidebar.finance} handleActiveSidebar={handleActiveSidebar} > 
                            <p>Dollar</p>
                            <p>Naira</p>
                            <p>Kobo</p>
                </SidebarDropdown>
            <div className="sidebar-settings">
                <span><FaVectorSquare/></span>
                <span>settings</span>
            </div>
        </div>
    )
}

export default SideBar;