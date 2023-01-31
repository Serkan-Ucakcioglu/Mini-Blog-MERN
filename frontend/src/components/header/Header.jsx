import React from "react";
import HeadTitle from "./HeadTitle";

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
        <HeadTitle />
      </nav>
    </>
  );
}

export default Header;
