import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({title,price,img,id}) => {
    let productTitle = title.split(' ').slice(0,3).join(' ');
       
        return (
            <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 card '>
                <Link to={`/products/${id}`} className="product-text">
                <div className='product-image'>
                    <img src={img} alt="cardimage"/>
                </div>
                <div className='product-details'>
                    <b className='product-title'>{productTitle}</b>
                    <p className='product-price'>${price}</p>
                     <img className='fav_icon' src={require("../../../Images/heart.svg").default } alt="Heartsvgimage"/> 
                </div>
                </Link>
            </div>
          )
    }

export default Card
