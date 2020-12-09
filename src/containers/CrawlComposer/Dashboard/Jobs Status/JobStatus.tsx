import React from 'react';
import { RunningJobs } from './Running Jobs/RunningJobs';
import { PendingJobs } from './Pending Jobs/PendingJobs';
import { CompletedJobs } from './Completed Jobs/CompletedJobs';
interface Props {
  title?: string;
}

const JobStatus: React.FC<Props> = () => {
  return (
    <div>
      <PendingJobs />
      <br />
      <RunningJobs />
      <br />
      <CompletedJobs />
      <br />
    </div>
  );
};

export default JobStatus;
