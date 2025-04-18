import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/Ondig0">
         <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/ondi20">
        <FaGithub />
      </a>
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;