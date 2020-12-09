import React from 'react';
import { Row, Col, Form, Button, Select, Input } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

export const CreateCampaignForm = () => {
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
            name="channel"
            label="Select Channel"
            rules={[
              {
                required: true,
                message: 'Please input Followers more than!',
              },
            ]}
          >
            <Select placeholder="Channel">
              <Option value="true">Email </Option>
              <Option value="false">Push Notification</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="template"
            label="Select Template"
            rules={[
              {
                required: true,
                message: 'Please input Followers more than!',
              },
            ]}
          >
            <Select placeholder="Template">
              <Option value="true"> React Native Developer</Option>
              <Option value="false">Node js Developer</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[
              {
                required: true,
                message: 'Please input Followers more than!',
              },
            ]}
          >
            <TextArea cols={20} />
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
export default CreateCampaignForm;
