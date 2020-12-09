import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, PieChartOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

interface Props {
  url: string;
  closeDrawer: () => void;
}
const MobileMarketingLinks: React.FC<Props> = ({ closeDrawer, url }) => {
  console.log('url', url);
  return (
    <>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to={`${url}/create-campaigns`} onClick={closeDrawer}>
            Create Campaigns
          </NavLink>
        </Menu.Item>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Campaings">
          <Menu.Item key="9">
            <NavLink to={`${url}/campaign`} onClick={closeDrawer}>
              Campaign listings
            </NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default MobileMarketingLinks;
