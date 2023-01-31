import React from "react";
import { Link } from "react-router-dom";

function HeadTitle() {
  return (
    <div>
      <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
        <Link to="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
          Technology
        </Link>
        <Link to="/car" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
          Car
        </Link>
        <Link
          to="/finance"
          className="hover:bg-gray-400 rounded py-2 px-4 mx-2"
        >
          Finance
        </Link>
      </div>
    </div>
  );
}

export default HeadTitle;
