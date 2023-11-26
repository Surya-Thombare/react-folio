import React from "react";
import Link from "next/link";

const MenuSlider = () => {
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      <li>
        <Link href="/about-me">About Me</Link>
      </li>
      <li>
        <Link href="/experience">Experience</Link>
      </li>
      <li>
        <Link href="/resume">Resume</Link>
      </li>
      {/* <li>
        <Link href="/machine_coding">React Machine Coding</Link>
      </li> */}
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/contact-me">Contact Me</Link>
      </li>
    </ul>
  );
};

export default MenuSlider;
