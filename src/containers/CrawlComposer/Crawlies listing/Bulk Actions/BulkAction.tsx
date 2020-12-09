import React from 'react';
import { Accordion } from 'components/UI/Accordion/Accordion';
import { Row, Col, Form, Input, Select, Button } from 'antd';

export const BulkActions: React.FC = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  return (
    <div>
      <Accordion HeaderTitle="Bulk action">
        <Form
          name="registration-form"
          layout="vertical"
          form={form}
          //   onFieldsChange={() => dispatch(httpClear())}
          //   onFinish={onFinish}
          scrollToFirstError
        >
          <Row justify="center" gutter={24}>
            <Col span={6}>
              <Form.Item
                name="crawlies"
                label="Select crawlies"
                rules={[
                  {
                    required: true,
                    message: 'Please input Crawlies!',
                  },
                ]}
              >
                <Select
                  placeholder="Select crawlies"
                  filterOption={(input, option: any) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="true">Checked</Option>
                  <Option value="false">1000</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
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
                <Select placeholder="Title">
                  <Option value="true">Google </Option>
                  <Option value="false">Facebook</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                name="email"
                label="Select Job"
                rules={[
                  {
                    required: true,
                    message: 'Please Select Job !',
                  },
                ]}
              >
                <Select placeholder="Job">
                  <Option value="true">Frontend Developer - Singapore</Option>
                  <Option value="false">Marketing Head - Malasia</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button style={{ marginTop: 28 }} type="primary" shape="round">
                  Filter record
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Accordion>
    </div>
  );
};
