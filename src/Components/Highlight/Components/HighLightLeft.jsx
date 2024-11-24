import React from "react";

const TodayHighlight = () => {
  const highlights = [
    {
      title: "Traveling Makes You More Inteligent and More Energetic",
      description:"You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.",
      category: "Travel",
      author: "John Doe",
      date: "2024-11-15",
      image: "/high1.jpg",
      profileImage: "/pro.jpg",
    },
    {
      title: "12 Things to See and Find Out in Bergen, Norway",
      description:"You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.",
      category: "Travel",
      author: "Jane Smith",
      date: "2024-11-15",
      image: "/high2.jpg",
      profileImage: "/pro1.jpg",
    },
    {
      title: "Healthy Daily Rutine For Your Healthy Lifestyle",
      description:"You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.",
      category: "Travel",
      author: "Alex Johnson",
      date: "2024-11-15",
      image: "/high3.jpg",
      profileImage: "/pro2.jpg",
    },
    {
      title: "Perfect Photo Clicking Idea You Must Khow About.",
      description:"You can customize the view Blog post with author simple mouse click and immediately see the result of your changes.",
      category: "Travel",
      author: "Alex Johnson",
      date: "2024-11-15",
      image: "/high4.jpg",
      profileImage: "/pro.jpg",
    },
    {
        title: "Mastering the Art of Minimalist Design",
        description: "Learn how to simplify your designs for maximum impact with practical tips and techniques.",
        category: "Design",
        author: "Sophia Carter",
        date: "2024-11-16",
        image: "/high5.jpg",
        profileImage: "/pro1.jpg",
      },
      {
        title: "10 Life-Changing Productivity Hacks for 2024",
        description: "Discover innovative ways to enhance your productivity and make the most of your time this year.",
        category: "Lifestyle",
        author: "Michael Lee",
        date: "2024-11-17",
        image: "/high6.jpg",
        profileImage: "/pro2.jpg",
      },
  ];

  return (
    <div className="">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 border p-7 border-[#eeeeee]">
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
              <p className="text-md leading-relaxed text-gray-600 text-start my-4">{highlight.description}</p>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayHighlight;
