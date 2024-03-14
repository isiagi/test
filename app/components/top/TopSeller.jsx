import React from "react";
import HeaderBanner from "../../common/HeaderBanner/HeaderBanner";
import VideoPlayer from "../videoPlayer/VideoPlayer";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    price: "Shs 40000",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    price: "Shs 50000",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    price: "Shs 90000",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    price: "Shs 10000",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    price: "Shs 4000",
    id: 5,
  },
];

function TopSeller() {
  return (
    <div className="px-5">
      <HeaderBanner />
      <div className="grid grid-cols-fluid gap-5">
        {slideImages.map(({ url, price, id }) => (
          <VideoPlayer key={id} url={url} price={price} id={id} />
        ))}
      </div>
    </div>
  );
}

export default TopSeller;
