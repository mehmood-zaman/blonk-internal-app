import React, { useEffect, useState } from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import IconCard from '../../../../components/UI/IconCard/IconCard';
import PageTitle from '../../../../components/UI/PageTitle/PageTitle';
import ErrorCard from '../../../../components/UI/ErrorCard/ErrorCard';
import {
  Row,
  Col,
  Card,
  Skeleton,
  Empty,
  Button,
  Avatar,
  Typography,
  List,
  Tooltip,
  Space,
  Table,
} from 'antd';
import { Fade } from 'react-awesome-reveal';
// import { useGetSingleCompanyQuery } from "../../../graphql/generated/graphql";
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { generateCompanies } from '../../../../faker/companies';

import moment from 'moment';
import { HttpState } from '../../../../store/http/types';
const { Title, Paragraph } = Typography;
const { Column, ColumnGroup } = Table;

interface Jobs {
  key: number;
  title: string;
  jobfields: any;
  location: any;
  contract: any;
  candidates: number;
  status: any;
  createdAt: string;
}

const ViewCompany: React.FC = () => {
  let { companyId } = useParams();
  const { url } = useRouteMatch();
  const { redirectPath } = useSelector((state: HttpState) => state.http);
  //handle view
  const [hasData, setHasData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({
    getSingleCompany: null,
  });
  useEffect(() => {
    setData({
      getSingleCompany: { ...generateCompanies(1, url).data },
    });
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  }, []);

  const tableData: any = [
    {
      key: 1,
      title: 'Fullstack Javascript developer',
      jobfields: ['IT', 'Software development'],
      location: ['Singapore', 'Malaysia'],
      contract: 'full-time',
      candidates: 23,
      status: 'active',
      createdAt: '22 Jan 2020',
    },
    {
      key: 1,
      title: 'Social media campaign manager',
      jobfields: ['Marketing', 'Social media'],
      location: ['Pakistan'],
      contract: 'full-time',
      candidates: 103,
      status: 'active',
      createdAt: '01 Mar 2020',
    },
  ];

  return (
    <>
      <PageTitle
        title="Company information"
        btnText="Edit company"
        to={`/companies/edit/${data.uuid}`}
        btnActive={false}
        back
      />
      {!loading && !data ? (
        <ErrorCard />
      ) : (
        <>
          <Row justify="center" className="pb-4" gutter={16}>
            <Col span={16}>
              <Fade>
                <Card>
                  <Skeleton
                    active
                    avatar
                    paragraph={{ rows: 3 }}
                    className="p-4"
                    loading={loading}
                  >
                    {data && data.getSingleCompany !== null ? (
                      <>
                        <Row justify="center" className="pb-4" gutter={16}>
                          <Col span={4}>
                            <Avatar size={92} icon={<UserOutlined />} />
                          </Col>
                          <Col span={20}>
                            <Title level={4} style={{ marginBottom: '0px' }}>
                              Herzog, Bogan and Hilll
                            </Title>
                            <p
                              style={{
                                fontSize: '12px',
                                color: '#ababab',
                                marginBottom: '0px',
                              }}
                            >
                              <CalendarOutlined /> 23 March 2020
                            </p>
                            <div>
                              <Tooltip placement="left" title="Company size">
                                <span className="font-10 px-2 mt-2 mr-2 badge badge-light badge-pill">
                                  10 - 50
                                </span>
                              </Tooltip>
                              <Tooltip placement="left" title="Sector">
                                <span className="font-10 px-2 mt-2  badge badge-amber badge-pill">
                                  Telecomunication
                                </span>
                              </Tooltip>
                              <Space style={{ float: 'right' }}>
                                <Tooltip title="website">
                                  <Button
                                    className="ant-btn-burgundy"
                                    shape="circle"
                                    icon={<i className="fas fa-link" />}
                                  />
                                </Tooltip>
                                <Tooltip title="facebook">
                                  <Button
                                    className="ant-btn-burgundy"
                                    shape="circle"
                                    icon={<i className="fab fa-facebook-f" />}
                                  />
                                </Tooltip>
                                <Tooltip title="twitter">
                                  <Button
                                    className="ant-btn-burgundy"
                                    shape="circle"
                                    icon={<i className="fab fa-twitter" />}
                                  />
                                </Tooltip>
                                <Tooltip title="linkedIn">
                                  <Button
                                    className="ant-btn-burgundy"
                                    shape="circle"
                                    icon={<i className="fab fa-linkedin-in" />}
                                  />
                                </Tooltip>
                              </Space>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Paragraph
                              ellipsis={{
                                rows: 2,
                                expandable: true,
                                symbol: 'more',
                              }}
                            >
                              Ant Design, a design language for background
                              applications, is refined by Ant UED Team. Ant
                              Design, a design language for background
                              applications, is refined by Ant UED Team. Ant
                              Design, a design language for background
                              applications, is refined by Ant UED Team. Ant
                              Design, a design language for background
                              applications, is refined by Ant UED Team. Ant
                              Design, a design language for background
                              applications, is refined by Ant UED Team. Ant
                              Design, a design language for background
                              applications, is refined by Ant UED Team.
                            </Paragraph>
                          </Col>
                        </Row>
                      </>
                    ) : (
                      <div className="p-4 m-t-40 m-b-40">
                        <Empty description={<span>No company found</span>}>
                          <Link to={'/companies/new'}>
                            <Button
                              className="ant-btn-amber"
                              shape="round"
                              size="middle"
                            >
                              Create new company
                            </Button>
                          </Link>
                        </Empty>
                      </div>
                    )}
                  </Skeleton>
                </Card>
              </Fade>
            </Col>
            <Col span={8}>
              <Card>
                <List
                  dataSource={[
                    {
                      name: 'John Doe',
                      email: 'john@gmail.com',
                    },
                    {
                      name: 'Gold Smith',
                      email: 'smith@gmail.com',
                    },
                  ]}
                  renderItem={(item: any) => (
                    <List.Item key={1}>
                      <Skeleton
                        loading={loading}
                        active
                        avatar
                        paragraph={{ rows: 1 }}
                      >
                        <List.Item.Meta
                          avatar={
                            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                          }
                          title={
                            <Link to={`${redirectPath}/recruiters/123451`}>
                              {item.name}
                            </Link>
                          }
                          description={item.email}
                        />
                      </Skeleton>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
          <Row justify="center" className="pb-4" gutter={16}>
            <Col span={24}>
              <Fade>
                <Card>
                  <Skeleton
                    active
                    avatar
                    paragraph={{ rows: 3 }}
                    className="p-4"
                    loading={loading}
                  >
                    <Title level={4}>Job listings</Title>
                    <Table
                      dataSource={tableData}
                      size="small"
                      pagination={{ pageSize: 10 }}
                      className="table-striped"
                    >
                      <Column title="Title" dataIndex="title" key="title" />
                      <Column
                        title="Location"
                        dataIndex="location"
                        key="location"
                        render={(location) => (
                          <>
                            {location.map((loc: any) => (
                              <span
                                className="font-10 px-2 m-2 badge badge-light badge-pill"
                                key={loc}
                              >
                                {loc}
                              </span>
                            ))}
                          </>
                        )}
                      />
                      <Column
                        title="Contract"
                        dataIndex="contract"
                        key="contract"
                      />
                      <Column
                        title="Job Fields"
                        dataIndex="jobfields"
                        key="jobfields"
                        render={(jobfields) => (
                          <>
                            {jobfields.map((jobfield: any) => (
                              <span
                                className="font-10 px-2 m-2 badge badge-light badge-pill"
                                key={jobfield}
                              >
                                {jobfield}
                              </span>
                            ))}
                          </>
                        )}
                      />
                      <Column
                        title="Candidates"
                        dataIndex="candidates"
                        key="candidates"
                        render={(candidates) => (
                          <>
                            <span
                              className="font-10 px-2 m-2 badge badge-amber badge-pill text-white"
                              key={candidates}
                            >
                              {candidates}
                            </span>
                          </>
                        )}
                      />
                      <Column
                        title="Posted on"
                        dataIndex="createdAt"
                        key="createdAt"
                      />
                      <Column
                        title="Status"
                        dataIndex="status"
                        key="status"
                        render={(status) => (
                          <>
                            <span
                              className="font-10 px-2 m-2 badge badge-primary badge-teal text-white"
                              key={status}
                            >
                              {status}
                            </span>
                          </>
                        )}
                      />
                    </Table>
                  </Skeleton>
                </Card>
              </Fade>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ViewCompany;
