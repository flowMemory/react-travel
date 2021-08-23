import styles from './Home.module.scss';
import { Row, Col } from 'antd';
import { Header, Footer, SideMenu, Carousel, HotProduct } from '../../components';
import * as productListData from '../../mockData/product-list-data'
export const Home: React.FC = () => {
  return (
    <div className={styles.App}>
    <Header />
    <div className={styles.content}>
      <div className={styles['contet-head-func']}>
        <Row>
          <Col span={6}><SideMenu></SideMenu></Col>
          <Col span={18}><Carousel></Carousel></Col>
        </Row>
      </div>
      {/* 产品推荐 */}
      <HotProduct productList={productListData.productList1} title="热门路线" />
      <HotProduct productList={productListData.productList2} title="国内路线" />
      <HotProduct productList={productListData.productList3} title="精品路线" />
    </div>
    <Footer />
  </div>
  )
}