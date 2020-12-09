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
        title="TOTAL JOBS"
        stats="342"
        icon="up"
        barColor="info"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="FINISHED JOBS"
        stats="342"
        icon="up"
        barColor="success"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="RUNNING JOBS"
        stats="342"
        icon="up"
        barColor="primary"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="PENDING JOBS"
        stats="342"
        icon="up"
        barColor="amber"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="CANCELLED JOBS"
        stats="342"
        icon="up"
        barColor="danger"
        barWidth={60}
      />
      <DataBarItem
        size={4}
        title="FETCHED CRAWLIES"
        stats="342"
        icon="up"
        barColor="primary"
        barWidth={60}
      />
    </DataBar>
  );
};

export default JobsAnalytics;
