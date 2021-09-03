import React from 'react';
import Showcase from '../components/Showcase';
import Stats from '../components/Stats';
import Cli from '../components/Cli';
import Cloud from '../components/Cloud';
import Languages from '../components/Languages';

function Home() {
  return (
    <div>
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
      <Languages />
    </div>
  );
}

export default Home;
