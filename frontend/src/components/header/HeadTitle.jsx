import React from "react";
import { Link } from "react-router-dom";

function HeadTitle() {
  return (
    <div>
      <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
          Technology
        </a>
        <Link to="/car" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
          Car
        </Link>
        <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
          Finance
        </a>
      </div>
    </div>
  );
}

export default HeadTitle;
