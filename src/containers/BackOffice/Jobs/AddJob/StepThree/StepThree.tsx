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

const StepThree: React.FC<Props> = ({ next, back }) => {
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
          name="countries"
          label="Countries"
          rules={[
            {
              required: true,
              message: 'Please select conutry!',
            },
          ]}
          hasFeedback
        >
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select country"
            defaultValue={['Singapore']}
          >
            <Option value="Singapore">Singapore</Option>
            <Option value="Malaysia">Malaysia</Option>
            <Option value="France">France</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="job-fields"
          label="Job fields"
          rules={[
            {
              required: true,
              message: 'Please select job fields!',
            },
          ]}
          hasFeedback
        >
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select job fields"
            defaultValue={['IT']}
          >
            <Option value="IT">IT</Option>
            <Option value="Marketing">Marketing</Option>
            <Option value="Finance">Finance</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="skills"
          label="Skills"
          rules={[
            {
              required: true,
              message: 'Please select skills!',
            },
          ]}
          hasFeedback
        >
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select skills"
            defaultValue={['Php']}
          >
            <Option value="Html/CSS">Html/CSS</Option>
            <Option value="Php">Php</Option>
            <Option value="Node js">Node js</Option>
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

export default StepThree;
