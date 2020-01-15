import React, { Fragment } from 'react'
import users from '../../data/users.json'
import Submit from '../submit/Submit'


export const Notifiction = () => {
    return (
        <Fragment>
            <section>
                <h1>{users.name} שלום,</h1>
                <p> זוהי הודעה שנייה כי פרטי האשראי שהעברת לידינו בגין שירות שניתן<p />
                    <p>לרכב   שמספרו : {users.carNumber}</p>
                    <p> בתאריך : {users.date}</p>
                    לא ניתנים לחיוב.
                   <p> נבקשך להסדיר תשלום על סך : {users.debt}</p>
                    בתוך 14 ימים. </p>
            </section>
            
            <section className="boot">
                <Submit/>
            </section>
        </Fragment>
    )
}
export default Notifiction