import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoCard = ({ photo }) => {
  return (
    <Link
      href={`photos/${photo.id}`}
      className="relative bg-gray-000 hover:bg-opacity-95 rounded-md"
    >
      <Image
        className="rounded-md w-full h-full object-cover"
        src={photo?.url}
        alt={photo.title}
        width={700}
        height={700}
      />

      <div className="absolute rounded-md  top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 flex items-center justify-center bg-black bg-opacity-50 text-white transition-opacity duration-300 ease-in-out">
        <h2 className=" font-semibold">
          {photo.title} {"=>"}
        </h2>
      </div>
    </Link>
  );
};

export default PhotoCard;
