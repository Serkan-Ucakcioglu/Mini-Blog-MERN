import React from "react";
export interface DataFace {
  _id: string;
  category: String;
  description: String;
  url: String;
}
export interface IBlog {
  blog: DataFace;
}

function Card({ blog }: IBlog) {
  return (
    <article className="flex flex-col shadow my-4 w-[500px]">
      <a href="#" className="hover:opacity-75">
        <img
          src={blog?.url?.toString()}
          loading="lazy"
          className="h-[400px] w-full object-cover"
        />
      </a>
      <div className="bg-white flex flex-col justify-start p-6">
        <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">
          {blog?.category}
        </a>
        <a href="#" className="pb-6">
          {blog?.description}
        </a>
      </div>
    </article>
  );
}

export default Card;
