import React from 'react';
import CampaignAnalytics from './CampaignAnalytics/index';
import {
  RiseOutlined,
  HddOutlined,
  NotificationOutlined,
  BankOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import { Row, Col, Tabs, Card, Table, Form, Button, Select, Space } from 'antd';
import { Fade } from 'react-awesome-reveal';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import Modal from 'components/UI/Modal/Modal';
import AssignToCampanyGroup from './Assign to Company/Assign to Company';
import CreateCampaign from './Create Campaign/CreateCampaignForm';

const { TabPane } = Tabs;

const dataSource = [
  {
    key: '1',
    name: (
      <Modal
        onOK={() => console.log('hello')}
        title="React Native developers from Singapore"
        titleType="string"
        ModalTytle="Campaign Details"
        width={700}
      >
        {' '}
        <Row justify="center" className="pb-4" gutter={24}>
          <Col span={12}>
            <div className="ds-stat">
              <span className="ds-stat-name">Start date</span>
              <h6 className="font-18 text-primary">
                12 June 2020 (14:50 GMT+5)
              </h6>
            </div>

            <div className="ds-stat pt-4">
              <span className="ds-stat-name">Status</span>
              <h6 className="font-18 text-teal">Completed</h6>
            </div>
            <div className="ds-stat pt-4">
              <span className="ds-stat-name">Channel</span>
              <h6 className="font-18">Email</h6>
            </div>
          </Col>
          <Col span={12}>
            <div className="ds-stat">
              <span className="ds-stat-name">End date</span>
              <h6 className="font-18">12 June 2020 (17:45 GMT+5)</h6>
            </div>
            <div className="ds-stat pt-4">
              <span className="ds-stat-name">Total reach</span>
              <h6 className="font-18">234</h6>
            </div>
          </Col>
        </Row>
      </Modal>
    ),
    source: 'Github',
    request: 1,
    error: 0,
    runtime: '0:00:23',
    started: 'October 7th 2020, 1:24:01 pm',
    status: 'Completed',
  },
];

const columns = [
  {
    title: 'Campaign Name',
    dataIndex: 'name',
    key: 'name',
    filter: 'table',
  },
  {
    title: 'Channel',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Date',
    dataIndex: 'started',
    key: 'started',
  },
];

const CampaignDetails = () => {
  return (
    <div>
      <div>
        <PageTitle
          back
          title="React Native developers from Singapore"
          btnActive={false}
          additionalBtn={true}
        >
          <Modal
            onOK={() => console.log('hello')}
            titleType="button"
            ModalTytle="Campaign Details"
            headerTitle="Assign company to group"
            titleBtnClass="ant-btn ant-btn-navy ant-btn-round"
            btnIcon={<HddOutlined />}
            width={700}
          >
            <AssignToCampanyGroup />
          </Modal>{' '}
          <Modal
            onOK={() => console.log('hello')}
            titleType="button"
            titleBtnClass="ant-btn ant-btn-teal ant-btn-round"
            ModalTytle="Campaign Details"
            btnIcon={<NotificationOutlined />}
            width={700}
          >
            <CreateCampaign />
          </Modal>
        </PageTitle>
      </div>
      <CampaignAnalytics />

      <Row justify="center" className="pb-4" gutter={16}>
        <Col span={24}>
          <Fade>
            <Card>
              <Tabs defaultActiveKey="1">
                <TabPane
                  tab={
                    <span>
                      <RiseOutlined /> Campaign details
                    </span>
                  }
                  key="1"
                >
                  <Table
                    className="table-striped"
                    columns={columns}
                    dataSource={dataSource}
                    loading={false}
                    size="small"
                    pagination={{ pageSize: 10 }}
                  />
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <BankOutlined /> Assigned Companies
                    </span>
                  }
                  key="2"
                >
                  <Table
                    columns={columns}
                    dataSource={dataSource}
                    size="small"
                    pagination={{ pageSize: 10 }}
                    className="table-striped"
                  />
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      <UsergroupAddOutlined />
                      All Crawlies
                    </span>
                  }
                  key="3"
                >
                  <Table
                    columns={columns}
                    dataSource={dataSource}
                    size="small"
                    pagination={{ pageSize: 10 }}
                    className="table-striped"
                  />
                </TabPane>
              </Tabs>
            </Card>
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default CampaignDetails;
