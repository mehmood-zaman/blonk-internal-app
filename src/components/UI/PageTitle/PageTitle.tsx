/* eslint-disable react/prop-types */
import React from 'react';
import './PageTitle.scss';
import { Row, Col, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ArrowLeftOutlined, HddOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface Props {
  back?: boolean;
  title: string;
  btnText?: string;
  to?: string;
  btnActive?: boolean;
  additionalBtn?: boolean;
}
const PageTitle: React.FC<Props> = (props) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="page-title-box">
      <Row justify="center" gutter={16}>
        <Col span={8}>
          {props.back && (
            <Button
              className="ant-btn-teal"
              shape="round"
              size="middle"
              icon={<ArrowLeftOutlined />}
              onClick={goBack}
            >
              Back
            </Button>
          )}
        </Col>
        <Col span={8}>
          <div className="text-center">
            <Title level={4} className="text-primary">
              {props.title}
            </Title>
            {props.children && !props.additionalBtn && (
              <h4 className="font-14 text-info">{props.children}</h4>
            )}
          </div>
        </Col>
        <Col span={8}>
          <div className="text-right">
            {props.btnActive && (
              <Link to={props.to || ''}>
                <Button className="ant-btn-teal" shape="round" size="middle">
                  {props.btnText}
                </Button>
              </Link>
            )}

            {props.additionalBtn && props.children}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PageTitle;
