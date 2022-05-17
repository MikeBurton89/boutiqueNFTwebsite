import React from 'react'
import Marquee from 'react-fast-marquee';
import MarqueeElement from './MarqueeElement';
import { imagesData } from './imagesData'
import { Fade } from 'react-reveal'

const MarqueeSection = () => {
    return (
        <section id='slideshow' className='col-span-1 row-span-2 md:col-span-4 md:row-span-2 bg-background-main border-t border-text_dark' >
            <Fade>
                <Marquee delay={1} speed={25} gradient={false}>
                    {imagesData.map((image) => <MarqueeElement key={image.name} src={image.src} title={image.title} alt={image.alt} loading='lazy' />)}
                </Marquee>
            </Fade>

        </section>
    )
}

export default MarqueeSection