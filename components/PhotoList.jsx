import React from "react";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }) => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
      {photos?.map((photo, index) => {
        const rowSpan = index % 2 === 0 ? "row-span-2" : "row-span-1";
        return (
          <div key={photo.id} className={`w-full ${rowSpan}`}>
            <PhotoCard photo={photo} />
          </div>
        );
      })}
    </div>
  );
};

export default PhotoList;
