import React from 'react';
import { Link } from 'react-router-dom';
function Cloud() {
  return (
    <section className="cloud bg-primary my-2 py-2">
      <div className="container grid">
        <div className="text-center">
          <h2 className="lg">Leverage Velvyx Trusted Content</h2>
          <p className="lead my-1">
            Innovate by collaborating with team members and other developers and
            by easily
          </p>
          <Link to="/features" className="btn btn-dark">
            Read More
          </Link>
        </div>
        <img src="images/cloud.png" alt="" />
      </div>
    </section>
  );
}

export default Cloud;
