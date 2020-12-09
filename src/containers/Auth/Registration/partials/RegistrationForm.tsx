import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { httpClear } from '../../../../store/http/actions';
import { HttpState } from '../../../../store/http/types';

import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const RegistrationForm: React.FC<{ onFinish: any }> = ({ onFinish }) => {
  const [form] = Form.useForm();
  //error state to control form
  const [hasError, setHasError] = useState(false);

  const { error, loading }: any = useSelector((state: HttpState) => state.http);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setHasError(true);
      notification['error']({
        message: 'Unable to Register',
        description: hasError,
        duration: 3,
        onClose: () => setHasError(false),
      });
    }
  }, [error]);
  return (
    <>
      <p className="text-muted text-center pt-0 mtp0">
        Already have an account ?{' '}
        <Link to="/login" className="text-primary">
          Login
        </Link>
      </p>

      <Form
        name="registration-form"
        layout="vertical"
        form={form}
        onFieldsChange={() => dispatch(httpClear())}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            {
              required: true,
              message: 'Please input your Full name!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="Enter Full name"
          />
        </Form.Item>
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
            placeholder="Enter Email address"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              whitespace: true,
              message: 'No whitespace allowed',
            },
            {
              min: 6,
              message: 'Please input min 6 characters',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Enter Password"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              whitespace: true,
              message: 'No whitespace allowed',
            },
            {
              min: 6,
              message: 'Please input min 6 characters',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Enter confirm password"
          />
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input your Title!',
            },
          ]}
        >
          <Input
            prefix={<i className="fas fa-graduation-cap font-14" />}
            placeholder="Enter Title"
          />
        </Form.Item>

        <Form.Item>
          <div className="text-right">
            <Button
              // type="amber"
              type="primary"
              htmlType="submit"
              shape="round"
              loading={loading}
            >
              Register
            </Button>
          </div>
        </Form.Item>
        <p className="font-14 text-muted  mb-0">
          By registering you agree to the Blonk{' '}
          <Button type="link" className="text-navy">
            Terms of Use
          </Button>
        </p>
      </Form>
    </>
  );
};

export default RegistrationForm;
