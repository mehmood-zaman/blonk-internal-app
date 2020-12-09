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

import { HttpState } from '../../../../store/http/types';
import MatchesTable from '../../Matches/partials/MatchesTable/MatchesTable';
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

const ViewJob: React.FC = () => {
  //temp for UI
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const noData = urlParams.get('data');

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
      <PageTitle title="Job information" btnActive={false} back />
      {!loading && !data ? (
        <ErrorCard />
      ) : (
        <>
          <Row justify="center" className="pb-4" gutter={16}>
            <Col span={17}>
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
                          <Col span={24}>
                            <Title
                              level={3}
                              style={{ marginBottom: '0px' }}
                              className="text-navy"
                            >
                              Trainers in Information and Communication
                              Technologies
                              <Tooltip placement="top" title="Edit summary">
                                <span
                                  className="ml-2 text-burgundy clickable-span font-18"
                                  //   onClick={() => setDisplaySummaryDrawer(true)}
                                >
                                  <i className="fas fa-edit" />
                                </span>
                              </Tooltip>
                            </Title>
                            <div className="companyConatiner pt-2 pb-4 border-bottom-grey">
                              <Avatar size={32} icon={<UserOutlined />} />

                              <span className="pl-1 font-16 font-500 text-black">
                                Blonk
                              </span>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Paragraph>
                              As an integral part of Dathena’s Sales &amp;
                              Operations Team, you are responsible for leading
                              and managing the delivery of Dathena's
                              client-facing engagements, managing the customer
                              relationship and coordinating teams across
                              Dathena, the customer and third-parties involved
                              in the implementation of our solutions. You act as
                              a trusted subject matter expert to our partners
                              and clients to ensure they realise the full value
                              of their investment in Dathena's products.
                              <div className="job-description">
                                <h5 className="py-1">Responsibilities</h5>
                                <strong>
                                  <u>
                                    1. Project management: Solutions deployment
                                    &amp; operation{' '}
                                  </u>
                                </strong>
                                <p className="pt-2">
                                  You manage the end to end deployment and
                                  ongoing operation of Dathena's projects to
                                  ensure timely delivery to the customer and
                                  smooth ongoing operations:
                                </p>
                                <ul>
                                  <li>
                                    Pre-implementation information gathering,
                                    deployment planning, interfacing with
                                    customer teams, monitoring implementation
                                    and ensuring timely delivery &amp; customer
                                    satisfaction.{' '}
                                  </li>
                                  <li>
                                    Manage &amp; coordinate delivery resources
                                    (internal team members as well as customer
                                    and third-parties such as systems
                                    integrators, professional services firms
                                    etc.)
                                  </li>
                                  <li>
                                    Ensure key client stakeholders are aligned
                                    and focused on driving Dathena’s
                                    implementation to completion
                                  </li>
                                </ul>
                                <div className="pt-2"></div>
                                <strong>
                                  <u>2. Sales &amp; account management</u>
                                </strong>
                                <p className="pt-2">
                                  Identify upsell opportunities in customer
                                  accounts:
                                </p>
                                <ul>
                                  <li>
                                    Engage with clients in “consultative
                                    selling” mode at CxO levels to determine new
                                    pain points and use cases that Dathena can
                                    address.
                                  </li>
                                  <li>
                                    Act as a trusted business matter expert in
                                    Dathena’s solutions by constantly providing
                                    effective operational guidance around our
                                    technologies to customers and partners, and
                                    encourage optimal utilisation.
                                  </li>
                                  <li>
                                    Help channel partners in their day-to-day
                                    sales activities and delivering innovative
                                    and scalable solutions to meet their
                                    business needs.
                                  </li>
                                </ul>
                                <div className="pt-2"></div>
                                <strong>
                                  <u>
                                    3. Drive Product &amp; Services Improvement
                                  </u>
                                </strong>
                                <p className="pt-2">
                                  Help improve Dathena’s products &amp; services
                                  by channelling structured feedback to the
                                  Product &amp; R&amp;D teams:
                                </p>
                                <ul>
                                  <li>
                                    Gather customer &amp; partner feedback and
                                    communicate it to Dathena’s R&amp;D &amp;
                                    Product teams to improve features &amp;
                                    products.
                                  </li>
                                  <li>
                                    Assist in prioritizing product requirements
                                    and platform improvements based on customer
                                    needs &amp; potential economic value.
                                  </li>
                                </ul>
                                <div className="pt-2"></div>
                                <h5>Desired Profile</h5>
                                <ul>
                                  <li>
                                    At least 5 years of experience in IT and/or
                                    information risk management.
                                  </li>
                                  <li>
                                    Knowledge of cybersecurity &amp; privacy a
                                    definite plus.
                                  </li>
                                  <li>
                                    Education: Bachelor's or Master’s degree
                                    with focuses on
                                    Finance/Accounting/Economics, Management
                                    Information Systems, Business
                                    Administration, Statistics Mathematics
                                    and/or other business fields of study.{' '}
                                  </li>
                                </ul>
                                <div className="pt-2"></div>
                              </div>
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
            <Col span={7}>
              <Button block type="primary" shape="round" className="mb-4">
                Manage Landing Page
              </Button>
              <IconCard
                icon="far fa-calendar-alt"
                color="primary"
                loading={false}
                label="DATE JOINED"
              >
                23 Apr 2020
              </IconCard>
              <IconCard
                icon="fas fa-map-marker-alt"
                color="teal"
                loading={false}
                label="Location"
              >
                Singapore
                <Tooltip placement="top" title="Edit summary">
                  <span
                    className="ml-2 text-burgundy clickable-span font-16"
                    //   onClick={() => setDisplaySummaryDrawer(true)}
                  >
                    <i className="fas fa-edit" />
                  </span>
                </Tooltip>
              </IconCard>
              <IconCard
                icon="fas fa-sun"
                color="amber"
                loading={false}
                label="Experience required"
              >
                2-3 years{' '}
                <Tooltip placement="top" title="Edit required experiences">
                  <span
                    className="ml-2 text-burgundy clickable-span font-16"
                    //   onClick={() => setDisplaySummaryDrawer(true)}
                  >
                    <i className="fas fa-edit" />
                  </span>
                </Tooltip>
              </IconCard>
              <Card>
                <h3 className="pb-2 border-bottom-grey">
                  Overview{' '}
                  <Tooltip placement="top" title="Edit Overview">
                    <span
                      className="ml-2 text-burgundy clickable-span font-16"
                      //   onClick={() => setDisplaySummaryDrawer(true)}
                    >
                      <i className="fas fa-edit" />
                    </span>
                  </Tooltip>
                </h3>
                <div className="job-overview">
                  <ul>
                    <li className="pb-3 text-amber">
                      <i className="far fa-lightbulb" aria-hidden="true"></i>
                      <strong className="ml-2">Skills wanted: </strong>
                      <div className="pt-2">
                        <span className="badge badge-pill badge-primary text-white px-3 py-2 mt-1 mr-1">
                          Customer Satisfaction
                        </span>

                        <span className="badge badge-pill badge-primary text-white px-3 py-2 mt-1 mr-1">
                          Sales
                        </span>

                        <span className="badge badge-pill badge-primary text-white px-3 py-2 mt-1 mr-1">
                          Business Development
                        </span>

                        <span className="badge badge-pill badge-primary text-white px-3 py-2 mt-1 mr-1">
                          English
                        </span>

                        <span className="badge badge-pill badge-primary  text-white px-3 py-2 mt-1 mr-1">
                          Entrepreneurship
                        </span>

                        <span className="badge badge-pill badge-primary text-white px-3 py-2 mt-1 mr-1">
                          Account Management
                        </span>
                      </div>
                    </li>
                    <li className="pb-3 text-amber">
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <strong className="ml-2">Lead Recruiters:</strong>
                      <div className="pt-2">
                        <span className="badge badge-pill badge-light px-3 py-2 mb-1">
                          Vincent maillard
                        </span>
                      </div>
                    </li>
                    <li className="pb-3 text-amber">
                      <i className="fa fa-users" aria-hidden="true"></i>
                      <strong className="ml-2">Recruiters:</strong>
                      <div className="pt-2">
                        <span className="badge badge-pill badge-light  px-3 py-2 mt-1 mr-1">
                          Waqas Mumtaz
                        </span>

                        <span className="badge badge-pill badge-light  px-3 py-2 mt-1 mr-1">
                          Rashid Ahmad
                        </span>

                        <span className="badge badge-pill badge-light  px-3 py-2 mt-1 mr-1">
                          Vincent maillard
                        </span>

                        <span className="badge badge-pill badge-light  px-3 py-2 mt-1 mr-1">
                          Lynn Tan
                        </span>

                        <span className="badge badge-pill badge-light  px-3 py-2 mt-1 mr-1">
                          Faisal Hussain
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card>
                <h3 className="pb-2 border-bottom-grey">
                  Contract details{' '}
                  <Tooltip placement="top" title="Edit Contract Details">
                    <span
                      className="ml-2 text-burgundy clickable-span font-16"
                      //   onClick={() => setDisplaySummaryDrawer(true)}
                    >
                      <i className="fas fa-edit" />
                    </span>
                  </Tooltip>
                </h3>
                <div className="job-overview">
                  <ul>
                    <li className="pb-3  text-amber">
                      <i className="far fa-check-square" aria-hidden="true"></i>
                      <strong className="ml-2">Job fields:</strong>
                      <div className="pt-2">
                        <span className="badge badge-pill badge-light  px-3 py-2 mt-1 mr-1">
                          Architecture
                        </span>
                        <span className="badge badge-pill badge-light  px-3 py-2 mt-1 mr-1">
                          Engineering
                        </span>
                      </div>
                    </li>
                    <li className="pb-3 text-amber">
                      <i
                        className="fas fa-clipboard-list"
                        aria-hidden="true"
                      ></i>
                      <strong className="ml-2">Contract type:</strong>
                      <div className="pt-2">
                        <span className="badge text-primary badge-pill badge-outlined-primary  px-3 py-2 mt-1 mr-1">
                          Full-time
                        </span>
                      </div>
                    </li>
                    <li className="pb-3  text-amber">
                      <i
                        className="far fa-money-bill-alt"
                        aria-hidden="true"
                      ></i>
                      <strong className="ml-2">
                        Salary package: (Hidden: <code>No</code> ):
                      </strong>
                      <div className="pt-2">
                        <span className="badge badge-pill badge-outlined-primary text-primary px-3 py-2 mt-1 mr-1">
                          ' USD 5000 - USD 10000
                        </span>
                      </div>
                    </li>
                    <li className="pb-3  text-amber">
                      <i className="fas fa-bullseye" aria-hidden="true"></i>
                      <strong className="ml-2">Target companies:</strong>
                      <div className="pt-2">
                        <span className="badge badge-pill text-primary badge-outlined-primary px-3 py-2 mt-1 mr-1">
                          Linkedin
                        </span>

                        <span className="badge badge-pill text-primary badge-outlined-primary px-3 py-2 mt-1 mr-1">
                          Monster
                        </span>

                        <span className="badge badge-pill text-primary badge-outlined-primary px-3 py-2 mt-1 mr-1">
                          Korn-Ferry
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
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
                    <Title level={4} className="mb-2">
                      Matches
                      <Button
                        className="ant-btn-amber float-right"
                        shape="round"
                      >
                        Reset Matches
                      </Button>
                    </Title>
                    <MatchesTable />
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

export default ViewJob;
