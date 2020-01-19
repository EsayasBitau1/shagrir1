import React, { Fragment } from 'react'
import users from '../../data/users.json'
import Submit from '../submit/Submit'
import './Notifiction.css';


export const Notifiction = () => {
    return (
        <Fragment>
            <section className="landing">
                <section className="notifiction-container">
                    <div className="notifiction">
                       {users.name} שלום,<br />
                        זוהי הודעה שנייה כי פרטי האשראי<br/>
                        שהעברת לידינו בגין שירות שניתן לרכב<br />
                        שמספרו : {users.carNumber}<br />
                        בתאריך : {users.date}<br/>
                        לא ניתנים לחיוב.<br />
                        נבקשך להסדיר תשלום על סך : {users.debt}<br />
                        בתוך 14 ימים.<br />
                        <div className="send">
                            <Submit link='/form'/> 
                        </div>
                    </div>
                    <section>
                    </section>
                </section>
            </section>
        </Fragment>
    )
}
export default Notifiction