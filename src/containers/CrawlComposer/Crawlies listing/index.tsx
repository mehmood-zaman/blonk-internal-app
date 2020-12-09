import React from 'react';
import { CrawliesFilter } from './Filter crawlies/Filter crawlies';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import { BulkActions } from './Bulk Actions/BulkAction';
import { Badge } from 'antd';
import Table from 'components/UI/Table/index';
const CrawliesListing: React.FC = () => {
  const dataSource = [
    {
      key: '1',
      name: (
        <h4 style={{ color: '#2e4a79' }}>
          React Native developers from Singapore
        </h4>
      ),
      title: 'Node js | React js',
      company: 'Blonk',
      email: 'blonk@co',
      location: 'Paris',
      request: 1,
      error: 0,
      runtime: '0:00:23',
      started: 'October 7th 2020, 1:24:01 pm',
      socialMedia: 'Facebook',
      skills: (
        <Badge
          style={{ background: '#dcdcdc', color: '#313131' }}
          count={'Marketing'}
        />
      ),
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filter: 'search',
    },
    {
      title: 'Title/Bio',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Social Media',
      dataIndex: 'socialMedia',
      key: 'socialMedia',
    },
    {
      title: 'Skills',
      dataIndex: 'skills',
      key: 'skills',
    },
    {
      title: 'Creation Date',
      dataIndex: 'started',
      key: 'started',
      filter: 'search',
    },
  ];
  return (
    <>
      <PageTitle
        back
        title="Crawlies listing"
        btnText="Add recruiter"
        btnActive={false}
      />
      <CrawliesFilter />
      <br />
      <BulkActions />
      <br />
      <Table
        size="small"
        rowSelect={true}
        className="table-striped"
        data={dataSource}
        columns={columns}
      />
    </>
  );
};

export default CrawliesListing;
