"use client";

import { BsCartCheckFill } from "react-icons/bs";

function Nav() {
  return (
    <div className="flex justify-between flex-wrap items-center px-5 min-h-[11vh] bg-gray-500 text-white">
      <h1>Shop</h1>

      <ul>
        <li>
          <BsCartCheckFill />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
