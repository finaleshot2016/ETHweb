import React from 'react';
import AboutCard from './AboutCard';
import terminal from '../assets/dogethstyleroadmap.png'

const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div id="roadmap">
        <img className='justify-center' src={terminal} alt="/" />

          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            {/* Card */}
            <AboutCard heading='Phase 1' text='Contract Deployment, Uniswap Listing, Marketing Campaign & 200 Holders' />
            <AboutCard heading='Phase 2' text='Website Live, More Marketing Campaign, CMC and CG Listing & 500 Holders.' />
            <AboutCard heading='Phase 3' text='Website Upgrade, Dashboard, Whitepaper, More Marketing Campaign & 1,000 Holders.' />
            <AboutCard heading='Phase 4' text='Usecase Reveal & 5,000 Holders.' />
          </div>
          <div>
<iframe className='py-4 w-full aspect-video' src="https://dexscreener.com/bsc/0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae" title="dexchart"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
