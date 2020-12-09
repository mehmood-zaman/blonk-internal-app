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
  Upload,
  message,
  Steps,
} from 'antd';
const { Option } = Select;
const { TextArea } = Input;
interface Props {
  next: any;
}

const StepOne: React.FC<Props> = ({ next }) => {
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
          name="jobTitle"
          label="Job Title"
          rules={[
            {
              required: true,
              message: 'Please input job title!',
            },
          ]}
        >
          <Input type="text" placeholder="Enter job title" />
        </Form.Item>

        <Form.Item
          name="company"
          label="Company"
          rules={[
            {
              required: true,
              message: 'Please select company!',
            },
          ]}
          hasFeedback
        >
          <Select
            showSearch
            placeholder="Select company"
            // optionFilterProp="children"
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            // onSearch={onSearch}
            filterOption={(input, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Singapore">Google</Option>
            <Option value="Malaysia">Facebook</Option>
            <Option value="France">LinkedIn</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="companyDescription"
          label="Job Description"
          rules={[
            {
              required: true,
              message: 'Please enter job description!',
            },
          ]}
          hasFeedback
        >
          <TextArea rows={14} />
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
            <Button
              className="ant-btn-primary text-white"
              type="link"
              shape="round"
              onClick={() => next()}
            >
              Next
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StepOne;
