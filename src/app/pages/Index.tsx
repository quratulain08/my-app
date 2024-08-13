import React from 'react';
import Layout from '../components/Layout'; // Adjust the path if necessary
import Banner from '../components/Banner';
import About from '../components/About';
import KeyFeatures from '../components/KeyFeatures';


const Index: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <KeyFeatures/>
      <About />
     
      {/* Add any additional components here */}
    </Layout>
  );
};

export default Index;