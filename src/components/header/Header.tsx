import styles from "./Header.module.scss";
import { GlobalOutlined } from "@ant-design/icons";
import { Typography, Dropdown, Menu, Button, Input } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { createAddLanguageAction, createChangeLanguageAction } from '../../store/languageStore/languageActionCreator';
const { Title } = Typography;
export const Header: React.FC = () => {

  // 使用hooks的方式处理路由
  // const location = useLocation();
  // const params = useParams();
  // const match = useRouteMatch();
  const { t } = useTranslation();
  const history = useHistory();
  const language = useSelector((state) => state.language);
  const languageList = useSelector((state) => state.languageList);
  const dispatch = useDispatch();

  const languageHandler = (evt: any) => {
    console.log(evt)
    if(evt.key === 'new') {
      const action = createAddLanguageAction({name: '法语', code: '0221'});
      dispatch(action)
    } else {
      const action = createChangeLanguageAction(evt.key);
      dispatch(action)
    }
  }

  return (
    <div className={styles['app-head']}>
      <div className={styles['app-head-top']}>
        <div className={styles['nav-left']}>
          <Title className={styles['nav-left-title']} level={5}>{t("header.slogan")}</Title>
          <Dropdown.Button
            icon={<GlobalOutlined />}
            overlay={
              <Menu onClick={languageHandler}>
                {
                  languageList.map((item) => {
                    return <Menu.Item key={item.code}>{item.name}</Menu.Item>
                  })
                }
              </Menu>
            }
          >
            {language === 'zh' ? '中文' : 'English'}
          </Dropdown.Button>
        </div>
        <div className={styles['nav-right']}>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => {history.push('/registe')}}>{t("header.register")}</Button>
            <Button><Link to="/signIn">{t("header.signin")}</Link></Button>
          </Button.Group>
        </div>
      </div>
      <div className={styles['app-head-center']}>
        <Title className={styles.title} level={5}>
          <Link to="/">React旅游网</Link>
        </Title>
        <Input.Search className={styles.search} placeholder={"请输入旅游目的地、主题、或关键字"}></Input.Search>
      </div>
      <Menu mode={"horizontal"} className={styles["main-menu"]}>
      <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  )
}