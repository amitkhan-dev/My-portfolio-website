"use client";

import { FaGithub,FaLinkedinIn, FaFacebookF ,} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialData = [
  {
    name: "GitHub",
    url: "https://github.com/amitkhan-dev",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amit-khans",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    url: "https://twitter.com/yourusername",
    icon: FaXTwitter,
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/",
    icon: FaFacebookF,
  },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialData.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}