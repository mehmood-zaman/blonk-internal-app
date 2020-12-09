import React from 'react';
import { Accordion } from 'components/UI/Accordion/Accordion';
import { Row, Col, Form, Input, Select, Button } from 'antd';

export const CrawliesFilter: React.FC = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  return (
    <div>
      <Accordion HeaderTitle="Filter crawlies">
        <Form
          name="registration-form"
          layout="vertical"
          form={form}
          //   onFieldsChange={() => dispatch(httpClear())}
          //   onFinish={onFinish}
          scrollToFirstError
        >
          <Row justify="center" gutter={24}>
            <Col span={8}>
              <Form.Item
                name="location"
                label="Location"
                rules={[
                  {
                    required: true,
                    message: 'Please input Location !',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input Name!',
                  },
                ]}
              >
                <Select
                  placeholder="Name"
                  filterOption={(input, option: any) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="true">true</Option>
                  <Option value="false">false</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please input Followers more than!',
                  },
                ]}
              >
                <Select placeholder="Title">
                  <Option value="true">true</Option>
                  <Option value="false">false</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please choose Email !',
                  },
                ]}
              >
                <Select placeholder="Email">
                  <Option value="true">true</Option>
                  <Option value="false">false</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="location"
                label="Location"
                rules={[
                  {
                    required: true,
                    message: 'Please input Location!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="company"
                label="Company"
                rules={[
                  {
                    required: true,
                    message: 'Please input Company',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Button type="primary" shape="round">
            Filter record
          </Button>
        </Form>
      </Accordion>
    </div>
  );
};
