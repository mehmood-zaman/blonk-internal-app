import React from 'react';
import JobsNumbers from './JobsAnalytics/JobsAnalytics';
import ScheduleJob from './Schedule Crawling Job/ScheduleCrawlingJob';
import JobStatus from './Jobs Status/JobStatus';

const Analytics: React.FC = () => {
  return (
    <>
      <ScheduleJob />
      <JobsNumbers />
      <JobStatus />
    </>
  );
};

export default Analytics;
