import React from 'react';
import faker from 'faker';

import { Drawer, List, Avatar, Button, Divider, Col, Row } from 'antd';

interface Props {
  show: boolean;
  hide: any;
}

const CompanyDrawer: React.FC<Props> = ({ show, hide }) => {
  return (
    <>
      <Drawer
        title="Recruiters"
        placement="right"
        closable={true}
        onClose={hide}
        visible={show}
        width={600}
        className="menu-drawer"
      >
        {/* {faker.image.image()}
        {faker.image.imageUrl()}
        {faker.image.avatar()} */}
        <List
          dataSource={[
            {
              name: 'Lily',
            },
            {
              name: 'Lily',
            },
          ]}
          bordered
          renderItem={(item) => (
            <List.Item
              key={1}
              actions={[
                <a key="list-loadmore-edit">View profile</a>,
                <a key="list-loadmore-more">remove</a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Progresser XTech"
              />
            </List.Item>
          )}
        />

        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button>Add recruiter</Button>
        </div>
      </Drawer>
    </>
  );
};

export default CompanyDrawer;
