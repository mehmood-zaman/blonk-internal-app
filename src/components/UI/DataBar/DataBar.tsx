import React from 'react';
import { Row, Col, Card } from 'antd';

interface DataBarProps {}

export const DataBar: React.FC<DataBarProps> = (props) => {
  return (
    <Row>
      <Col span={24}>
        <Card>
          <Row gutter={16}>{props.children}</Row>
        </Card>
      </Col>
    </Row>
  );
};

interface DataBarItemProps {
  size: number;
  title: string;
  stats: string;
  icon?: string;
  extraStats?: string;
  barColor: string;
  barWidth: number;
}

export const DataBarItem: React.FC<DataBarItemProps> = (props) => {
  return (
    <Col span={props.size}>
      <div className="ds-stat">
        <span className="ds-stat-name">{props.title}</span>
        <h3 className="ds-stat-number">
          {props.stats}
          {props.extraStats && (
            <span className="ds-stat-percent">
              <i className={`fas fa-caret-${props.icon}`}></i>
              {props.extraStats}
            </span>
          )}
        </h3>
        <div className="progress" style={{ height: '3px' }}>
          <div
            className={`progress-bar bg-${props.barColor}`}
            role="progressbar"
            style={{ width: `${props.barWidth}%` }}
          ></div>
        </div>
      </div>
    </Col>
  );
};
