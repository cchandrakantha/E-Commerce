import React,{useContext} from 'react'
import ShopCategory from './ShopCategory'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/Breadcrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriprionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

export default function Product() {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product && all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
