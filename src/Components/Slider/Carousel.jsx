import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const carouselData = [
    {
      image: "/caro1.jpg",
      date: "2024-11-01",
      title: "Healthy rutine for your healthy lifestyle.",
    },
    {
      image: "/caro2.jpg",
      date: "2024-11-05",
      title: "5 unbelievable secret about choosing right fuirniture",
    },
    {
      image: "/caro3.jpg",
      date: "2024-11-10",
      title: "Best tourism site all over the world.",
    },
    // {
    //   image: "/caro1.jpg",
    //   date: "2024-11-10",
    //   title: "Innovations in Technology",
    // },
  ];

  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 3000,
    cssEase: "ease-in",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20">
      <div className="flex justify-start">
      <button className="text-md bg-blue-600 text-white py-2 px-4 rounded-tl-xl rounded-tr-xl">Breaking News</button>
      </div>
      <div className="slider-container mx-auto bg-[#e9edff] shadow-sm">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index} className="px-5 py-5 border border-[#dfdede]">
            {/* Image */}
            <div className="flex justify-start items-center gap-4">
              <img src={item.image} className="w-28 h-24 shadow-sm rounded-md" alt="" />
              <div className="">
              <p className="text-md text-start text-[#777777]">{item.date}</p>
              <h3 className="text-lg mt-2 font-semibold text-start text-[#444444]">{item.title}</h3>
              </div>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default MultipleItems;
