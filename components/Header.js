import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 lg:px-0 lg:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <Image
              priority={true}
              src={"/logo.png"}
              alt="ANSIL RAHMAN"
              width={220}
              height={48}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
