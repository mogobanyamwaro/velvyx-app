import React from 'react';

function Head({ text, title }) {
  return (
    <section className="docs-head bg-primary py-3">
      <div className="container grid">
        <div>
          <h1 className="xl">${title}</h1>
          <p className="lead">${text}</p>
        </div>
        <img src="images/docs.png" alt="" />
      </div>
    </section>
  );
}

export default Head;
