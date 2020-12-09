import React from 'react';
import { Drawer, Input, Form, Button, Divider, Col, Row } from 'antd';
const { TextArea } = Input;
interface Props {
  show: boolean;
  hide: any;
}

const SummaryFormDrawer: React.FC<Props> = ({ show, hide }) => {
  return (
    <>
      <Drawer
        title="Recruiter's Summary"
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
            <Form layout="vertical" name="recruiter-summary">
              <Form.Item
                label="Summary"
                name="summary"
                rules={[{ required: true, message: 'Please input summary!' }]}
              >
                <TextArea
                  rows={12}
                  value=" Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content."
                ></TextArea>
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

export default SummaryFormDrawer;
