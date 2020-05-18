import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Aoss = ({ children, duration }) => {
  useEffect(() => {
    Aos.init({ duration });
  }, []);
  return <div>{children}</div>;
};

export default Aoss;
