"use client";

import Link from "next/link";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

function VideoPlayer({ url, price, id }) {
  return (
    <Link href={`product/${id}`}>
      <div className="bg-red-600">
        <Player
          playsInline
          poster={url}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
        <div>
          <h3>Hello</h3>
          <h3>{price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default VideoPlayer;
