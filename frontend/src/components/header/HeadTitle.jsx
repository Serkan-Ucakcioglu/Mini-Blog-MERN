import React from "react";

function HeadTitle() {
  return (
    <div>
      <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
        <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
          Technology
        </a>
        <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
          Car
        </a>
        <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
          Finance
        </a>
      </div>
    </div>
  );
}

export default HeadTitle;
