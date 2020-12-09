import React from 'react';
import { Drawer, Input, Form, Button, Checkbox, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface Props {
  show: boolean;
  hide: any;
}

const ResetPasswordFormDrawer: React.FC<Props> = ({ show, hide }) => {
  return (
    <>
      <Drawer
        title="Reset password"
        placement="right"
        closable={true}
        onClose={hide}
        visible={show}
        width={500}
        className="menu-drawer"
      >
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          justify="center"
          className="pt-4"
        >
          <Col md={22}>
            <Form layout="vertical" name="recruiter-general-info">
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
                  readOnly
                  defaultValue="bella@mailinator.com"
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
              <Form.Item name="notify" valuePropName="checked">
                <Checkbox>Send reset password email to recruiter</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="ant-btn-teal float-right"
                  shape="round"
                  size="middle"
                >
                  Reset password
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default ResetPasswordFormDrawer;
