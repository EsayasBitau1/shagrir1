import React, { Fragment } from 'react';
import Notifiction from '../../notifiction/Notifiction';
import './Landing.css';

export const Landing = () => {
  return (
    <Fragment>
      <section className="landing">
      <section className="landing-inner">
      <Notifiction />
      </section>
      </section>
    </Fragment>
  );
};
export default Landing;