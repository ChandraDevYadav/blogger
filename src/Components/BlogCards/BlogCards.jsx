import React from 'react';

const BlogCards = () => {
  const blogCards = [
    {
      category: "Fashion",
      title: "What’s In Trend In Women's Fashion Summer?",
      description: "You can customize the view Blog posts with a simple mouse click and immediately see the result of your changes.",
      author: "By Robert",
      date: "20 Nov 2022",
      image: "/card1.jpg",
      profile: "/pro.jpg"
    },
    {
      category: "Travel",
      title: "Traveling Makes You More Interesting",
      author: "By Robert",
      date: "20 Nov 2022",
      image: "/card2.jpg"
    },
    {
      category: "Food",
      title: "Top 10 Healthy Food",
      author: "By Robert",
      date: "20 Nov 2022",
      image: "/card3.jpg"
    },
    {
      category: "Business",
      title: "What Makes a Leader?",
      author: "By Robert",
      date: "20 Nov 2022",
      image: "/card4.jpg"
    }
  ];

  return (
    <div className="grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-4">
      {blogCards.map((card, index) => (
        <div
          key={index}
          className={`relative overflow-hidden group rounded-xl ${
            index === 0
              ? "row-span-3 col-span-2"
              : index === 1
              ? "col-span-2"
              : "row-span-2 col-span-1"
          }`}
        >
          <div className="relative w-full h-full">
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-xl transform group-hover:scale-125 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end text-start text-white transition-all duration-300 group-hover:bg-opacity-50 z-10 p-4">
              <div>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold text-lg opacity-80">
                  {card.category}
                </button>
                <h2
                  className={`font-bold ${
                    index === 0
                      ? "text-3xl my-6" // For the first large card
                      : index === 1
                      ? "text-2xl my-4" // For the second card
                      : "text-xl my-3" // For the remaining smaller cards
                  }`}
                >
                  {card.title}
                </h2>
                {card.description && (
                  <p className="text-gray-100 text-lg mb-6">{card.description}</p>
                )}
                <div className="flex justify-start items-center gap-3">
                  {card.profile && ( // Conditionally render profile image
                    <img
                      src={card.profile}
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <p className="text-gray-100 text-sm">{card.author}</p>
                  <p className="text-gray-100 text-sm">{card.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
