import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HttpState } from '../../../../store/http/types';

import {
  Row,
  Col,
  Card,
  notification,
  Form,
  Input,
  Select,
  Button,
  Upload,
  message,
} from 'antd';
import PageTitle from '../../../../components/UI/PageTitle/PageTitle';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;
interface Props {}

const AddRecruiter: React.FC<Props> = () => {
  const [form] = Form.useForm();
  const { redirectPath } = useSelector((state: HttpState) => state.http);

  return (
    <>
      <PageTitle title="Register new recruiter" back />
      <Row justify="center" gutter={16}>
        <Col span={16}>
          <Card className="mb-4">
            <Form
              name="registration-form"
              layout="vertical"
              form={form}
              //   onFieldsChange={() => dispatch(httpClear())}
              //   onFinish={onFinish}
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
                  {/* <Button
                    // type="amber"
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    // loading={loading}
                  >
                    Register
                  </Button> */}
                  <Link to={`${redirectPath}/recruiters/123451?data=0`}>
                    <Button className="ant-btn-amber" type="link" shape="round">
                      Register
                    </Button>
                  </Link>
                </div>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddRecruiter;
