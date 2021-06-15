import React from "react";
import { NavLink } from 'react-router-dom';
import "../stylesheet/new-style.css";
import NavBar from '../Components/NavBar';
import SideNav from '../Components/SideNav'
import thomas from '../images/thomasJeff.jpeg';

function Product() {
    const alignTop = {
        alignItems: "start",
        paddingTop: "60px"
    };
    const formBtn = {
        
    }
    return (
        <section className="showcase" style={alignTop}>
            <SideNav />
            <div className="main">
                <NavBar />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-12 pl-5 pr-5">
                            <div className="col-12 product__img--container">
                                <img src={thomas} alt="product diagram" className="product__img" />
                            </div>
                            <p className="product__description">DRAFTSMAN OF THE DECLARATION OF INDEPENDENCE. FIRST SECRETERY OF STATE, SECOND VICE PRESIDENT AND THIRD PRESIDENT</p>
                        </div>
                        <div className="col-lg-5 col-12">
                            <p className="card__product--heading col-12">THOMAS JEFFERSON</p>
                            <p className="card__product--text col-12">The American Revolution NFT Pack</p>
                            <p className="m-0 col-12">Last Sale Price</p>
                            <p className="m-0 col-12">$1.500</p>
                            <form className="mt-5">
                                <div class="form-group">
                                    <input className="form-control" id="exampleInputEmail1" placeholder="$0.00" />
                                    <button type="submit" className="btn">Place Bid</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Product;
