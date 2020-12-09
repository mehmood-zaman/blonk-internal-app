import React from 'react';
import { Card, Row, Col, Typography, Skeleton } from 'antd';

const { Title } = Typography;

interface Props {
  icon: string;
  color: string;
  label: string;
  loading: boolean;
}
const IconCard: React.FC<Props> = (props) => {
  const iconWrapper = `icon-wrapper icon-bg-${props.color}`;
  const icon = `${props.icon} text-${props.color} font-24 `;
  return (
    <>
      <Card className="mb-3 icon-card">
        <Skeleton active loading={props.loading} avatar>
          <Row justify="center" gutter={16}>
            <Col className="align-self-center text-center" span={8}>
              <span className={iconWrapper}>
                <i className={icon}></i>
              </span>
            </Col>
            <Col span={16} className="align-self-center">
              <Title level={4} className="mt-0 mb-1 text-primary">
                {props.children}
              </Title>
              <p className="mb-0 font-12 text-muted text-uppercase font-weight-semibold-alt">
                {props.label}
              </p>
            </Col>
          </Row>
        </Skeleton>
      </Card>
    </>
  );
};

export default IconCard;
