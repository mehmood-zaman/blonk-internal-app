import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import {
  Input,
  Button,
  Popconfirm,
  Radio,
  Badge,
  Tooltip,
  Space,
  Table,
} from 'antd';
import {
  SnippetsOutlined,
  CloseCircleFilled,
  DeleteOutlined,
  SearchOutlined,
  UserOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { generateMatches } from '../../../../../faker/matches';

import { ColumnsType } from 'antd/es/table';

interface Props {}

interface Matches {
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
  recruiterScore: string;
  candidateScore: string;
  fields: string;
  jobCount: number;
  companyCount: number;
  createdAt: string;
}
const MatchesTable: React.FC<Props> = () => {
  const { url } = useRouteMatch();

  const [loading, setLoading] = useState(true);
  const [fakeData, setFakeData] = useState<any>({
    matchesRecord: [],
  });
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  useEffect(() => {
    setFakeData({
      ...fakeData,
      matchesRecord: [...generateMatches(20, url).matches],
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

  const actionsHandler = (id: any) => {
    return (
      <Space>
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
          // onClick={() => setDisplayJobDrawer(true)}
        >
          <SnippetsOutlined />
        </Button>
      );
    } else {
      return <CloseCircleFilled className="text-light font-30" />;
    }
  };

  const scoreHandler = (recruiterScore: any, candidateScore: any) => {
    return (
      <>
        <Tooltip title="Recruiter score">
          <Badge count={recruiterScore} className="badge-count left-badge" />
        </Tooltip>
        <Tooltip title="Candidate score">
          <Badge count={candidateScore} className="badge-count right-badge" />
        </Tooltip>
      </>
    );
  };

  const statusHandler = () => {
    return (
      <>
        <Radio.Group size="small" buttonStyle="solid">
          <Radio.Button value="a">-1</Radio.Button>
          <Radio.Button value="c">0</Radio.Button>
          <Radio.Button value="d">1</Radio.Button>
          <Radio.Button value="d">2</Radio.Button>
        </Radio.Group>
      </>
    );
  };

  const columns: ColumnsType<Matches> = [
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
      title: 'Score',
      dataIndex: 'recruiterScore',
      key: 'recruiterScore',
      render: (recruiterScore, row) =>
        scoreHandler(recruiterScore, row.candidateScore),
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
      width: 50,
      render: actionsHandler,
    },
    {
      title: 'Status',
      key: 'id',
      fixed: 'right',
      width: 120,
      render: statusHandler,
    },
  ];

  return (
    <>
      <Table<Matches>
        className="table-striped"
        columns={columns}
        dataSource={fakeData.matchesRecord}
        loading={loading}
        size="small"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1300 }}
      />
    </>
  );
};

export default MatchesTable;
