import React from 'react';
import PageTitle from '../../../components/UI/PageTitle/PageTitle';

const BlankPage: React.FC = () => {
  return (
    <>
      <PageTitle back title="blank page" btnText="edit" to="/edit-blank" />
    </>
  );
};

export default BlankPage;
