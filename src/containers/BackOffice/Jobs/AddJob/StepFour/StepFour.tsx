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
  Steps,
} from 'antd';
const { Option } = Select;
const { TextArea } = Input;
interface Props {
  next: any;
  back: any;
}

const StepFour: React.FC<Props> = ({ next, back }) => {
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
        <Row justify="center" gutter={16}>
          <Col span={11}>
            <Form.Item
              name="required-experience"
              label="Required years of experience (minimum)"
              rules={[
                {
                  required: true,
                  message: 'Please input your required experience!',
                },
              ]}
            >
              <Input placeholder="Enter required years of experience" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="contract"
              label="Contract type"
              rules={[
                {
                  required: true,
                  message: 'Please select contract type!',
                },
              ]}
              hasFeedback
            >
              <Select
                showSearch
                placeholder="Select contract type"
                filterOption={(input, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="any contract type">any contract type</Option>
                <Option value="full-time">full-time</Option>
                <Option value="internship">internship</Option>
                <Option value="freelance">freelance</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              name="currency"
              label="Currency"
              rules={[
                {
                  required: true,
                  message: 'Please select currency!',
                },
              ]}
              hasFeedback
            >
              <Select
                showSearch
                placeholder="Select currency"
                filterOption={(input, option: any) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="USD">USD</Option>
                <Option value="EUR">EUR</Option>
                <Option value="SGD">SGD</Option>
                <Option value="CYN">CYN</Option>
                <Option value="MXN">MXN</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center" gutter={16}>
          <Col span={24}>
            <Form.Item
              name="salary-range"
              label="Salary range"
              rules={[
                {
                  required: true,
                  message: 'Please select salary range!',
                },
              ]}
              hasFeedback
            >
              <Slider
                range
                step={5}
                defaultValue={[5, 15]}
                max={40}
                tipFormatter={formatter}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center" gutter={16}>
          <Col span={24}>
            <Form.Item
              name="hide-salary"
              rules={[
                {
                  required: false,
                },
              ]}
              hasFeedback
            >
              <Checkbox>Hide salary sackage</Checkbox>
            </Form.Item>
          </Col>
        </Row>

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
                Publish
              </Button>
            </Space>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StepFour;
