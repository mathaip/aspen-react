import React from "react";
import metadata from "../metadata-individual.json";
import {NavLink} from 'react-router-dom';
import "../stylesheet/new-style.css";
import NavBar from '../Components/NavBar';


const data = metadata.ids;
console.log(data)
const AllMomentsList = props => (
    <React.Fragment> 
    <NavBar/>

    {data.map(( moment, index) => ( //Deconstructs each cards
      
      <div className="card__product--container col-md-4 col-6"   key={index}>
            <NavLink to="/MarketDetails" className="card__product--link">
                <div className="card__product col-12">
                    <div className="card__product--img-container">
                    
                        <img src={moment.img} alt className="card__product--img" />
                            
                    
                    </div>
                    <h4 className="card__product--heading col-12 text-center">{moment.name} </h4>
                    <h4 className="card__product--heading col-12 text-center"> ID: {moment.id} </h4>

                    <p className="card__product--text col-12 text-center">{moment.description}</p>
                    
                </div>
              
            </NavLink>
        </div>
          ))}

    </React.Fragment>
)

export default AllMomentsList;