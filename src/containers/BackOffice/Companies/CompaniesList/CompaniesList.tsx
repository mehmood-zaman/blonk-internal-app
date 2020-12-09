import React, { useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import PageTitle from '../../../../components/UI/PageTitle/PageTitle';

import {
  Row,
  Col,
  Tabs,
  Card,
  Table,
  Input,
  Button,
  Space,
  Tooltip,
  Switch,
  Popconfirm,
} from 'antd';
import {
  FolderOpenOutlined,
  DeleteOutlined,
  SearchOutlined,
  UserOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { useRouteMatch } from 'react-router-dom';

import { Fade } from 'react-awesome-reveal';
import ErrorCard from '../../../../components/UI/ErrorCard/ErrorCard';
import { generateCompanies } from '../../../../faker/companies';
import RecruiterDrawer from '../../../../components/BackOffice/RecruiterDrawer';
import JobDrawer from '../../../../components/BackOffice/JobDrawer';
import { ColumnsType } from 'antd/es/table';

interface Companies {
  key: number;
  link: any;
  owner: string;
  title: string;
  email: string;
  jobCount: number;
  recruiterCount: number;
  createdAt: string;
}

const { TabPane } = Tabs;

const CompaniesList: React.FC = () => {
  const { url } = useRouteMatch();

  const [loading, setLoading] = useState(true);
  const [fakeData, setFakeData] = useState<any>({
    companyRecord: [],
  });
  const [searchText, setSearchText] = useState('');
  const [displayRecruiterDrawer, setDisplayRecruiterDrawer] = useState(false);
  const [displayJobDrawer, setDisplayJobDrawer] = useState(false);
  const [searchedColumn, setSearchedColumn] = useState('');

  useEffect(() => {
    setFakeData({
      ...fakeData,
      companyRecord: [...generateCompanies(20, url).data],
    });
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  }, []);
  let searchInput: any;

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: (text: any) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearchText('');
  };

  const recruitersHandler = (id: any, recruiterCount: any) => {
    return (
      <Tooltip title={recruiterCount}>
        <Button
          className="ant-btn-light"
          shape="circle"
          onClick={() => setDisplayRecruiterDrawer(true)}
          icon={<UserOutlined />}
        />
      </Tooltip>
    );
  };

  const careerPageHandler = (id: any) => {
    return (
      <Tooltip title="Activate career page">
        <Switch />
      </Tooltip>
    );
  };

  const actionsHandler = (id: any) => {
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
            title="Are you sure archive this company?"
            okText="Yes"
            cancelText="No"
          >
            <Button className="border-amber" shape="circle">
              <i className="dripicons-archive text-amber" />
            </Button>
          </Popconfirm>
        </Tooltip>
        <Popconfirm
          title="Are you sure delete this company?"
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

  const jobsHandler = (id: any, jobCount: any) => {
    return (
      <Button
        className="ant-btn-teal"
        shape="circle"
        onClick={() => setDisplayJobDrawer(true)}
      >
        {jobCount}
      </Button>
    );
  };

  const columns: ColumnsType<Companies> = [
    {
      title: 'Name',
      dataIndex: 'link',
      key: 'link',
      fixed: 'left',
      width: 250,
      sorter: (a: any, b: any) => a.link.length - b.link.length,
      sortDirections: ['ascend', 'descend'],
      ...getColumnSearchProps('link'),
    },
    {
      title: 'Recruiters',
      dataIndex: 'id',
      width: 100,
      render: (id, row) => recruitersHandler(id, row.recruiterCount),

      // render: recruiters,
    },
    {
      title: 'Jobs',
      dataIndex: 'id',
      width: 80,
      render: (id, row) => jobsHandler(id, row.jobCount),
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      width: 150,
      ...getColumnSearchProps('owner'),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 150,
      ...getColumnSearchProps('title'),
    },
    {
      title: 'Email address',
      dataIndex: 'email',
      key: 'email',
      width: 200,
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Careerpage',
      dataIndex: 'id',
      key: 'careerpage',
      render: careerPageHandler,
    },
    {
      title: 'Created on',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'id',
      fixed: 'right',
      width: 120,
      render: actionsHandler,
    },
  ];

  return (
    <>
      <PageTitle
        back
        title="Company listings"
        btnText="Add company"
        to={`${url}/add`}
        btnActive={true}
      />
      {!loading && !fakeData.companyRecord ? (
        <ErrorCard />
      ) : (
        <Row justify="center" className="pb-4" gutter={16}>
          <Col span={24}>
            <Fade>
              <Card>
                <Tabs defaultActiveKey="1">
                  <TabPane
                    tab={
                      <span>
                        <FolderOpenOutlined /> Active companies
                        <span className="tab-pane-count">123</span>
                      </span>
                    }
                    key="1"
                  >
                    <Table<Companies>
                      className="table-striped"
                      columns={columns}
                      dataSource={fakeData.companyRecord}
                      loading={loading}
                      size="small"
                      pagination={{ pageSize: 10 }}
                      scroll={{ x: 1300 }}
                    />
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <DeleteOutlined /> Archived companies
                        <span className="tab-pane-count">13</span>
                      </span>
                    }
                    key="2"
                  >
                    <Table<Companies>
                      columns={columns}
                      bordered={true}
                      dataSource={generateCompanies(2, url).data}
                      size="small"
                      pagination={{ pageSize: 10 }}
                      scroll={{ x: 1300 }}
                      className="table-striped"
                    />
                  </TabPane>
                </Tabs>
              </Card>
            </Fade>
          </Col>
        </Row>
      )}
      {/* <Drawer
        title="Recruiters"
        placement="right"
        closable={true}
        onClose={() => setDisplayRecruiterDrawer(false)}
        visible={displayRecruiterDrawer}
        className="menu-drawer"
      >
        test
      </Drawer> */}
      <RecruiterDrawer
        show={displayRecruiterDrawer}
        hide={() => setDisplayRecruiterDrawer(false)}
      />
      <JobDrawer
        show={displayJobDrawer}
        hide={() => setDisplayJobDrawer(false)}
      />
    </>
  );
};

export default CompaniesList;
