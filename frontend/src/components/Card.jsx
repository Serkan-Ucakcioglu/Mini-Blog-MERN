import React from "react";

function Card({ blog }) {
  return (
    <article className="flex flex-col shadow my-4">
      <a href="#" className="hover:opacity-75">
        <img src={blog?.url} loading="lazy" />
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
