import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { httpClear } from '../../../../store/http/actions';
import { Form, Input, Button, notification } from 'antd';
// import { Fade } from 'react-reveal';
import { HttpState } from '../../../../store/http/types';

const RecoverPasswordForm: React.FC<{ onFinish: any }> = ({ onFinish }) => {
  const [form] = Form.useForm();

  const { error, loading } = useSelector((state: HttpState) => state.http);

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
      <h4 className="text-muted font-18 mb-3 text-center">Recover Password</h4>
      <p className="text-muted text-center pt-0 mtp0">
        Remember It ?{' '}
        <Link to="/login" className="text-primary">
          Login here
        </Link>
      </p>
      {/* <Fade> */}
      <Form
        name="recover-password-form"
        layout="vertical"
        form={form}
        onFieldsChange={() => dispatch(httpClear())}
        onFinish={onFinish}
        scrollToFirstError
        className="m-t-40"
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
            placeholder="Enter Email address"
          />
        </Form.Item>
        <Form.Item>
          <div className="text-right">
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              loading={loading}
            >
              Recover Password
            </Button>
          </div>
        </Form.Item>
      </Form>
      {/* </Fade> */}
    </>
  );
};

export default RecoverPasswordForm;
