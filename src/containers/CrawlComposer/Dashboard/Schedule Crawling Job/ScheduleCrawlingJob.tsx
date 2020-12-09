import React from 'react';
import Modal from 'components/UI/Modal/Modal';
import ScheduleCrawlingForm from './ScheduleForm/ScheduleForm';
import { Typography } from 'antd';
import './scheduleCrawling.scss';

const { Title } = Typography;

const Analytics: React.FC = () => {
  const onOK = () => {
    console.log('Helllo');
  };
  return (
    <div className="schedule_crawling">
      <Title level={4} className="text-primary">
        Crawling dashboard
      </Title>
      <Modal
        onOK={onOK}
        ModalTytle="Schedule a crawling job"
        headerTitle="Schedule a crawling job"
        titleType="button"
        titleBtnClass="ant-btn ant-btn-teal ant-btn-round"
        title="Schedule a crawling job"
        width={800}
      >
        {' '}
        <ScheduleCrawlingForm />
      </Modal>
    </div>
  );
};

export default Analytics;
