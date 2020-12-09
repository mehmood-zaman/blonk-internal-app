import React from 'react';
import { Button, Space, Tooltip, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
export const Actions = (id: any) => {
  console.log(id);
  return (
    <Space>
      <Tooltip title="edit">
        <Button
          className="border-primary"
          shape="circle"
          icon={<EditOutlined className="text-primary" />}
        />
      </Tooltip>
      <Tooltip title="archive">
        <Popconfirm
          title="Are you sure archive this recruiter?"
          okText="Yes"
          onConfirm={() => console.log(id)}
          cancelText="No"
        >
          <Button className="border-amber" shape="circle">
            <i className="dripicons-archive text-amber" />
          </Button>
        </Popconfirm>
      </Tooltip>
      <Popconfirm
        title="Are you sure delete this recruiter?"
        okText="Yes"
        cancelText="No"
      >
        <Button
          className="border-burgundy"
          shape="circle"
          icon={<DeleteOutlined className="text-burgundy" />}
        />
      </Popconfirm>
    </Space>
  );
};
