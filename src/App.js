import React from 'react';
import Layout from './components/Layout/index';
import BurgerBuilder from "./containers/BurgerBuilder";
function App() {
  return (
      <Layout>
          <BurgerBuilder />
      </Layout>
  );
}

export default App;
