import React from 'react'
import './BreadCrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';


 function BreadCrums(props) {
    const {product} = props;


  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' /> {product && product.category} <img src={arrow_icon}/> {product && product.name}
    </div>
  )
}
export default BreadCrums;