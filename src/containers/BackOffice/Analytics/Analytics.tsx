import React from 'react';
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
  Progress,
} from 'antd';
import StatsCard from '../../../components/UI/StatsCard/StatsCard';
import { DataBar, DataBarItem } from '../../../components/UI/DataBar/DataBar';
import IconCard from '../../../components/UI/IconCard/IconCard';

const { Title } = Typography;
const Analytics: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="page-title-box">
            <h4 className="dashbaord-title">Backoffice</h4>
            <ol className="dashbaord-breadcrumb">
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={6}>
          <StatsCard
            color="teal"
            icon="far fa-building"
            title="Companies"
            stats={17}
            extraStats="11%"
            badge="danger"
            extraInfo="+11%From previous period"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            color="teal"
            icon="far fa-building"
            title="Companies"
            stats={17}
            extraStats="11%"
            badge="danger"
            extraInfo="+11%From previous period"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            color="teal"
            icon="far fa-building"
            title="Companies"
            stats={17}
            extraStats="11%"
            badge="danger"
            extraInfo="+11%From previous period"
          />
        </Col>
        <Col span={6}>
          <StatsCard
            color="teal"
            icon="far fa-building"
            title="Companies"
            stats={17}
            extraStats="11%"
            badge="danger"
            extraInfo="+11%From previous period"
          />
        </Col>
      </Row>
      <DataBar>
        <DataBarItem
          size={4}
          title="Total Candidates"
          stats="342"
          icon="up"
          extraStats="34%"
          barColor="amber"
          barWidth={60}
        />
        <DataBarItem
          size={4}
          title="Total Candidates"
          stats="342"
          icon="up"
          extraStats="34%"
          barColor="amber"
          barWidth={60}
        />
        <DataBarItem
          size={4}
          title="Total Candidates"
          stats="342"
          icon="up"
          extraStats="34%"
          barColor="amber"
          barWidth={60}
        />
        <DataBarItem
          size={4}
          title="Total Candidates"
          stats="342"
          icon="up"
          extraStats="34%"
          barColor="amber"
          barWidth={60}
        />
        <DataBarItem
          size={4}
          title="Total Candidates"
          stats="342"
          icon="up"
          extraStats="34%"
          barColor="amber"
          barWidth={60}
        />
        <DataBarItem
          size={4}
          title="Total Candidates"
          stats="342"
          icon="up"
          extraStats="34%"
          barColor="amber"
          barWidth={60}
        />
      </DataBar>
      <Row gutter={12}>
        <Col span={6}>
          <IconCard
            icon="fas fa-sun"
            color="amber"
            loading={false}
            label="Campaings"
          >
            123
          </IconCard>
        </Col>
        <Col span={6}>
          <IconCard
            icon="fas fa-sun"
            color="amber"
            loading={false}
            label="Campaings"
          >
            123
          </IconCard>
        </Col>
        <Col span={6}>
          <IconCard
            icon="fas fa-sun"
            color="amber"
            loading={false}
            label="Campaings"
          >
            123
          </IconCard>
        </Col>
        <Col span={6}>
          <IconCard
            icon="fas fa-sun"
            color="amber"
            loading={false}
            label="Campaings"
          >
            123
          </IconCard>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card>
            <Row justify="center" gutter={12}>
              <Col span={6}>
                <div className="text-center">
                  <Title level={4} className="text-primary">
                    Time to hire (days)
                  </Title>
                  <Progress type="circle" percent={75} />
                </div>
              </Col>
              <Col span={6}>
                <div className="text-center">
                  <Title level={4} className="text-primary">
                    Avg time spent
                  </Title>
                  <Progress
                    type="circle"
                    percent={45}
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                  />
                </div>
              </Col>
              <Col span={6}>
                <div className="text-center">
                  <Title level={4} className="text-primary">
                    Avg time spent
                  </Title>
                  <Progress percent={50} status="active" />
                  <Progress percent={30} status="active" />
                  <Progress percent={90} status="active" />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Analytics;
