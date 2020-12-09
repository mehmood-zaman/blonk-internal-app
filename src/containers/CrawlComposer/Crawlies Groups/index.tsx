import React from 'react';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import { Card } from 'antd';

import CrawliesGroupTable from './CrawliesGroupTable';

const CrawliesListing: React.FC = () => {
  return (
    <>
      <PageTitle
        back
        title="Crawlies Groups"
        btnText="Add recruiter"
        btnActive={false}
      />
      <Card>
        <CrawliesGroupTable />
      </Card>
    </>
  );
};

export default CrawliesListing;
