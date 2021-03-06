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
  SnippetsOutlined,
  CloseCircleFilled,
  DeleteOutlined,
  SearchOutlined,
  UserOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { useRouteMatch } from 'react-router-dom';

import { Fade } from 'react-awesome-reveal';
import ErrorCard from '../../../../components/UI/ErrorCard/ErrorCard';
import { generateUsers } from '../../../../faker/users';
import CompanyDrawer from '../../../../components/BackOffice/CompanyDrawer';
// import JobDrawer from '../partials/JobDrawer';
import { ColumnsType } from 'antd/es/table';

interface Users {
  key: number;
  id: string;
  photo: string;
  fname: string;
  lname: string;
  link: JSX.Element;
  title: string;
  email: string;
  summary: string;
  location: string;
  status: string;
  jobCount: number;
  companyCount: number;
  createdAt: string;
}

const { TabPane } = Tabs;

const CandidateLists: React.FC = () => {
  const { url } = useRouteMatch();

  const [loading, setLoading] = useState(true);
  const [fakeData, setFakeData] = useState<any>({
    usersRecord: [],
  });
  const [searchText, setSearchText] = useState('');
  const [displayCompanyDrawer, setDisplayCompanyDrawer] = useState(false);
  const [displayJobDrawer, setDisplayJobDrawer] = useState(false);
  const [searchedColumn, setSearchedColumn] = useState('');

  useEffect(() => {
    setFakeData({
      ...fakeData,
      usersRecord: [...generateUsers(20, url).users],
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

  const companiesHandler = (id: any, recruiterCount: any) => {
    return (
      <Tooltip title={recruiterCount}>
        <Button
          className="ant-btn-light"
          shape="circle"
          onClick={() => setDisplayCompanyDrawer(true)}
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
            title="Are you sure archive this recruiter?"
            okText="Yes"
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

  const resumeHandler = (resume: any, status: any) => {
    if (status === 'complete') {
      return (
        <Button
          className="ant-btn-teal"
          shape="circle"
          onClick={() => setDisplayJobDrawer(true)}
        >
          <SnippetsOutlined />
        </Button>
      );
    } else {
      return <CloseCircleFilled className="text-light font-30" />;
    }
  };

  const columns: ColumnsType<Users> = [
    {
      title: 'Name',
      dataIndex: 'link',
      key: 'link',
      fixed: 'left',
      width: 200,
      sorter: (a: any, b: any) => a.link.length - b.link.length,
      sortDirections: ['ascend', 'descend'],
      ...getColumnSearchProps('link'),
    },
    {
      title: 'Email address',
      dataIndex: 'email',
      key: 'email',
      width: 250,
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      ...getColumnSearchProps('location'),
    },
    {
      title: 'Profile status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <>
          {
            <span
              className={`font-10 px-2 m-2 badge badge-${status} badge-teal text-white`}
              key={status}
            >
              {status}
            </span>
          }
        </>
      ),
    },
    {
      title: 'Resume',
      dataIndex: 'resume',
      key: 'resume',
      render: (resume, row) => resumeHandler(resume, row.status),
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
        title="Candidate listings"
        btnText="Add candidate"
        to={`${url}/add`}
        btnActive={true}
      />
      {!loading && !fakeData.usersRecord ? (
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
                        <FolderOpenOutlined /> Active candidates
                        <span className="tab-pane-count">123</span>
                      </span>
                    }
                    key="1"
                  >
                    <Table<Users>
                      className="table-striped"
                      columns={columns}
                      dataSource={fakeData.usersRecord}
                      loading={loading}
                      size="small"
                      pagination={{ pageSize: 10 }}
                      scroll={{ x: 1300 }}
                    />
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <DeleteOutlined /> Archived candidates
                        <span className="tab-pane-count">13</span>
                      </span>
                    }
                    key="2"
                  >
                    <Table<Users>
                      columns={columns}
                      bordered={true}
                      dataSource={generateUsers(2, url).users}
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
        onClose={() => setDisplayCompanyDrawer(false)}
        visible={displayCompanyDrawer}
        className="menu-drawer"
      >
        test
      </Drawer> */}
      {/* <RecruiterDrawer
        show={displayCompanyDrawer}
        hide={() => setDisplayCompanyDrawer(false)}
      />
      <JobDrawer
        show={displayJobDrawer}
        hide={() => setDisplayJobDrawer(false)}
      /> */}
    </>
  );
};

export default CandidateLists;
