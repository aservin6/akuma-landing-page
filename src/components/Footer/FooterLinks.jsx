import React from "react";
import { BsGlobe, BsGithub, BsLinkedin } from "react-icons/bs";

const FooterLinks = () => {
  return (
    <div className="py-8 font-semibold text-white bg-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid justify-between grid-cols-2">
          <ul className="flex flex-col gap-2 px-5">
            <a href="https://kbdfans.com/" className="p-1 hover:text-zinc-400">
              KBDFans
            </a>
            <a
              href="https://www.mightysetups.com/"
              className="p-1 hover:text-zinc-400"
            >
              MightySetups (Keyboard Creator)
            </a>
          </ul>
          <ul className="flex flex-col items-end gap-2 px-5">
            <li>
              <a
                className="flex items-center gap-3 p-1 hover:text-zinc-400"
                href="https://www.servinalex.com/"
              >
                Website <BsGlobe />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 p-1 hover:text-zinc-400"
                href="https://github.com/aservin6"
              >
                GitHub <BsGithub />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 p-1 hover:text-zinc-400"
                href="https://www.linkedin.com/in/servinalex/"
              >
                LinkedIn <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
