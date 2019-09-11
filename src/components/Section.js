import React from 'react'
import PropTypes from 'prop-types';

const Section = (props) => {

    const {height , backgroundColor , customStyle} = props

    return(
        <section className={"section-container " + props.customClass} style={{ backgroundColor, height , ...customStyle }}>
            {props.children}
        </section>
    )

}

Section.propTypes = {
    customClass: PropTypes.string,
    height: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    customStyle: PropTypes.object,
}

export default Section