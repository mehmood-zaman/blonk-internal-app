import React from 'react';
import {
  Row,
  Col,
  Slider,
  Form,
  Input,
  Select,
  Button,
  Space,
  Checkbox,
  DatePicker,
  Steps,
} from 'antd';
const { Option } = Select;
const { TextArea } = Input;

const StepFour: React.FC = () => {
  const [form] = Form.useForm();
  const formatter = (value: any) => {
    return `USD ${value}000`;
  };
  return (
    <div>
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
              name="jobName"
              label="Job name"
              rules={[
                {
                  required: true,
                  message: 'Please input Job name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="recordPerPage"
              label="Record per page "
              rules={[
                {
                  required: true,
                  message: 'Please input Record per page !',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="totalUsers"
              label="Total users"
              rules={[
                {
                  required: true,
                  message: 'Please input Total users!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="followersMoreThen"
              label="Followers more than"
              rules={[
                {
                  required: true,
                  message: 'Please input Followers more than!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="followersLessThan"
              label="followers less than "
              rules={[
                {
                  required: true,
                  message: 'Please input followers less than !',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="joinedBefore"
              label="Joined before"
              rules={[
                {
                  required: true,
                  message: 'Please input Joined before!',
                },
              ]}
            >
              <DatePicker style={{ borderRadius: '1.25 rem !important' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="followersMoreThen"
              label="Followers more than"
              rules={[
                {
                  required: true,
                  message: 'Please input Followers more than!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <div className="text-right">
            <Space></Space>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StepFour;
