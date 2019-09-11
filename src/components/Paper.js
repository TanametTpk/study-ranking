import React from 'react'
import PropTypes from 'prop-types';

const Paper = (props) => {

    const {height , width , backgroundColor , customStyle} = props

    return(
        <div className={"paper-container " + props.customClass} style={{ backgroundColor, height , width , ...customStyle }}>
            {props.children}
        </div>
    )

}

Paper.propTypes = {
    customClass: PropTypes.string,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    customStyle: PropTypes.object,
}

export default Paper