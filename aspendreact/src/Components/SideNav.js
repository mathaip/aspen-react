import "../stylesheet/new-style.css";
import logo from '../images/Aspen-logo-black.png';


function SideNav() {
    return (
        <header className="d-none d-md-flex">
        <div className="header">
            <img src={logo} alt="Logo"/>
            {/* <h1></h1> */}
        </div>
         
        
      </header>
    )
}

export default SideNav