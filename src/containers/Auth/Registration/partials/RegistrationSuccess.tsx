import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import { Fade, Bounce } from 'react-reveal';
import { useHistory } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface Props {
  message: string;
  username: string;
}
const RegistrationSuccess: React.FC<Props> = ({ message, username }) => {
  let history = useHistory();
  return (
    <>
      <div className="text-center m-t-40">
        {/* <Fade> */}
        <h1 className="text-navy">Thank you for Registration!</h1>
        {/* </Fade> */}
        {/* <Fade/> */}
        <h3 className="text-primary pt-4">Hello {username}</h3>
        <p className="pt-1">
          We're excited to have you get started. First, you need to confirm your
          account. Check your email to verify your account.
        </p>
        {/* </Fade> */}
        <div className="m-t-40">
          {/* <Bounce> */}
          <Link to="/login">
            <Button
              // type="amber"
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

export default RegistrationSuccess;
