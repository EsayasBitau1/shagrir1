import React, { Fragment } from 'react'
import './Submit.css'
import {Link} from 'react-router-dom'

export const Submit = () => {
    return (
        <Fragment>
            <section className="buttons" >
            <Link to='/form' className='btn btn-primary'>
              לתשלום לחץ כאן
            </Link>
            </section>
        </Fragment>
    )
}
export default Submit