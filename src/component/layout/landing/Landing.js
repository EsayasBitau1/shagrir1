import React, { Fragment } from 'react';
import Notifiction from '../../notifiction/Notifiction';
import users from '../../../data/users.json';

export const Landing = () => {
  return (
    <Fragment>
<h1>{users.name}שלום,</h1>
  <h2>:זוהי הודעה שנייה כי פרטי האשראי שהעברת לידינו בגין שירות שניתן לרכב שמספרו{users.carNumber} 
:בתאריך{users.date}
לא ניתנים לחיוב
נבקשך להסדיר תשלום על סך :{users.debt} 
בתוך 14 ימים </h2>
    </Fragment>
  );
};
export default Landing;