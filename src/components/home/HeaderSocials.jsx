/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/shanghaihourai/"
        className="home__social-link"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a href="https://twitter.com/DQayin94250" className="home__social-link">
        <i class="fa-brands fa-twitter"></i>
      </a>

      <a href="https://github.com/PhilipClyne" className="home__social-link">
        <i class="fa-brands fa-github"></i>
      </a>

      <a
        href="https://discord.com/channels/662267976984297473/999550150705954856"
        className="home__social-link"
      >
        <i class="fa-brands fa-discord"></i>
      </a>

      <a
        href="https://www.facebook.com/noriki.korezaki"
        className="home__social-link"
      >
        <i class="fa-brands fa-facebook"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
