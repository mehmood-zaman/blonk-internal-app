import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { httpClear } from '../../../../store/http/actions';
import { Row, Col, Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { HttpState } from '../../../../store/http/types';
// import { Fade } from 'react-reveal';

const RecoveryCordForm: React.FC<{ onFinish: any }> = ({ onFinish }) => {
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
          name="recoveryCode"
          label="Please Enter Recovery Code"
          rules={[
            {
              required: true,
              message: 'Please input your Password Recovery code!',
            },
            {
              min: 4,
              message: 'Please input valid 4 digit recovery code!',
            },
          ]}
        >
          <Input
            placeholder="1234"
            className="recover-password-field"
            maxLength={4}
          />
        </Form.Item>

        <Form.Item>
          <div className="text-right m-t-20">
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
      <p className="font-14 text-muted  mb-0">
        Din't get code yet?
        <Button type="link" className="text-navy">
          Contact Blonk
        </Button>
      </p>
    </>
  );
};

export default RecoveryCordForm;
