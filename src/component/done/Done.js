import React, { Fragment } from 'react'
import './Done.css'
import users from '../../data/users.json'

export const Done = () => {
    return (
        <Fragment>
            <section className="done">
           <h1>התשלום התקבל בהצלחה</h1> 

           <p> {users.sum} : הסכום ששולם</p>
           <p> {users.ticketNum} : הסכום ששולם </p>
            </section>
        </Fragment>
    )
}
export default Done