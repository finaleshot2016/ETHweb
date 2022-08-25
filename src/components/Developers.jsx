import React from 'react';
import terminal from '../assets/fee.png'
import terminal1 from '../assets/DOGETH.png'

const Developers = () => {
  return (
    <div id="tokenomics" className='w-full text-black bg-white'>
      <div className='max-w-[1540px] mx-auto px-4 py-16 md:flex'>
        <div>
        <img className='ml-36 max-w-[100px] object-contain' src={terminal1} alt="/" />
          <p className='ml-auto max-w-[500px] text-center text-2xl'>
          DOGETH is the most remarkable and innovative Dog Meme coin on the blockchain.<br />
          Of course, DOGETH STYLE will have a very fair and degen-friendly tax that will be<br />
          given to the community and used to build other features and keep it a top-tier dog meme coin.<br />
          </p><br />
          

        </div>
        <div className='flex justify-center w-full py-2'>
            <img className='ml-auto max-w-[750px]' src={terminal} alt="/" />
        </div>
      </div>

    </div>
  );
};

export default Developers;
