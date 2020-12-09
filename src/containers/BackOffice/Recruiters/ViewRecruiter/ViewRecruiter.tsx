import React, { useState } from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';

import PageTitle from '../../../../components/UI/PageTitle/PageTitle';
import {
  Row,
  Col,
  Card,
  Alert,
  Avatar,
  Typography,
  Timeline,
  List,
  Skeleton,
  Tooltip,
  Button,
} from 'antd';
import { UserOutlined, PlusOutlined, LockOutlined } from '@ant-design/icons';
import { Fade } from 'react-awesome-reveal';
import IconCard from '../../../../components/UI/IconCard/IconCard';
import SummaryFormDrawer from '../partials/SummaryFormDrawer';
import GeneralFormDrawer from '../partials/GeneralFormDrawer';
import EducationDrawer from '../partials/EducationDrawer';
import ExperienceDrawer from '../partials/ExperienceDrawer';
import ActivityLogDrawer from '../partials/ActivityLogDrawer';
import ResetPasswordFormDrawer from '../partials/ResetPasswordFormDrawer';
const { Title, Text, Paragraph } = Typography;

interface ViewRecruiterProps {}

const ViewRecruiter: React.FC<ViewRecruiterProps> = () => {
  //temp for UI
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const data = urlParams.get('data');

  const [displaySummaryDrawer, setDisplaySummaryDrawer] = useState(false);
  const [displayGeneralDrawer, setDisplayGeneralDrawer] = useState(false);
  const [displayEducationDrawer, setDisplayEducationDrawer] = useState(false);
  const [displayExperienceDrawer, setDisplayExperienceDrawer] = useState(false);
  const [displayActivityDrawer, setDisplayActivityDrawer] = useState(false);
  const [displayResetPasswordDrawer, setDisplayResetPasswordDrawer] = useState(
    false
  );

  return (
    <>
      <PageTitle title="Recruiter information" btnActive={false} back />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col md={6} lg={6} xl={6}>
          <Card>
            <Tooltip placement="top" title="Edit photo">
              <span
                className="ml-2 text-burgundy font-18"
                style={{ position: 'absolute', right: '3rem' }}
              >
                <i className="fas fa-edit" />
              </span>
            </Tooltip>
            <Avatar
              className="user-profile-avatar"
              size={64}
              icon={<UserOutlined />}
            />

            <Title className="m-t-10 user-avatar-title" level={4}>
              Bella Godfray
              <Tooltip placement="top" title="Edit General Info">
                <span
                  className="ml-2 text-burgundy font-16"
                  onClick={() => setDisplayGeneralDrawer(true)}
                >
                  <i className="fas fa-edit" />
                </span>
              </Tooltip>
            </Title>
            <Paragraph className="text-amber text-center mb-0">
              Recruiting Manager
            </Paragraph>
            <Paragraph className="text-center mb-0">
              bella@mailinator.com
            </Paragraph>
            {!data && (
              <ul className="social-icons-list">
                <li>
                  <Link to="#" className="icon-facebook">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="icon-twitter">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="icon-website">
                    <i className="fab fa-link" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="icon-linkedin">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
              </ul>
            )}
            <Button
              type="dashed"
              onClick={() => setDisplayResetPasswordDrawer(true)}
              block
            >
              <LockOutlined /> Reset password
            </Button>
          </Card>
          <Row>
            <Col span={12}>
              <Typography.Title level={4} className="mt-2 mb-3 header-title">
                Communities
              </Typography.Title>
            </Col>
          </Row>
          {data && data === '0' ? (
            <p className="text-muted">No community joined.</p>
          ) : (
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
                      loading={false}
                      active
                      avatar
                      paragraph={{ rows: 1 }}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                        }
                        title={
                          <Link to={`recruiters/123451`}>{item.name}</Link>
                        }
                        description={item.email}
                      />
                    </Skeleton>
                  </List.Item>
                )}
              />
            </Card>
          )}
        </Col>
        <Col span={12}>
          <Card>
            <div className="summary mt-2 mb-4 pb-4">
              <Title level={4} className="mt-0 mb-4 text-teal header-title">
                Summary
                {!data && (
                  <Tooltip placement="top" title="Edit summary">
                    <span
                      className="ml-2 text-burgundy clickable-span"
                      onClick={() => setDisplaySummaryDrawer(true)}
                    >
                      <i className="fas fa-edit" />
                    </span>
                  </Tooltip>
                )}
              </Title>
              {data && data === '0' ? (
                <Button
                  type="dashed"
                  onClick={() => setDisplaySummaryDrawer(true)}
                  block
                >
                  <PlusOutlined /> Add summary
                </Button>
              ) : (
                <Paragraph>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Paragraph>
              )}
            </div>
            <div className="education-history mb-4 pb-4">
              <Title className="mt-0 mb-4 text-teal header-title" level={4}>
                Education
                {!data && (
                  <Tooltip placement="top" title="Add education">
                    <span
                      className="ml-2 text-burgundy clickable-span"
                      onClick={() => setDisplayEducationDrawer(true)}
                    >
                      <i className="far fa-plus-square" />
                    </span>
                  </Tooltip>
                )}
              </Title>
              {data && data === '0' ? (
                <Button
                  type="dashed"
                  onClick={() => setDisplayEducationDrawer(true)}
                  block
                >
                  <PlusOutlined /> Add education
                </Button>
              ) : (
                <Timeline className="activity-feed">
                  <Timeline.Item className="feed-item">
                    <div className="feed-item-list">
                      <span className="date text-amber">2016 - 2019</span>
                      <span className="activity-text font-16 text-navy">
                        MS Computer Science
                        <Tooltip placement="top" title="Edit education">
                          <span
                            className="ml-2 text-burgundy font-14 clickable-span"
                            onClick={() => setDisplayEducationDrawer(true)}
                          >
                            <i className="fas fa-edit" />
                          </span>
                        </Tooltip>
                      </span>
                      <p className="inbox-item-text text-burgundy mb-0">
                        IBM, Karachi, Pakistan
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item className="feed-item">
                    <div className="feed-item-list">
                      <span className="date text-amber">2016 - 2019</span>
                      <span className="activity-text font-16 text-navy">
                        MS Computer Science
                        <Tooltip placement="top" title="Edit education">
                          <span
                            className="ml-2 text-burgundy font-14 clickable-span"
                            onClick={() => setDisplayEducationDrawer(true)}
                          >
                            <i className="fas fa-edit" />
                          </span>
                        </Tooltip>
                      </span>
                      <p className="inbox-item-text text-burgundy mb-0">
                        IBM, Karachi, Pakistan
                      </p>
                    </div>
                  </Timeline.Item>
                </Timeline>
              )}
            </div>
            <div className="work-history mb-4 pb-4">
              <Title className="mt-0 mb-4 text-teal header-title" level={4}>
                Experience
                {!data && (
                  <Tooltip placement="top" title="Add experience">
                    <span
                      className="ml-2 text-burgundy clickable-span"
                      onClick={() => setDisplayExperienceDrawer(true)}
                    >
                      <i className="far fa-plus-sqaure" />
                    </span>
                  </Tooltip>
                )}
              </Title>
              {data && data === '0' ? (
                <Button
                  type="dashed"
                  onClick={() => setDisplayExperienceDrawer(true)}
                  block
                >
                  <PlusOutlined /> Add experience
                </Button>
              ) : (
                <Timeline className="activity-feed">
                  <Timeline.Item className="feed-item">
                    <div className="feed-item-list">
                      <span className="date">2016 - 2019</span>
                      <span className="activity-text font-16 text-navy">
                        UI/UX Designer
                        <Tooltip placement="top" title="Edit experience">
                          <span
                            className="ml-2 text-burgundy font-14 clickable-span"
                            onClick={() => setDisplayExperienceDrawer(true)}
                          >
                            <i className="fas fa-edit" />
                          </span>
                        </Tooltip>
                      </span>
                      <p className="inbox-item-text text-burgundy mb-0">
                        Salsoft, Karachi, Pakistan
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item className="feed-item">
                    <div className="feed-item-list">
                      <span className="date">2016 - 2019</span>
                      <span className="activity-text font-16 text-navy">
                        Frontend Developer
                        <Tooltip placement="top" title="Edit experience">
                          <span
                            className="ml-2 text-burgundy font-14 clickable-span"
                            onClick={() => setDisplayExperienceDrawer(true)}
                          >
                            <i className="fas fa-edit" />
                          </span>
                        </Tooltip>
                      </span>
                      <p className="inbox-item-text text-burgundy mb-0">
                        Softech, Karachi, Pakistan
                      </p>
                    </div>
                  </Timeline.Item>
                </Timeline>
              )}
            </div>

            <div className="profile-video mb-4 pb-4">
              <Title className="mt-0 text-teal header-title" level={4}>
                My Profile Video
              </Title>
              {data && data === '0' ? (
                <Button type="dashed" block>
                  <PlusOutlined /> Add profile video
                </Button>
              ) : (
                <iframe
                  width="100%"
                  className="card-img-bottom img-fluid"
                  height="315"
                  src="https://www.youtube.com/embed/oin20snrMkA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              )}
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <IconCard
            icon="far fa-calendar-alt"
            color="teal"
            loading={false}
            label="DATE JOINED"
          >
            23 Apr 2020
          </IconCard>
          <IconCard
            icon="mdi mdi-bank"
            color="primary"
            loading={false}
            label="Companies JOINED"
          >
            <span className="clickable-span">
              {data && data === '0' ? 0 : 2}
            </span>
          </IconCard>
          <IconCard
            icon="ti-briefcase"
            color="amber"
            loading={false}
            label="Jobs"
          >
            <span className="clickable-span">
              {data && data === '0' ? 0 : 12}
            </span>
          </IconCard>
          {!data && (
            <Card className="mb-4">
              <Title
                level={4}
                className="pb-2 card-title header-title font-16 mt-2 text-teal border-bottom-grey"
              >
                Activity log
              </Title>

              <Row gutter={0} className="border-bottom-dashed pb-2 mb-2">
                <Col
                  span={4}
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                  }}
                >
                  <span className="icon-wrapper-sm icon-bg-burgundy">
                    <i className="mdi mdi-close text-burgundy font-16" />
                  </span>
                </Col>
                <Col span={20} style={{ alignSelf: 'center' }} className="pl-2">
                  <Typography.Paragraph className="mt-0 mb-0 font-12" strong>
                    Bella disliked Bella John
                  </Typography.Paragraph>
                  <Typography.Paragraph className="mb-0 font-12 text-muted font-weight-semibold-alt">
                    02 April 2020 | 02:13 PM
                  </Typography.Paragraph>
                </Col>
              </Row>

              <Row gutter={0} className="border-bottom-dashed pb-2 mb-2">
                <Col
                  span={4}
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                  }}
                >
                  <span className="icon-wrapper-sm icon-bg-teal">
                    <i className="mdi mdi-check text-teal font-16" />
                  </span>
                </Col>
                <Col span={20} style={{ alignSelf: 'center' }} className="pl-2">
                  <Typography.Paragraph className="mt-0 mb-0 font-12" strong>
                    Bella liked John Doe
                  </Typography.Paragraph>
                  <Typography.Paragraph className="mb-0 font-12 text-muted font-weight-semibold-alt">
                    02 April 2020 | 02:13 PM
                  </Typography.Paragraph>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <div className="text-center mt-4">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="ant-btn-teal"
                      shape="round"
                      size="middle"
                      onClick={() => setDisplayActivityDrawer(true)}
                    >
                      View all
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card>
          )}
        </Col>
      </Row>
      <SummaryFormDrawer
        show={displaySummaryDrawer}
        hide={() => setDisplaySummaryDrawer(false)}
      />
      <GeneralFormDrawer
        show={displayGeneralDrawer}
        hide={() => setDisplayGeneralDrawer(false)}
      />
      <EducationDrawer
        show={displayEducationDrawer}
        hide={() => setDisplayEducationDrawer(false)}
      />
      <ExperienceDrawer
        show={displayExperienceDrawer}
        hide={() => setDisplayExperienceDrawer(false)}
      />
      <ActivityLogDrawer
        show={displayActivityDrawer}
        hide={() => setDisplayActivityDrawer(false)}
      />
      <ResetPasswordFormDrawer
        show={displayResetPasswordDrawer}
        hide={() => setDisplayResetPasswordDrawer(false)}
      />
    </>
  );
};

export default ViewRecruiter;
