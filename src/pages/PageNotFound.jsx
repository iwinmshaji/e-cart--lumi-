import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
        <img className='w-25' src="pnf.png" alt="Page Not Found" />
        <h6 className='mt-5'>WE ARE SORRY, LOOK LOKE YOU ARE LOST</h6>
        <p>Page you'r looking for is not available!!</p>
        <Link to={'/'} className='btn btn-dark'>Back to Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound