import Link from "next/link";

import {
  RiLinkedinLine,
  RiTwitterXLine,
  RiSkypeLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiTelegramLine,
  RiGithubLine,
} from "react-icons/ri";
import { FcLike } from "react-icons/fc";


export const socialData = [
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/hadisur-nafi",
    Icon: RiLinkedinLine,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/hadisur_nafi",
    Icon: RiTwitterXLine,
  },
  {
    name: "Skype",
    link: "https://join.skype.com/invite/r3tRR2Depogx",
    Icon: RiSkypeLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com/Hadisur-Nafi",
    Icon: RiFacebookLine,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/qr/5EWIRIML57KOH1",
    Icon: RiWhatsappLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/hadisur.nafi",
    Icon: RiInstagramLine,
  },
  {
    name: "Telegram",
    link: "https://t.me/Hadisur.Nafi",
    Icon: RiTelegramLine,
  },
  {
    name: "Github",
    link: "https://github.com/hadisurnafi",
    Icon: RiGithubLine,
  },
  {
    name: "Smile",
    link: "https://hadisur.me",
    Icon: FcLike,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
