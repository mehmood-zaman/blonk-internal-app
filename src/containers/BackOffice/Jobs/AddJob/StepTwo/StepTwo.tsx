import React from 'react';
import {
  Row,
  Col,
  Card,
  notification,
  Form,
  Input,
  Select,
  Button,
  Space,
  message,
  Steps,
} from 'antd';
const { Option } = Select;
const { TextArea } = Input;
interface Props {
  next: any;
  back: any;
}

const StepTwo: React.FC<Props> = ({ next, back }) => {
  const [form] = Form.useForm();

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
        <Form.Item
          name="recruiter"
          label="Recruiters"
          rules={[
            {
              required: true,
              message: 'Please select recruiter!',
            },
          ]}
          hasFeedback
        >
          <Select
            placeholder="Select recruiter"
            mode="multiple"
            style={{ width: '100%' }}
          >
            <Option value="John">John</Option>
            <Option value="Doe">Doe</Option>
            <Option value="Smith">Smith</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="lead-recruiter"
          label="Lead recruiter"
          rules={[
            {
              required: true,
              message: 'Please select lead recruiter!',
            },
          ]}
          hasFeedback
        >
          <Select
            showSearch
            placeholder="Select Lead recruiter"
            style={{ width: '100%' }}
          >
            <Option value="John">John</Option>
            <Option value="Doe">Doe</Option>
            <Option value="Smith">Smith</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <div className="text-right">
            <Space>
              <Button
                className="ant-btn-amber"
                type="link"
                shape="round"
                onClick={() => back()}
              >
                Back
              </Button>
              <Button
                className="ant-btn-primary text-white"
                shape="round"
                onClick={() => next()}
              >
                Next
              </Button>
            </Space>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StepTwo;
