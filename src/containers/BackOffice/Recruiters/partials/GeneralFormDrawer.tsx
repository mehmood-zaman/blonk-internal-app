import React from 'react';
import { Drawer, Input, Form, Button, Divider, Col, Row } from 'antd';
const { TextArea } = Input;
interface Props {
  show: boolean;
  hide: any;
}

const GeneralFormDrawer: React.FC<Props> = ({ show, hide }) => {
  return (
    <>
      <Drawer
        title="Recruiter's General Info"
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
                label="Full name"
                name="fullname"
                initialValue="Bella Godfray"
                rules={[
                  {
                    required: true,
                    message: 'Please input  full name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Title"
                name="title"
                initialValue="Recruiting Manager"
                rules={[
                  {
                    required: true,
                    message: 'Please input  title!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Facebook"
                name="facebook"
                initialValue="www.facebook.com"
                rules={[
                  {
                    required: true,
                    message: 'Please input facebook url!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Twitter"
                name="twitter"
                initialValue="www.twitter.com"
                rules={[
                  {
                    required: true,
                    message: 'Please input twitter url!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Website"
                name="website"
                initialValue="www.website.com"
                rules={[
                  {
                    required: true,
                    message: 'Please input website url!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="LinkedIn"
                name="linkedin"
                initialValue="www.linkedin.com"
                rules={[
                  {
                    required: true,
                    message: 'Please input linkedin url!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="ant-btn-teal float-right"
                  shape="round"
                  size="middle"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default GeneralFormDrawer;
