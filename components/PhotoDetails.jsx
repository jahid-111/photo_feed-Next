import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import React from "react";

const apiData = process.env.BASE_API_URL;

const PhotoDetails = async ({ id, lang }) => {
  const response = await fetch(`${apiData}/photos/${id}`);

  const photo = await response.json();

  const dictionary = await getDictionary(lang);

  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10 md:px-24 px-2 ">
      <div className="col-span-12 lg:col-span-8 border rounded-md p-2">
        <Image
          className="max-w-full h-full max-h-[70vh] mx-auto shadow-xl shadow-slate-950 rounded-xl"
          src={photo?.url}
          width={1000}
          height={100}
          alt=""
        />
      </div>

      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">{photo?.title}</h2>

        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {photo?.tags?.map((tag) => `#${tag},  `)}
        </div>
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          <div className="flex justify-between">
            <span>{dictionary?.views}</span>
            <span className="font-bold">{photo?.views}</span>
          </div>
          <div className="flex justify-between">
            <span>Share</span>
            <span className="font-bold">{photo?.share}</span>
          </div>
          <div className="flex justify-between">
            <span>Up loaded</span>
            <span className="font-bold">{photo?.uploaded}</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <Image
                className="size-12 lg:size-14 rounded-full border"
                width={100}
                height={100}
                src={photo?.author?.avatar}
                alt="avatar"
              />
              <div className="spacy-y-3">
                <h6 className="lg:text-lg font-bold">{photo?.author?.name}</h6>
                <p className="text-black/60 text-xs lg:text-sm">
                  {photo?.author?.followers}
                </p>
              </div>
            </div>
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/assets/icons/follow.svg"
                width={100}
                height={100}
                className="w-5 h-5"
                alt=""
              />
              Follow
            </button>
          </div>
          <p className="text-xs lg:text-sm text-black/60">
            {photo?.author?.bio}
          </p>
        </div>
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/assets/icons/heart.svg"
                width={100}
                height={100}
                className="w-5 h-5"
                alt=""
              />
              100
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/assets/icons/save.svg"
                width={100}
                height={100}
                className="w-5 h-5"
                alt=""
              />
              Save
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/assets/icons/share.svg"
                className="w-5 h-5"
                alt=""
                width={100}
                height={100}
              />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
