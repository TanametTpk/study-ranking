import React from 'react'
import PropTypes from 'prop-types';

const Overlay = (props) => {

    const {isOn} = props

    return(
        <div className={"overlay-container " + (isOn ? "" : "hidden")}>
            {props.children}
        </div>
    )

}

Overlay.propTypes = {
    isOn: PropTypes.bool.isRequired,
}

export default Overlay