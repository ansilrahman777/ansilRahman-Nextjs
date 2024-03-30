import Image from "next/image";

const Avatar = () => {
  return (
    <div className="opacity-60 xl:opacity-100 xl:flex xl:max-w-none">
      <Image
        src={"/avatar-about.png"}
        // A man with a beard and black glasses, black clothes, standing in a 4/3 side, white background
        alt="alt"
        width={737}
        height={678}
        className="w-full h-full"
      />
    </div>
  );
};

export default Avatar;
