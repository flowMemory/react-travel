import style from "./HotProduct.module.scss";
import { Divider } from 'antd';
import { ProductCard } from '../productCard/ProductCard';
interface ProductListProps {
  title: string;
  productList: {
    id: string | number;
    title: string;
    price: string;
    touristRoutePictures: any[]
  }[]
}

export const HotProduct:React.FC<ProductListProps> = ({productList, title}) => {
  return (
    <div className={style['hot-product-container']}>
      <Divider orientation="left">{title}</Divider>
      <div className={style['hot-product-list']}>
        {
          productList.map(item => {
            return <ProductCard productCard={item} key={item.id}></ProductCard>
          })
        }
      </div>
    </div>
  )
}