import React from 'react'
import Marquee from 'react-fast-marquee';
import MarqueeElement from './MarqueeElement';
import { imagesData } from './imagesData'

const MarqueeSection = () => {
    return (
        <section id='slideshow' className='col-span-1 row-span-2 md:col-span-4 md:row-span-2 bg-background-main border-t border-text_dark' >
            <Marquee speed={20} gradient={false}>
                {imagesData.map((image) => <MarqueeElement key={image.name} src={image.src} title={image.title} alt={image.alt} loading='lazy' />)}
            </Marquee>
        </section>
    )
}

export default MarqueeSection