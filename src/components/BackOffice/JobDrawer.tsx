import React from 'react';
import faker from 'faker';

import { Drawer, List, Avatar, Button, Divider, Col, Row } from 'antd';

interface Props {
  show: boolean;
  hide: any;
}

const JobDrawer: React.FC<Props> = ({ show, hide }) => {
  return (
    <>
      <Drawer
        title="Jobs"
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
              name: 'React native developer',
            },
            {
              name: 'Full stack web developer',
            },
          ]}
          bordered
          renderItem={(item) => (
            <List.Item
              key={1}
              actions={[
                <a key="list-loadmore-edit">View</a>,
                <a key="list-loadmore-more">edit</a>,
              ]}
            >
              <List.Item.Meta
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
          <Button>Add new job</Button>
        </div>
      </Drawer>
    </>
  );
};

export default JobDrawer;
