import style from "./ProductCard.module.scss";
import { Image, Typography } from "antd";
import { RouteComponentProps, withRouter } from 'react-router-dom';

// 高阶组件的方式处理路由
// 继承RouteComponentProps的接口类型，从而获取router的属性，方法，参数
interface ProductCardProps extends RouteComponentProps {
  productCard: {
    id: string | number;
    title: string;
    price: string;
    size?: string;
    touristRoutePictures: any[]
  }
}
const ProductCardComponent: React.FC<ProductCardProps> = ({productCard, history}) => {
  return (
    <div 
      className={style['ProductCard-container']}
      onClick={() => {history.push(`/productDetail/:${productCard.id}`)}}
    >
      {
        productCard.size === 'large' ? 
        <Image src={productCard.touristRoutePictures[0].url} height={285} width={490}></Image> 
        : 
        <Image src={productCard.touristRoutePictures[0].url} height={120} width={240}></Image>
      }
      <div>
        <Typography.Text type="secondary">{productCard.title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {productCard.price} 起
        </Typography.Text>
      </div>
    </div>
  )
}

export const ProductCard = withRouter(ProductCardComponent);