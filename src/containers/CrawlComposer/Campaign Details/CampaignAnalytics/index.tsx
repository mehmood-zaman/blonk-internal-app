import React from 'react';
import {
  DataBar,
  DataBarItem,
} from '../../../../components/UI/DataBar/DataBar';

const JobsAnalytics: React.FC = () => {
  return (
    <DataBar>
      <DataBarItem
        size={4}
        title="CRAWLIES SOURCE"
        stats="LinkedIn"
        icon="up"
        barColor="info"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="TOTAL CRAWLIES"
        stats="1856"
        icon="up"
        barColor="success"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="ASSIGNED COMPANIES"
        stats="21"
        icon="up"
        barColor="primary"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="TOTAL CAMPAIGNS"
        stats="7"
        icon="up"
        barColor="amber"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="FAILED CAMPAIGNS"
        stats="342"
        icon="up"
        barColor="danger"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="CREATED"
        stats="12 June"
        icon="up"
        barColor="primary"
        barWidth={60}
      />
    </DataBar>
  );
};

export default JobsAnalytics;
