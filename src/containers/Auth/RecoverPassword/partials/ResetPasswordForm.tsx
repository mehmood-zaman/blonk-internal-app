import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { httpClear } from '../../../../store/http/actions';
import { Form, Input, Button, notification } from 'antd';
// import { Fade } from 'react-reveal';

import { LockOutlined } from '@ant-design/icons';
import { HttpState } from '../../../../store/http/types';

const ResetPasswordForm: React.FC<{ onFinish: any }> = ({ onFinish }) => {
  const [form] = Form.useForm();

  const { loading, error } = useSelector((state: HttpState) => state.http);

  //error state to control form
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      setHasError(true);
      notification['error']({
        message: 'Unable to Register',
        description: error,
        duration: 3,
        onClose: () => setHasError(false),
      });
    }
  }, [error]);

  return (
    <>
      <h4 className="text-muted font-18 mb-3 text-center">Reset Password</h4>
      {/* <Fade> */}
      <Form
        name="reset-password-form"
        layout="vertical"
        form={form}
        onFieldsChange={() => dispatch(httpClear())}
        onFinish={onFinish}
        scrollToFirstError
        className="m-t-40"
      >
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
        <Form.Item>
          <div className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              loading={loading}
            >
              Reset Password
            </Button>
          </div>
        </Form.Item>
      </Form>
      {/* </Fade> */}
    </>
  );
};

export default ResetPasswordForm;
