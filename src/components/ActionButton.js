import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const ActionButton = () => {
    return (
        <div className='ShareButton'>
            <FontAwesomeIcon className='iconShare' icon={faShare} />
            <span className='textShare'>Share</span>

        </div>
    )
}

export default ActionButton
