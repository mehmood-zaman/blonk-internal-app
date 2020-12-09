import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;
interface StatsCardProps {
  color: string;
  icon: string;
  title: string;
  stats: number;
  extraStats?: string;
  badge?: string;
  extraInfo?: string;
}

const StatsCard: React.FC<StatsCardProps> = (props) => {
  return (
    <Card className={`mini-stats bg-${props.color} bg-img`}>
      <div className="mini-stat-icon">
        <i className={`${props.icon} float-right`}></i>
      </div>
      <div className="text-white">
        <Title level={4} className="text-white text-uppercase font-16">
          {props.title}
        </Title>
        <Title level={4} className="text-white text-uppercase mb-2 m-0 p-0">
          {props.stats}
        </Title>
        {props.extraStats && (
          <span className={`badge badge-${props.badge}`}>
            {props.extraStats}
          </span>
        )}
        {props.extraInfo && <span className="ml-2">{props.extraInfo}</span>}
      </div>
    </Card>
  );
};

export default StatsCard;
