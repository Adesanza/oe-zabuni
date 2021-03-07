import { FaVectorSquare, FaCaretRight, FaCaretDown } from "react-icons/fa";
import './side-bar-dropdown.css';

const SidebarDropdown = ({ data, handleActiveSidebar, children }) => {
    return (
        <div className="side-bar-dropdown">
            <div className={`${data.active && 'sidebar-dropdown-active'} sidebar-dropdown-toggle`} onClick={() => handleActiveSidebar(data.title)}>
                    {
                        data.active ?
                        (<span><FaCaretDown/></span>)
                        :
                        (<span><FaCaretRight/></span>)
                    }
                <span><FaVectorSquare/></span>
                <span>{data.title}</span>
            </div>
            {
                data.active ? 
                <div className="sidebar-dropdown-content">
                        { children }
                    </div>
                :
                null
            } 
        </div>
    )
}

export default SidebarDropdown;