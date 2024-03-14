"use client";

import React, { useState } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

function Details() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="grid grid-cols-fluid gap-5 pt-5 px-5">
        <div>
          <Player
            playsInline
            // poster={url}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
        <div>
          <p className="py-5 font-semibold text-xl">Quality Shop</p>
          <div className="flex items-center gap-5">
            <button
              className="bg-blue-500 text-white p-3"
              type="button"
              onClick={() => setCounter((pre) => pre + 1)}
            >
              +
            </button>
            <p>{counter}</p>
            <button
              className="bg-blue-500 text-white p-3"
              type="button"
              onClick={() => setCounter((pre) => pre - 1)}
            >
              -
            </button>
          </div>
          <p className="py-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            ullam explicabo natus nulla? Laborum, nemo. Ut ex, aliquid rem
            reiciendis, quae tenetur aut delectus cum odio illum pariatur
            exercitationem! Mollitia!
          </p>
          <button className="bg-blue-500 text-white p-2 rounded">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
