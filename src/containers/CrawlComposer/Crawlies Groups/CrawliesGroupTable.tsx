/* eslint-disable react/display-name */
import React from 'react';
import Table from 'components/UI/Table/index';
import { Button, Space, Tooltip, Popconfirm, Badge } from 'antd';
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
const dataSource = [
  {
    key: '1',
    name: (
      <h4 style={{ color: '#2e4a79' }}>
        React Native developers from Singapore
      </h4>
    ),
    source: 'Github',
    request: 1,
    error: 0,
    runtime: '0:00:23',
    started: 'October 7th 2020, 1:24:01 pm',
    totalCrawlies: <Badge style={{ background: '#060b28' }} count={25} />,
    category: (
      <Badge
        style={{ background: '#dcdcdc', color: '#313131' }}
        count={'Marketing'}
      />
    ),
    assignedCompanies: (
      <Badge style={{ background: '#dcdcdc', color: '#313131' }} count={24} />
    ),
    tags: (
      <Badge
        style={{ background: '#dcdcdc', color: '#313131' }}
        count={'Facebook Page manager'}
      />
    ),
  },
];

const columns = [
  {
    title: 'Group Name',
    dataIndex: 'name',
    key: 'name',
    filter: 'table',
  },
  {
    title: 'Categories',
    dataIndex: 'category',
    key: 'source',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'request',
  },
  {
    title: 'Total Crawlies',
    dataIndex: 'totalCrawlies',
    key: 'error',
  },
  {
    title: 'Assigned companies',
    dataIndex: 'assignedCompanies',
    key: 'runtime',
  },
  {
    title: 'Creation date',
    dataIndex: 'started',
    key: 'started',
  },
  {
    title: 'action',
    dataIndex: 'action',
    key: 'action',
    render: () => Actions(1),
  },
];

const CrawliesGroupTable = () => {
  return <Table data={dataSource} columns={columns} />;
};
export default CrawliesGroupTable;
