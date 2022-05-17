import React from 'react'

const SocialIcon = (props) => {
    return (
        <>
            <span className='py-2 px-4 md:py-10 text-text_dark hover:text-accent'>
                <a href={props.href}>
                    {props.icon}
                </a>
            </span>
        </>
    )
}

export default SocialIcon