import styles from "./Header.module.scss";
import { Component }  from 'react';
import { LanguageState } from '../../store/languageStore/reducer';
import { createAddLanguageAction, createChangeLanguageAction } from '../../store/languageStore/languageActionCreator';
import store from '../../store';
import { GlobalOutlined } from "@ant-design/icons";
import { Typography, Dropdown, Menu, Button, Input } from 'antd';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
const { Title } = Typography;

// 类组件
// interface HeaderCompoentProps extends RouteComponentProps, LanguageState {};

// antdesign 类型要求
// export interface MenuInfo {
//   key: React.Key;
//   keyPath: React.Key[];
//   item: React.ReactInstance;
//   domEvent: React.MouseEvent<HTMLElement>;
// }

class HeaderCompoent extends Component<RouteComponentProps, LanguageState> {
  constructor(props: any) {
    super(props);
    const storeState = store.getState();
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
    };
  }

  componentDidMount = () => {
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    const storeState = store.getState();
    this.setState({
      language: storeState.language,
      languageList: storeState.languageList,
    });
  }

  languageHandler = (evt: any) => {
    console.log(evt)
    if(evt.key === 'new') {
      const action = createAddLanguageAction({name: '法语', code: '0221'});
      store.dispatch(action)
    } else {
      const action = createChangeLanguageAction(evt.key);
      store.dispatch(action)
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div className={styles['app-head']}>
        <div className={styles['app-head-top']}>
          <div className={styles['nav-left']}>
            <Title className={styles['nav-left-title']} level={5}>让旅游更幸福</Title>
            <Dropdown.Button
              icon={<GlobalOutlined />}
              overlay={
                <Menu onClick={this.languageHandler}>
                  {
                    this.state.languageList.map((item, index) => {
                      return <Menu.Item key={item.code}>{item.name}</Menu.Item>
                    })
                  }
                </Menu>
              }
            >
              {this.state.language === 'zh' ? '中文' : 'English'}
            </Dropdown.Button>
          </div>
          <div className={styles['nav-right']}>
            <Button.Group className={styles["button-group"]}>
              <Button onClick={() => { history.push('/registe') }}>注册</Button>
              <Button><Link to="/signIn">登陆</Link></Button>
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
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key="4"> 自由行 </Menu.Item>
          <Menu.Item key="5"> 私家团 </Menu.Item>
          <Menu.Item key="6"> 邮轮 </Menu.Item>
          <Menu.Item key="7"> 酒店+景点 </Menu.Item>
          <Menu.Item key="8"> 当地玩乐 </Menu.Item>
          <Menu.Item key="9"> 主题游 </Menu.Item>
          <Menu.Item key="10"> 定制游 </Menu.Item>
          <Menu.Item key="11"> 游学 </Menu.Item>
          <Menu.Item key="12"> 签证 </Menu.Item>
          <Menu.Item key="13"> 企业游 </Menu.Item>
          <Menu.Item key="14"> 高端游 </Menu.Item>
          <Menu.Item key="15"> 爱玩户外 </Menu.Item>
          <Menu.Item key="16"> 保险 </Menu.Item>
        </Menu>
      </div>
    )
  }
}
export const Header = withRouter(HeaderCompoent);