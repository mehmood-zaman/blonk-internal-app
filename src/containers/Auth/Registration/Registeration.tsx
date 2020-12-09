import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HttpState } from '../../../store/http/types';
import { AuthState } from '../../../store/auth/types';
import { register } from '../../../store/http/actions';
import { Redirect } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

import RegistrationForm from './partials/RegistrationForm';
import RegistrationSuccess from './partials/RegistrationSuccess';
import Logo from '../../../components/UI/Logo/Logo';
import Footer from '../../../components/Common/Footer/Footer';

const Registration: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.accessToken !== null
  );

  const fetchData: any = useSelector((state: HttpState) => state.http.data);
  const dispatch = useDispatch();

  const onFinishHandler = (values: any) => {
    dispatch(
      register(
        values.fullName,
        values.emailAddress,
        values.password,
        values.title
      )
    );
  };

  return (
    <>
      {isAuthenticated && <Redirect to="/" />}
      <div>
        <div className="wrapper">
          <div className="pb-3">
            <h3 className="text-center m-t-40">
              <Logo height="40" />
            </h3>
          </div>
          <Row justify="center">
            <Col span={12}>
              <Card>
                <div className="pb-4">
                  <div className="p-3">
                    {fetchData && fetchData.success ? (
                      <RegistrationSuccess
                        message={fetchData.message}
                        // username={fetchData.userData.fullName}
                        username={fetchData.message}
                      />
                    ) : (
                      <RegistrationForm onFinish={onFinishHandler} />
                    )}
                  </div>
                </div>
                <Footer footer={false} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Registration;
