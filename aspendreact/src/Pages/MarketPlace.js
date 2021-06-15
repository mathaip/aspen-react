import "../stylesheet/new-style.css";
import SideNav from '../Components/SideNav';
import NavBar from '../Components/NavBar';
import {NavLink} from 'react-router-dom';
import product from '../images/american-pack-white-background.png';
import frenchrevolution from '../images/frenchrevolution.png';
import RussianRevolution from '../images/Russian-pack.png'
import philosophers from '../images/philosophers-pack.png'
import taiping from '../images/taiping-rebellion.png'
import cuban from '../images/cuban-revolution-pack.png'

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
                <h1 className="text-center">Upcoming Collection Drops</h1>
                <div className="row mt-4">
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={product} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">American Revolutuion </h4>
                                <p className="card__product--text col-12 text-center">59 Packs</p>
                                <p className="card__product--text col-12 text-center">1 NFT per Pack </p>

                                <p className="card__product--price col-12 text-center">USD $150.00</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={frenchrevolution} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">French Revolutuion</h4>
                                <p className="card__product--text col-12 text-center">Pack Size TBD</p>
                                <p className="card__product--text col-12 text-center">Price TBD</p>

                                <p className="card__product--price col-12 text-center">July 2021</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={RussianRevolution} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Russian Revolution</h4>
                                <p className="card__product--text col-12 text-center">Pack Size TBD</p>
                                <p className="card__product--text col-12 text-center">Price TBD</p>

                                <p className="card__product--price col-12 text-center">August 2021</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={philosophers} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Philosophers</h4>

                                <p className="card__product--text col-12 text-center">Pack Size TBD</p>
                                <p className="card__product--text col-12 text-center">Price TBD</p>

                                <p className="card__product--price col-12 text-center">Fall 2021</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={taiping} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Taiping Rebellion</h4>

                                <p className="card__product--text col-12 text-center">Pack Size TBD</p>
                                <p className="card__product--text col-12 text-center">Price TBD</p>

                                <p className="card__product--price col-12 text-center">Fall 2021</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="card__product--container col-md-4 col-6">
                        <NavLink to="/MarketDetails" className="card__product--link">
                            <div className="card__product col-12">
                                <div className="card__product--img-container">
                                    <img src={cuban} alt className="card__product--img" />
                                </div>
                                <h4 className="card__product--heading col-12 text-center">Cuban Revolutuion</h4>
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