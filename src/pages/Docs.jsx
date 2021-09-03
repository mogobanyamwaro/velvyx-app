import React from 'react';
import Head from '../components/Head';
import Maindocs from '../components/Maindocs';

function Docs() {
  return (
    <>
      <Head
        title="Speed development "
        text="Compose CLI and with one command, launch your applications locally and on the cloud with AWS ECS and Azure ACI."
      />
      <Maindocs />
    </>
  );
}

export default Docs;
