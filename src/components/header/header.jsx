import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { verticalModalContent } from '../../redux/vertical-modal/verticalModalReducer';
import './header.css';
import { FaSearch } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


const Header = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    return (
            userState ?
            (
                <header>
                <nav className="navbar fixed-top navbar-expand-sm  navbar-light header-nav">
                    <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/adesanza/image/upload/v1615320288/zabuni/Group_15_bed3tj.svg" alt="OE" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbar-list-4">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                
                            <Link className="nav-link dropdown-toggle dropping" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {`${userState.first_name} ${userState.last_name}`}  <CgProfile className="cgprofile"/>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <Link className="dropdown-item" to="/">Dashboard</Link>
                              <a className="dropdown-item" href="/">Edit Profile</a>
                              <a className="dropdown-item" href="/">Settings</a>
                              <a className="dropdown-item" href="/">Log Out</a>
                            </div>
                          </li>   
                        </ul>
                      </div>
                </nav>
            </header> 
            ):(
                <header >
                <nav className="navbar fixed-top navbar-expand-sm navbar-light header-nav1">
               <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/adesanza/image/upload/v1615071965/zabuni/Group_278_svodmy.svg" alt="ZABUNI" /></Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="collapsibleNavbar">
                   <ul className="navbar-nav">
                   <div className="searchContainer">
                        <FaSearch className="searchIcon"/>
                        <input className="searcher" placeholder="Where will you like to place your advert?" type="search" />
                    </div>
                    <li>
                    <button className="homeb start" onClick={() => dispatch(verticalModalContent('signup'))}>Sign Up as  <RiArrowDownSLine className="ArrowDown"/></button>
                </li>
                <li>
                    <button type="button" data-toggle="modal" data-target="#myModal" className="homeb1 start1" onClick={() => dispatch(verticalModalContent('login'))}>
                    Login
                    </button>
                </li>
                   </ul> 
               </div>  
           </nav>
           </header>
            )
    )
}

export default Header;