import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HttpState } from '../../../../store/http/types';

import { Row, Col, Card, Input, Select, Steps } from 'antd';
import PageTitle from '../../../../components/UI/PageTitle/PageTitle';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';

const { Step } = Steps;

interface Props {}

const AddJob: React.FC<Props> = () => {
  const [currentStep, setCurrentStep] = useState(0);

  let DisplayForm = <StepOne next={() => setCurrentStep(currentStep + 1)} />;
  if (currentStep === 1) {
    DisplayForm = (
      <StepTwo
        next={() => setCurrentStep(currentStep + 1)}
        back={() => setCurrentStep(currentStep - 1)}
      />
    );
  }
  if (currentStep === 2) {
    DisplayForm = (
      <StepThree
        next={() => setCurrentStep(currentStep + 1)}
        back={() => setCurrentStep(currentStep - 1)}
      />
    );
  }
  if (currentStep === 3) {
    DisplayForm = (
      <StepFour
        next={() => setCurrentStep(currentStep + 1)}
        back={() => setCurrentStep(currentStep - 1)}
      />
    );
  }
  return (
    <>
      <PageTitle title="Post a job" back />
      <Row justify="center" gutter={16}>
        <Col span={20}>
          <Card>
            <Steps size="small" current={currentStep}>
              <Step title="General Information" />
              <Step title="Add recruiters" />
              <Step title="Job Overview" />
              <Step title="Conrtact details" />
            </Steps>
          </Card>
        </Col>
      </Row>
      <Row justify="center" gutter={16}>
        <Col span={20}>
          <Card className="mb-4">{DisplayForm}</Card>
        </Col>
      </Row>
    </>
  );
};

export default AddJob;
