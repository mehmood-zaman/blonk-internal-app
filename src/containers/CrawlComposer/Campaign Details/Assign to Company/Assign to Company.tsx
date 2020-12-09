import React from 'react';
import { Row, Col, Form, Button, Select } from 'antd';
const { Option } = Select;

const AssigntoCompany = () => {
  const [form] = Form.useForm();
  return (
    <Form
      name="registration-form"
      layout="vertical"
      form={form}
      //   onFieldsChange={() => dispatch(httpClear())}
      //   onFinish={onFinish}
      scrollToFirstError
    >
      <Row justify="center" gutter={24}>
        <Col span={24}>
          <Form.Item
            name="company"
            label="Select company"
            rules={[
              {
                required: true,
                message: 'Please input Followers more than!',
              },
            ]}
          >
            <Select placeholder="Company">
              <Option value="true">Google </Option>
              <Option value="false">Facebook</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="job"
            label="Select Job"
            rules={[
              {
                required: true,
                message: 'Please input Followers more than!',
              },
            ]}
          >
            <Select placeholder="Job">
              <Option value="true"> React Native Developer</Option>
              <Option value="false">Node js Developer</Option>
            </Select>
          </Form.Item>
          <Col span={6}>
            <Form.Item>
              <Button type="primary" shape="round">
                Activate
              </Button>
            </Form.Item>
          </Col>
        </Col>
      </Row>
    </Form>
  );
};
export default AssigntoCompany;
