import React from "react";
import Image from "next/image";

const Avatar = (props: any) => {
  const userName = props.userName;
  return (
    <>
      <div className="relative h-[100px] w-[100px] m-auto">
        <Image
          className="object-contain rounded-full shadow-md xs:absolute md:mx-auto md:left-0 md:right-0"
          src={`https://avatars.githubusercontent.com/${userName}`}
          alt="github avatar"
          width={`96`}
          height={`96`}
        />
      </div>
    </>
  );
};

export default Avatar;
