import React from 'react';
import Route from './Views';
import Aos from './Components/Aos';

const App = () => {
  return (
    <Aos duration={3000}>
      <Route />
    </Aos>
  );
};

export default App;
