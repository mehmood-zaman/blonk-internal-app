import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HttpState } from '../../store/http/types';
import { activate } from '../../store/http/actions';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthState } from '../../store/auth/types';
import { Row, Col, Card, Button, Typography, Space, message } from 'antd';

import {
  LoadingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const Activation: React.FC = () => {
  let { activationCode } = useParams();
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.accessToken !== null
  );
  const { data, error, loading }: any = useSelector(
    (state: HttpState) => state.http
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (activationCode) {
      dispatch(activate(activationCode));
    }
  }, []);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  let errorMessage = (
    <>
      <div className="py-4">
        <CloseCircleOutlined
          style={{ fontSize: 52 }}
          className="text-burgundy"
        />
      </div>
      <Title level={3} className="text-navy">
        Sorry, Your account isn't Verified
      </Title>
      <Space>
        <p className="text-muted m-b-30 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi
          voluptatem accusantium.
        </p>
      </Space>

      <div className="button-items">
        <Button
          // type="amber"
          type="primary"
          shape="round"
          size="middle"
          href="mailto:hello@blonk.co"
          target="_blank"
        >
          Contact Blonk
        </Button>
      </div>
    </>
  );

  if (!activationCode) {
    errorMessage = (
      <>
        <div className="py-4">
          <ExclamationCircleOutlined
            style={{ fontSize: 52 }}
            className="text-amber"
          />
        </div>
        <Title level={3} className="text-navy">
          Activation Code is Missing
        </Title>
        <Space>
          <p className="text-muted m-b-30 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
            commodi voluptatem accusantium.
          </p>
        </Space>
      </>
    );
  }

  return (
    <>
      {isAuthenticated && <Redirect to="/" />}
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={10}>
          <Card className="text-center" bordered={false}>
            {!loading ? (
              data && data.accountActivated ? (
                <>
                  <div className="py-4">
                    <CheckCircleOutlined
                      style={{ fontSize: 52 }}
                      className="text-teal"
                    />
                  </div>
                  <Title level={3} className="text-navy">
                    Thanks for Verifying your account
                  </Title>
                  <Space>
                    <p className="text-muted m-b-30 ">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, commodi voluptatem accusantium .
                    </p>
                  </Space>

                  <div className="button-items">
                    <Link to="/login">
                      <Button
                        //  type="amber"
                        type="primary"
                        shape="round"
                        size="middle"
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                </>
              ) : (
                errorMessage
              )
            ) : (
              <div>
                <div className="py-4">
                  <LoadingOutlined
                    style={{ fontSize: 32 }}
                    className="text-amber"
                    spin
                  />
                </div>
                <Title level={3} className="text-navy">
                  Verifying your account!
                </Title>
                <Space>
                  <p className="text-muted m-b-30 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, commodi voluptatem accusantium ipsa itaque deserunt,
                    aperiam eum magnam dolorum nemo sunt, aspernatur maiores.
                    Tempora facilis aut fuga dolores sit ipsam.
                  </p>
                </Space>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Activation;
