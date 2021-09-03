import React from 'react';
import { Link } from 'react-router-dom';

function Showcase() {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>New to containers</h1>
          <p>
            Today, all major cloud providers and leading open source serverless
            frameworks use our platform, and many are leveraging Docker for
            their container-native IaaS offerings.
          </p>
          <Link to="/docs" className="btn btn-outline">
            Read More
          </Link>
        </div>

        <div className="showcase-form card">
          <h2>Sign up Now</h2>

          <form>
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="form-control">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
