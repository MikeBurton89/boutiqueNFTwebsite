import React from 'react'
import HeroSection from './HeroSection';
import SocialSection from './SocialSection';
import MarqueeSection from './Marquee/MarqueeSection';


const Main = () => {
    return (
        <main className='h-full grid grid-cols-1 grid-rows-6 md:grid-cols-4 md:grid-rows-6'>
            <HeroSection />
            <SocialSection />
            <MarqueeSection />
        </main >
    )
}

export default Main