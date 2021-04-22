import "../stylesheet/new-style.css";
import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import {NavLink} from 'react-router-dom';
import product from '../images/american-pack-white-background.png';

function MarketPlace() {
    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };
    return (
        <section className="showcase" style={alignTop}>
            <SideNav/>
            <div className="main">
                <NavBar/>
                <h1 className="text-center">What Are You Looking For</h1>
                <div className="row mt-4">
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={product} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Product Heading</h4>
                                <p className="card__product--text col-12 text-center">Product Description</p>
                                <p className="card__product--price col-12 text-center">USD $4.00</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={product} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Product Heading</h4>
                                <p className="card__product--text col-12 text-center">Product Description</p>
                                <p className="card__product--price col-12 text-center">USD $4.00</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={product} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Product Heading</h4>
                                <p className="card__product--text col-12 text-center">Product Description</p>
                                <p className="card__product--price col-12 text-center">USD $4.00</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={product} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Product Heading</h4>
                                <p className="card__product--text col-12 text-center">Product Description</p>
                                <p className="card__product--price col-12 text-center">USD $4.00</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={product} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Product Heading</h4>
                                <p className="card__product--text col-12 text-center">Product Description</p>
                                <p className="card__product--price col-12 text-center">USD $4.00</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={product} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Product Heading</h4>
                                <p className="card__product--text col-12 text-center">Product Description</p>
                                <p className="card__product--price col-12 text-center">USD $4.00</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketPlace;