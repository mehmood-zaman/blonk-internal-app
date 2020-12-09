import React from 'react';
import {
  Drawer,
  Input,
  Form,
  Button,
  Divider,
  DatePicker,
  Col,
  Row,
  Switch,
} from 'antd';
const { TextArea } = Input;
interface Props {
  show: boolean;
  hide: any;
}

const EducationDrawer: React.FC<Props> = ({ show, hide }) => {
  return (
    <>
      <Drawer
        title="Recruiter's Education"
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
            <Form layout="vertical" name="recruiter-education">
              <Form.Item
                label="Degree title"
                name="degree"
                rules={[
                  {
                    required: true,
                    message: 'Please input  degree title!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Institute name"
                name="institue"
                rules={[
                  {
                    required: true,
                    message: 'Please input institute name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Currently studying">
                <Switch />
              </Form.Item>
              <Row justify="center" className="pb-4" gutter={16}>
                <Col span={12}>
                  <Form.Item label="Start" name="start">
                    <DatePicker picker="year" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="End" name="end">
                    <DatePicker picker="year" />
                  </Form.Item>
                </Col>
              </Row>
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

export default EducationDrawer;
