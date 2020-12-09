import React from 'react';
import { Accordion } from 'components/UI/Accordion/Accordion';
import { Actions } from 'components/UI/Actions/Actions';
import { Table, Button } from 'antd';
interface Props {
  title?: string;
}

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
    action: (
      <Button
        type="primary"
        className="ant-btn ant-btn-burgundy "
        style={{ background: '#990000', border: 'none' }}
        size="small"
        danger
      >
        Stop
      </Button>
    ),
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: 'Requests',
    dataIndex: 'request',
    key: 'request',
  },
  {
    title: 'Errors',
    dataIndex: 'error',
    key: 'error',
  },
  {
    title: 'Runtime',
    dataIndex: 'runtime',
    key: 'runtime',
  },
  {
    title: 'Started',
    dataIndex: 'started',
    key: 'started',
  },
  {
    title: 'action',
    dataIndex: 'action',
    key: 'action',
  },
];

export const RunningJobs: React.FC<Props> = () => {
  return (
    <div>
      <Accordion HeaderTitle="Running Jobs (23)">
        <Table
          size="small"
          className="table-striped"
          dataSource={dataSource}
          columns={columns}
        />
      </Accordion>
    </div>
  );
};
