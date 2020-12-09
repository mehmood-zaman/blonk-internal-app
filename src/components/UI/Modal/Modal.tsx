/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

interface Props {
  onOK: () => void;
  title?: string;
  width: number;
  titleType?: string;
  ModalTytle: string;
  btnIcon?: JSX.Element;
  titleBtnClass?: string;
  headerTitle?: string;
}

const Analytics: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      {props.titleType === 'button' ? (
        <Button
          className={props.titleBtnClass}
          shape="round"
          size="middle"
          icon={props.btnIcon}
          onClick={showModal}
        >
          {props.title}
        </Button>
      ) : (
        <a
          className="text-primary"
          style={{ fontSize: 14 }}
          onClick={showModal}
        >
          {props.title}
        </a>
      )}

      <Modal
        title={props.headerTitle}
        width={props.width}
        visible={visible}
        onOk={() => {
          props.onOK();
          setVisible(false);
        }}
        onCancel={handleCancel}
      >
        {props.children}
      </Modal>
    </>
  );
};

export default Analytics;
