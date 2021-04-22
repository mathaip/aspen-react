import "../stylesheet/new-style.css";
import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import {NavLink} from 'react-router-dom';
import product from '../images/american-pack-white-background.png';

function MarketDetails() {
    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };
    const maxHeight = {
        height: "100vh"
    };
    const borderRight = {
        borderRight: "1px solid black"
    }
    return (
        <section className="showcase" style={alignTop}>
            <SideNav/>
            <div className="main">
                <NavBar/>
                <div className="row mt-4">
                    <div className="col-md-8">
                        <p className="text-center col-12">From $199</p>
                        <h1 className="text-center col-12">Taiping Rebellion</h1>
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-md-4" style={borderRight}>
                                    <h4 className="col-12 text-center">170</h4>
                                    <p className="col-12 text-center text-sm">NFTS</p>
                                </div>
                                <div className="col-md-4" style={borderRight}>
                                    <h4 className="col-12 text-center">3rd</h4>
                                    <p className="col-12 text-center text-sm">Most Deadly Conflict</p>
                                </div>
                                <div className="col-md-4">
                                    <h4 className="col-12 text-center">1850-1871</h4>
                                    <p className="col-12 text-center text-sm">Birth of the Heavenly Kingdom</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={maxHeight}>
                        <img src={product} alt className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketDetails;