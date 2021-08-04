import React from "react";
import Avatar from "@material-ui/core/Avatar";

const AvatarElem = ({ alt, src, size }) => {
  let avatarSize = "h-10 w-10";
  if (size === "sm") {
    avatarSize = "h-6 w-6";
  }

  if (size === "md") {
    avatarSize = "h-8 w-8";
  }

  if (size === "lg") {
    avatarSize = "h-10 w-10";
  }

  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      class={`${avatarSize} bg-cover bg-center inline-block rounded-full ring-1 ring-white`}
      src={src}
      alt={alt}
    />
  );
};

export default AvatarElem;
