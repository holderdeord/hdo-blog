import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>
        Oi!
        <span role="img" aria-label="En høyst overrasket ugle">
          🦉
        </span>
      </h1>
      <p>Dette var en blindvei.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
