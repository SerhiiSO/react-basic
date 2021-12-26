import React from 'react';
import PropTypes from 'prop-types';

const AppExtensions = ({titleProp}) => {
    return (
        <h2>{titleProp}</h2>
    );
}

export default AppExtensions;

AppExtensions.propTypes = {
    titleProp: PropTypes.string
}