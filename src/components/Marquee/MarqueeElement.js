import React from 'react'

const MarqueeElement = (props) => {
    return (
        <div className='max-w-[290px]'>
            <img src={props.src} alt={props.alt} title={props.title} />
        </div>
    )
}

export default MarqueeElement