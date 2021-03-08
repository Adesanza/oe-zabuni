import './header.css';

const Header = () => {
    return (
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
                        <button type="button" data-toggle="modal" data-target="#myModal" className="homeb1 start1">
                        Login
                        </button>
                    </li>
                        {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Open modal
                      </button>  */}
                </ul> 
            </div>  
        </nav>
        </header>
    )
}

export default Header;