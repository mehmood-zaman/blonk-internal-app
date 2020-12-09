import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

interface Props {
  HeaderTitle: string;
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const Accordion: React.FC<Props> = (props) => {
  return (
    <div>
      <Collapse
        accordion={true}
        bordered={false}
        onChange={(e) => {
          console.log(e);
        }}
      >
        <Panel showArrow={false} header={props.HeaderTitle} key="1">
          {props.children}
        </Panel>
      </Collapse>
    </div>
  );
};
