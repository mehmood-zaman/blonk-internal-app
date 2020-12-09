import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, PieChartOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

interface Props {
  url: string;
  closeDrawer: () => void;
}
const CrawlComposerLinks: React.FC<Props> = ({ closeDrawer, url }) => {
  console.log('url', url);
  return (
    <>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to={`${url}/create-group`} onClick={closeDrawer}>
            Create Crawlies Group
          </NavLink>
        </Menu.Item>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Crawlies">
          <Menu.Item key="9">
            <NavLink to={`${url}/crawlies`} onClick={closeDrawer}>
              Crawlies listings
            </NavLink>
          </Menu.Item>
          <Menu.Item key="10">
            <NavLink to={`${url}/crawlies-groups`} onClick={closeDrawer}>
              Crawlies Group
            </NavLink>
          </Menu.Item>
          <Menu.Item key="11">
            <NavLink to={`${url}/campaign-details`} onClick={closeDrawer}>
              Campaign Details
            </NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default CrawlComposerLinks;
