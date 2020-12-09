import React from 'react';
import { Drawer, Input, Typography, Button, Col, Row } from 'antd';
const { TextArea } = Input;
interface Props {
  show: boolean;
  hide: any;
}
const { Title, Text, Paragraph } = Typography;

const ActivityLogDrawer: React.FC<Props> = ({ show, hide }) => {
  return (
    <>
      <Drawer
        title="Recruiter's activity log"
        placement="right"
        closable={true}
        onClose={hide}
        visible={show}
        width={400}
        className="menu-drawer"
      >
        <Row gutter={0} className="border-bottom-dashed pb-2 mb-2 mt-2">
          <Col
            span={4}
            style={{
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            <span className="icon-wrapper-sm icon-bg-burgundy">
              <i className="mdi mdi-close text-burgundy font-16" />
            </span>
          </Col>
          <Col span={20} style={{ alignSelf: 'center' }} className="pl-2">
            <Paragraph className="mt-0 mb-0 font-12" strong>
              Bella disliked Bella John
            </Paragraph>
            <Paragraph className="mb-0 font-12 text-muted font-weight-semibold-alt">
              02 April 2020 | 02:13 PM
            </Paragraph>
          </Col>
        </Row>

        <Row gutter={0} className="border-bottom-dashed pb-2 mb-2">
          <Col
            span={4}
            style={{
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            <span className="icon-wrapper-sm icon-bg-teal">
              <i className="mdi mdi-check text-teal font-16" />
            </span>
          </Col>
          <Col span={20} style={{ alignSelf: 'center' }} className="pl-2">
            <Paragraph className="mt-0 mb-0 font-12" strong>
              Bella liked John Doe
            </Paragraph>
            <Paragraph className="mb-0 font-12 text-muted font-weight-semibold-alt">
              02 April 2020 | 02:13 PM
            </Paragraph>
          </Col>
        </Row>
        <Row gutter={0} className="border-bottom-dashed pb-2 mb-2">
          <Col
            span={4}
            style={{
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            <span className="icon-wrapper-sm icon-bg-primary">
              <i className="mdi mdi-check-all text-primary font-16" />
            </span>
          </Col>
          <Col span={20} style={{ alignSelf: 'center' }} className="pl-2">
            <Paragraph className="mt-0 mb-0 font-12" strong>
              Bella matched with John Doe
            </Paragraph>
            <Paragraph className="mb-0 font-12 text-muted font-weight-semibold-alt">
              02 April 2020 | 02:13 PM
            </Paragraph>
          </Col>
        </Row>
        <Row gutter={0} className="border-bottom-dashed pb-2 mb-2">
          <Col
            span={4}
            style={{
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            <span className="icon-wrapper-sm icon-bg-amber">
              <i className="mdi mdi-star text-amber font-16" />
            </span>
          </Col>
          <Col span={20} style={{ alignSelf: 'center' }} className="pl-2">
            <Paragraph className="mt-0 mb-0 font-12" strong>
              Bella selected John Doe
            </Paragraph>
            <Paragraph className="mb-0 font-12 text-muted font-weight-semibold-alt">
              02 April 2020 | 02:13 PM
            </Paragraph>
          </Col>
        </Row>
        <Row gutter={0} className="border-bottom-dashed pb-2 mb-2">
          <Col
            span={4}
            style={{
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            <span className="icon-wrapper-sm icon-bg-brand">
              <i className="mdi mdi-lock-outline text-brand font-16" />
            </span>
          </Col>
          <Col span={20} style={{ alignSelf: 'center' }} className="pl-2">
            <Paragraph className="mt-0 mb-0 font-12" strong>
              Password changed
            </Paragraph>
            <Paragraph className="mb-0 font-12 text-muted font-weight-semibold-alt">
              02 April 2020 | 02:13 PM
            </Paragraph>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default ActivityLogDrawer;
