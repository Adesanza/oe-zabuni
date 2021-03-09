import { useDispatch, useSelector } from 'react-redux';
import { verticalModalContent } from '../../redux/vertical-modal/verticalModalReducer';
import './header.css';

const Header = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    return (
            userState ?
            (
                <header>
                <nav className="navbar fixed-top navbar-expand-sm  navbar-light header-nav">
                    <a className="navbar-brand" href="/"><img src="https://res.cloudinary.com/adesanza/image/upload/v1615320288/zabuni/Group_15_bed3tj.svg" alt="OE" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbar-list-4">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Ayinla Ogunbiyi<img src="https://res.cloudinary.com/adesanza/image/upload/v1615321731/zabuni/Ellipse_1_cyixos.png" width="40" height="40" className="rounded-circle" alt="user icon" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
                <header className="popy">
                <nav className="navbar fixed-top navbar-expand-sm  navbar-light header-nav">
               <a className="navbar-brand" href="/"><img src="https://res.cloudinary.com/adesanza/image/upload/v1615071965/zabuni/Group_278_svodmy.svg" alt="ZABUNI" /></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="collapsibleNavbar">
                   <ul className="navbar-nav">
                       <li className="nav-item">
                           <a className="nav-link" href="/" id="navs">For Publishers</a>
                       </li>
                       <li className="nav-item">
                           <a className="nav-link" href="/" id="navs">What we do</a>
                       </li>
                       <li className="nav-item">
                           <a className="nav-link" href="/" id="navs">Campaigns</a>
                       </li>
                       <li className="nav-item">
                           <a className="nav-link" href="/" id="navs">Campaigns</a>
                       </li>
                       <li>
                           <button className="homeb"><a href="/" className="start">Sign Up</a></button>
                       </li>
                       <li>
                           <button type="button" className="homeb1 start1" onClick={() => dispatch(verticalModalContent('login'))} >
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