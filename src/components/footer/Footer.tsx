import styles from "./Footer.module.scss";
import { Layout, Typography } from 'antd';
export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title className={styles['copyright-title']} level={4}>版权所有 @ React 旅游网</Typography.Title>
    </Layout.Footer>
  )
} 