import React from 'react';
import PropTypes from 'prop-types';

function Error({ mensaje }) {
    return (
        <div className='error'>
            <p className='alert alert-danger error'>{mensaje}</p>
        </div>
    );
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired,
};

export default Error;
