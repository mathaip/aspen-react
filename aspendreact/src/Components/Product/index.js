import React from 'react'
import { NavLink } from 'react-router-dom';
import productImg from '../../images/american-pack-white-background.png';

const ProductItem = ({product}) => {
    return (
        <div className="relative mb-[20px] col-lg-4 col-md-6 col-12 col-sm-12">
            <NavLink to={`/collectables/tokens/${product.id}`} className="card__product--link">
                <div className="bg-[#171717]">
                    <div className="card__product--img-container w-full">
                        <img src={product.img || productImg} alt="card product diagram" className="card__product--img" />
                    </div>
                    <p className="w-full pt-3 mb-2 text-center text-white">{product.name || ''} </p>
                    <p className="w-full pb-3 text-center text-white">{product.price || ''}</p>
                </div>
            </NavLink>
        </div>
    )
 }

export default ProductItem
