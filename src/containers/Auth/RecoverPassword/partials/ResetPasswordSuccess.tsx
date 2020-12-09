import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import { Fade, Bounce } from 'react-reveal';
import { useHistory } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const ResetPasswordSuccess: React.FC<{
  message?: string;
  username?: string;
}> = ({ message, username }) => {
  let history = useHistory();
  return (
    <>
      <div className="text-center m-t-40">
        {/* <Fade> */}
        <h1 className="text-navy">Password changed Successfully!</h1>
        {/* </Fade>
        <Fade> */}
        <p className="pt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          possimus nihil hic amet neque enim, ut quam non asperiores harum,
          adipisci incidunt veritatis quas reprehenderit reiciendis, deleniti
          iure expedita accusamus!
        </p>
        {/* </Fade> */}
        <div className="m-t-40">
          {/* <Bounce> */}
          <Link to="/login">
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              icon={<ArrowLeftOutlined />}
              onClick={() => history.goBack()}
            >
              Go back
            </Button>
          </Link>
          {/* </Bounce> */}
        </div>
      </div>
    </>
  );
};

export default ResetPasswordSuccess;
