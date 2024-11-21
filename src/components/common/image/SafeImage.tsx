"use client";
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";
type SafeImageProps = ImageProps & {
  fallbackSrc?: string;
  loaderSrc?: string;
};
const SafeImage = ({
  fallbackSrc,
  loaderSrc,
  alt,
  ...props
}: SafeImageProps) => {
  const [src, setSrc] = useState(props.src);
  return (
    <Image
      {...props}
      alt={alt}
      src={src}
      placeholder="blur"
      blurDataURL={loaderSrc ?? "/assets/icons/loading.gif"}
      onError={(e) => {
        fallbackSrc && setSrc(fallbackSrc);
      }}
    />
  );
};

export default SafeImage;
