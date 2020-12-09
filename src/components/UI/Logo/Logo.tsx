import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{ height: string }> = ({ height }) => {
  return (
    <>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/blonk-group/image/upload/v1556608934/blonk/logo/blonk-blue.png"
          height={height}
        />
      </Link>
    </>
  );
};

export default Logo;
