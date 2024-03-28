import Link from "next/link";
import {
  RiGithubLine ,
  RiLinkedinFill ,
  RiWhatsappLine  ,
  RiTwitterXFill ,
} from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://github.com/ansilrahman777"} className="hover:text-accent transition-all duration-300">
        <RiGithubLine  />
      </Link>

      <Link href={"https://leetcode.com/rahmanansil777/"} className="hover:text-accent transition-all duration-300">
        <SiLeetcode />
      </Link>

      <Link href={"https://wa.me/918592959403"} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine   />
      </Link>
      
      <Link href={"https://www.linkedin.com/in/ansilrahman777/"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill  />
      </Link>
      
      <Link href={"https://twitter.com/an__ziL___?t=43ekP9NNcZKv7QzDhSaA-w&s=09"} className="hover:text-accent transition-all duration-300">
        <RiTwitterXFill   />
      </Link>
    </div>
  );
};

export default Socials;
