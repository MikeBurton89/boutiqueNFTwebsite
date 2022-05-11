import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const twitterIcon = <FontAwesomeIcon size='2x' icon={faTwitter} />
const instagramIcon = <FontAwesomeIcon size='2x' icon={faInstagram} />
const discordIcon = <FontAwesomeIcon size='2x' icon={faDiscord} />
const facebookIcon = <FontAwesomeIcon size='2x' icon={faFacebook} />

const SocialSection = () => {
    return (
        <section id='social' className='col-span-1 row-span-1 md:col-span-1 md:row-span-4 bg-background-main place-items-center md:border-l md:border-t-0 border-t border-text_dark' >
            <div className='grid md:grid-cols-3 place-items-center self-center h-full content-center items-center'>
                <div className='flex flex-row md:flex-col col-span-3 md:rows-span-4 justify-center'>
                    <span className='py-2 px-4 md:py-10 text-text_dark hover:text-accent'><a href='https://facebook.com'>{facebookIcon}</a></span>
                    <span className='py-2 px-4 md:py-10 text-text_dark hover:text-accent'><a href='https://twitter.com'>{twitterIcon}</a></span>
                    <span className='py-2 px-4 md:py-10 text-text_dark hover:text-accent'><a href='https://instagram.com'>{instagramIcon}</a></span>
                    <span className='py-2 px-4 md:py-10 text-text_dark hover:text-accent '><a href='https://discord.com'>{discordIcon}</a></span>
                </div>
            </div>
        </section>
    )
}

export default SocialSection