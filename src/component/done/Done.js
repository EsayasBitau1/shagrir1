import React, { Fragment } from 'react'
import './Done.css'
import users from '../../data/users.json'

export const Done = () => {
    return (
        <Fragment>
            <section className="background">
                <section className="done-container">
                    <div className="done">
                        <h1>התשלום התקבל בהצלחה</h1>
                        הסכום ששולם : {users.sum}  <br />
                        מספר חשבונית : {users.ticketNum} <br />
                    </div>
                    <div className="btn-done">
                        לצפייה בחשבונית לחץ
                    </div>
                </section>
            </section>
        </Fragment>
    )
}
export default Done