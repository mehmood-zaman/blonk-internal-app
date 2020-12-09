import React from 'react';
import './Footer.scss';

const Footer: React.FC<{ footer: boolean }> = ({ footer }) => {
  return (
    <footer className={footer ? 'footer' : 'm-t-40 text-center'}>
      <p className="py-0 my-0 text-burgundy">
        © {new Date().getFullYear()} Blonk Group. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
