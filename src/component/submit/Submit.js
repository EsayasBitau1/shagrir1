import React, { Fragment } from 'react'
import './Submit.css'
import {Link} from 'react-router-dom'

export const Submit = (props) => {

    return (
        <Fragment>
            <section className="buttons" >
            <Link to={props.link} className='btn'>
              לתשלום לחץ כאן
            </Link>
            </section>
        </Fragment>
    )
}
export default Submit