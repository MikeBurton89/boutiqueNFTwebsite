import React from 'react'

const MarqueeElement = (props) => {
    return (
        <div>
            <img src={props.src} alt={props.alt} title={props.title} className='md:w-1/4 md:h-1/4 w-1/5 h-1/5' />
        </div>
    )
}

export default MarqueeElement