import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/SeharaM09/", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Any Article with <br className='max-md:hidden' />
        <span className='orange_gradient '>GPT-4</span>
      </h1>
      <h2 className='desc'>
        Streamline your reading with Summify, a free article summarization tool that condenses lengthy content into concise summaries. 
        Simplify the way you absorb information with this open-source app designed to deliver clear and streamlined insights.
      </h2>
    </header>
  );
};

export default Hero;
