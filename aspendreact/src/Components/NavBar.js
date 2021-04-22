import "../stylesheet/new-style.css";
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className="container-fluid">
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light col-12">
        {/* <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                NFTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                EXPLORER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                ROADMAP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                FAQS
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-btn" to="/">
                CONNECT WALLET
            </NavLink>
          </li>
          </ul>
        </div>
      </nav>
     
    </div>
  </div>
    
  );
}

export default NavBar;
