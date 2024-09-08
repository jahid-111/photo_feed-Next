import React from "react";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }) => {
  return (
    <div className=" grid xl:grid-cols-3 md:grid-cols-2 gap-3">
      {photos?.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
