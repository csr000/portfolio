import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/csr000" target="_blank">
      <div>
        <BsGithub />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/csr000/" target="_blank">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="https://twitter.com/_csr000" target="_blank">
      <div>
        <BsTwitter />
      </div>
    </a>
  </div>
);

export default SocialMedia;
