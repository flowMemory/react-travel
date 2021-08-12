import styles from "./SideMenu.module.scss";
import { sideMenuListData } from "./mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";
export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles["side-menu"]}>
      {sideMenuListData.map((item, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GifOutlined />
              {item.title}
            </span>
          }
        >
          {item.subMenu.map((sItem, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${smindex}`}
              title={
                <span>
                  <GifOutlined />
                  {sItem.title}
                </span>
              }
            >
              {sItem.subMenu.map((lastMenuItem, smsindex) => (
                <Menu.Item key={`sub-sub-menu-${smsindex}`}>
                  <span>
                    <GifOutlined />
                    {lastMenuItem}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
};