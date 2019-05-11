import React, { Fragment } from 'react';
// import { Header } from '../Header';
// import { Footer } from '../Footer';

const NotFound = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row h-100">
                    <div className="col-12 h-100">
                        <div className='h-100 d-flex align-items-center'>
                            <h3 className='w-100 d-flex justify-content-center'>No films found</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default NotFound;