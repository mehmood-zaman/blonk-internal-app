import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from '../../store/auth/types';
import { auth } from '../../store/auth/actions';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../components/UI/Logo/Logo';
import Footer from '../../components/Common/Footer/Footer';
// import Reveal from 'react-reveal/Reveal';
import {
  Card,
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  notification,
} from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useLoginMutation } from '../../graphql/generated/graphql';

interface Rememered {
  email: string;
  password: string;
}
const Login = () => {
  //error state to control form
  const [hasError, setHasError] = useState(false);
  const [login] = useLoginMutation();

  let remembered = JSON.parse(localStorage.getItem('remember') || '{}');

  //check authentication
  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.accessToken !== null
  );
  const { error, loading, authRedirectPath } = useSelector(
    (state: AuthState) => state.auth
  );

  // http actions
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setHasError(true);
      notification['error']({
        message: 'Unable to Login',
        description: error,
        duration: 3,
        onClose: () => setHasError(false),
      });
    }
  }, [error]);

  //on submit login form

  const onFinish = async (values: any) => {
    if (values.remember) {
      const rememberMe = {
        email: values.emailAddress,
        password: values.password,
      };
      localStorage.setItem('remember', JSON.stringify(rememberMe));
    }

    // const response: any = await login({
    //   variables: {
    //     email: values.emailAddress,
    //     password: values.password,
    //   },
    // });

    // console.log('login response', response);

    // if (response && response.data) {
    //   setAccessToken(response.data.login.accessToken);
    //   dispatch(auth(values.emailAddress, values.password));

    // }

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWYzM2VkYTYyMmIzNDYyZmI2YjI5NSIsImlhdCI6MTU5Mjk5MzIwMH0.IEqZmbTZUHyI6ep4b5dV5DWYQq3WU9tN2TpgDCQpXOM';
    const fullName = 'Waqas Mumtaz';
    dispatch(auth(token, fullName));
  };

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
            <Col span={10}>
              <Card>
                <div className="py-3">
                  <div className="pb-4">
                    <p className="text-muted text-center pt-0 mtp0">
                      Don't have an account ?{' '}
                      <Link to="register" className="text-primary">
                        Register Now
                      </Link>
                    </p>
                    <Form
                      name="normal_login"
                      className="login-form pt-3"
                      layout="vertical"
                      onFieldsChange={() => setHasError(false)}
                      initialValues={{
                        remember: true,
                        emailAddress: remembered && remembered.email,
                        password: remembered && remembered.password,
                      }}
                      onFinish={onFinish}
                    >
                      <Form.Item
                        name="emailAddress"
                        label="Email Address"
                        rules={[
                          {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                          {
                            required: true,
                            message: 'Please input your E-mail!',
                          },
                        ]}
                      >
                        <Input
                          prefix={<i className="far fa-envelope font-14" />}
                          placeholder="Email address"
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Password!',
                          },
                          {
                            whitespace: true,
                            message: 'No whitespace allowed',
                          },
                          {
                            min: 4,
                            message: 'Please input your valid Password!',
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Form.Item
                          name="remember"
                          valuePropName="checked"
                          noStyle
                        >
                          <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                      </Form.Item>

                      <Form.Item>
                        <div className="text-center">
                          <Button
                            // type="amber"
                            type="primary"
                            htmlType="submit"
                            shape="round"
                            // disabled={error}
                            loading={loading}
                          >
                            Log in
                          </Button>
                        </div>
                      </Form.Item>
                    </Form>
                  </div>
                  <Link to="recover-password" className="text-muted m-t-30">
                    <i className="mdi mdi-lock"></i> Forgot your password?
                  </Link>
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

export default Login;
