import React from "react";

const SponsoredNews = () => {
  const highlights = [
    {
      title: "Top Most Beautiful Scenery in The World.",
      description:"You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.",
      category: "Travel",
      author: "John Doe",
      date: "2024-11-15",
      image: "/sp1.jpg",
      profileImage: "/pro.jpg",
    },
    {
      title: "Perfect Photo Clicking Idea You Must Khow About.",
      description:"You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.",
      category: "Travel",
      author: "Jane Smith",
      date: "2024-11-15",
      image: "/sp2.jpg",
      profileImage: "/pro1.jpg",
    },
    {
      title: "Top Most Beautiful Scenery in The World.",
      description:"You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.",
      category: "Travel",
      author: "Alex Johnson",
      date: "2024-11-15",
      image: "/sp3.jpg",
      profileImage: "/pro2.jpg",
    },
    {
      title: "Top Most Beautiful Scenery in The World.",
      description:"You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.",
      category: "Travel",
      author: "Alex Johnson",
      date: "2024-11-15",
      image: "/sp4.jpg",
      profileImage: "/pro.jpg",
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4 text-[#444444]">Sponsored News</h2>
      <div className="flex justify-start items-start gap-3 mb-8">
        <div className="w-28 h-[5px] rounded-full bg-[#0d6efd]"></div>
        <div className="w-8 h-[5px] rounded-full bg-[#0d6efd]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="relative overflow-hidden group hover:rounded-md"
          >
            {/* Image Wrapper */}
            <div className="relative w-full overflow-hidden hover:rounded-md">
              <img
                src={highlight.image}
                alt=""
                className="w-full h-full object-fill rounded-md transform hover:rounded-md group-hover:scale-125 hover:grayscale transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 flex justify-start">
                <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm opacity-80">
                  {highlight.category}
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex justify-start items-start border-b border-[#eeeeee] pb-2">
             <div>
             <h3 className="text-xl font-bold text-[#444444] hover:text-[#0d6efd] my-6">{highlight.title}</h3>

              <div className="flex justify-start items-center gap-2">
                <img
                  src={highlight.profileImage}
                  alt={highlight.author}
                  className="w-10 h-10 rounded-full mr-2"
                />
                    <p className="text-md text-[#003aae] hover:text-[#0d6efd]">{highlight.author}</p>
                <div className="flex justify-start items-center gap-2 ml-2">
                    <div className="bg-[#003aae] w-[6px] h-[6px] rounded-full"></div>
                <p className="text-md text-[#003aae] hover:text-[#0d6efd] text-start my-2">{highlight.date}</p>
                </div>
              </div>
              {/* <p className="text-md leading-relaxed text-gray-600 text-start my-4">{highlight.description}</p> */}
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsoredNews;
