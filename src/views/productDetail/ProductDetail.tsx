import { RouteComponentProps } from 'react-router-dom';
interface ProductId {
  id: string
}
// RouteComponentProps<ProductId> 注入两个接口泛型，获取代码检测，提示
export const ProductDetail: React.FC<RouteComponentProps<ProductId>> = (props) => {
  console.log(props.match)
  return (
    <div>产品详情id - {props.match.params.id}</div>
  )
}