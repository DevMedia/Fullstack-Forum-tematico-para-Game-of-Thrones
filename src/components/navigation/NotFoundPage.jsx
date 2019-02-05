import React from 'react'

import notFound from './NotFound.svg';

const NotFoundPage = () => {
  return (
    <div>
      <img src={notFound} alt="Page not Found" className="img-fluid"/>
    </div>
  )
}

export default NotFoundPage
