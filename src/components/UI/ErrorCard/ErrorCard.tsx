import React from 'react';
import { Card } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { useDispatch } from 'react-redux';
// import * as actions from "../../store/actions/index";

const ErrorCard = () => {
  const dispatch = useDispatch();

  // const onLogout = () => dispatch(actions.logout());
  return (
    <>
      <Fade>
        <Card>
          <h2>Something went wrong! 😓</h2>
          <p>
            We're quite sorry about this! Before you try to troubleshoot, please
            do check your Internet connection.
          </p>
          <h3>Troubleshooting</h3>
          <p>Here are a few things to try:</p>
          <ul>
            <li>
              <a
                href="#"
                className="text-primary  hover-underline"
                onClick={() => window.location.reload()}
              >
                Reload SOBlonk
              </a>{' '}
              or even restart your browser
            </li>
            <li>
              <a
                href="#"
                className="text-primary hover-underline"
                // onClick={onLogout}
              >
                Re-Login
              </a>{' '}
              to SOBlonk.
            </li>
            <li>Make sure your security software isn't blocking SOBlonk.</li>
          </ul>
          <p className="m-t-20">
            <a href="#" target="_blank">
              Check our Help Center
            </a>{' '}
            for more details, or{' '}
            <a href="#" target="_blank">
              drop us a line
            </a>
            .
          </p>
        </Card>
      </Fade>
    </>
  );
};

export default ErrorCard;
