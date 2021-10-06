import React from "react";
import metadata from "../metadata-individual.json";
import { NavLink } from "react-router-dom";
import "../stylesheet/new-style.css";
import NavBar from "../Components/NavBar";
import SideNav from "../Components/SideNav";
import HeaderNew from "../Components/HeaderNew";

function AllMomentsList() {
  const data = metadata.ids;

  return (
    <div className="detail-container w-screen min-h-screen text-[14px] font-medium bg-black text-white tracking-[1.4px] font-Montserrat">
      <div className="py-[33px]">
        <HeaderNew />
      </div>
      <div className="w-full px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
          {data.map((moment, index) => (
            <div className="bg-[#171717] text-white" key={index}>
              <NavLink to={`collectables/tokens/${moment.id}`} className="hover:text-white">
                <div className="col-12">
                  <div className="card__product--img-container">
                    <img
                      src={moment.img}
                      alt=""
                      className="card__product--img"
                    />
                  </div>
                  <h4 className="card__product--heading col-12 text-center">
                    {moment.name}
                  </h4>
                  <h4 className="card__product--heading col-12 text-center">
                    ID: {moment.id}
                  </h4>

                  <p className="card__product--text col-12 text-center">
                    {moment.description}
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllMomentsList;
