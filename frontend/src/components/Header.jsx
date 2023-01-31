import React from "react";

function Header() {
  return (
    <>
      <header class="w-full container mx-auto">
        <div class="flex flex-col items-center py-12">
          <a
            class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
            href="#"
          >
            Minimal Blog
          </a>
          <p class="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
        </div>
      </header>

      <nav class="w-full py-4 border-t border-b bg-gray-100">
        <div class="block sm:hidden">
          <a
            href="#"
            class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
          >
            Topics
          </a>
        </div>
        <div>
          <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Technology
            </a>
            <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Automotive
            </a>
            <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Finance
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
