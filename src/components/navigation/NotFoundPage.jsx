import React from 'react';

import notFound from '../../assets/NotFound.svg';

const NotFoundPage = props => {
    return (
        <div>
            <img src={notFound} alt="Page not Found" className="img-fluid" />
        </div>
    );
};

export default NotFoundPage;
