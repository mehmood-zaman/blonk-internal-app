import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RecoverPasswordForm from './partials/RecoverPasswordForm';
import RecoveryCodeForm from './partials/RecoveryCodeForm';
import ResetPasswordForm from './partials/ResetPasswordForm';
import ResetPasswordSuccess from './partials/ResetPasswordSuccess';

import Logo from '../../../components/UI/Logo/Logo';
import Footer from '../../../components/Common/Footer/Footer';

import { Card, Row, Col, Affix } from 'antd';
import { AuthState } from '../../../store/auth/types';
import { HttpState } from '../../../store/http/types';

const RecoverPassword: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.accessToken !== null
  );

  const [resetSuccess, setResetSuccess] = useState(false);
  const [manageScreen, setManageScreen] = useState(
    localStorage.getItem('fpsDisplay')
  );

  const { data, error, loading }: any = useSelector(
    (state: HttpState) => state.http
  );
  const authRedirectPath = useSelector(
    (state: AuthState) => state.auth.authRedirectPath
  );

  const dispatch = useDispatch();

  const onRecoverPasswordHandler = (values: any) => {
    localStorage.setItem('fpsDisplay', 'recoveryCode');
    setManageScreen(localStorage.getItem('fpsDisplay'));
  };

  const onValidateCodeHandler = (values: any) => {
    // dispatch(actions.recover(values.emailAddress));
    localStorage.setItem('fpsDisplay', 'resetPassword');
    setManageScreen(localStorage.getItem('fpsDisplay'));
  };

  const onResetPasswordHandler = (values: any) => {
    setResetSuccess(true);
    localStorage.removeItem('fpsDisplay');
  };

  let dispayData = <RecoverPasswordForm onFinish={onRecoverPasswordHandler} />;

  if (manageScreen === 'recoveryCode') {
    dispayData = <RecoveryCodeForm onFinish={onValidateCodeHandler} />;
  }

  if (manageScreen === 'resetPassword') {
    dispayData = resetSuccess ? (
      <ResetPasswordSuccess />
    ) : (
      <ResetPasswordForm onFinish={onResetPasswordHandler} />
    );
  }

  return (
    <>
      {isAuthenticated && <Redirect to={authRedirectPath} />}
      <div>
        <div className="wrapper">
          <div className="pb-3">
            <h3 className="text-center m-t-40">
              <Logo height="40" />
            </h3>
          </div>
          <Row justify="center">
            <Col span={8}>
              <Card>
                <div className="pb-4">
                  <div className="p-3">
                    {dispayData}
                    {/* {fetchData && fetchData.success ? (
                      <RegistrationSuccess
                        message={fetchData.message}
                        username={fetchData.userData.fullName}
                      />
                    ) : (
                      <RecoverPasswordForm onFinish={onFinishHandler} />
                    )} */}
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

export default RecoverPassword;
