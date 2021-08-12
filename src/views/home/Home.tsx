import styles from './Home.module.scss';
import { Header, Footer, SideMenu } from '../../components';
export const Home: React.FC = () => {
  return (
    <div className={styles.App}>
    <Header />
    <div className={styles.content}>
      <SideMenu></SideMenu>
    </div>
    <Footer />
  </div>
  )
}