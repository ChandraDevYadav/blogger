import React, { useState } from "react";

const ImageGallery = () => {
  const imageData = [
    {
      name: "John Doe",
      title: "Founder of XYZ",
      role: "Founder",
      mainImage: "/sp3.jpg",
      thumbnails: ["/sp3.jpg", "/high4.jpg", "/high5.jpg", "/sp2.jpg"],
      description: "John has been leading the team with exceptional vision and dedication.",
      date: "2024-11-21",
      comments: 15,
      profileImg: "https://via.placeholder.com/50",
      rating: 4.5,
    },
    {
      name: "Jane Smith",
      title: "Senior Editor",
      role: "Editor",
      mainImage: "/high4.jpg",
      thumbnails: ["/high4.jpg", "/sp3.jpg", "/sp2.jpg", "/high5.jpg"],
      description: "Jane is passionate about content creation and storytelling.",
      date: "2024-11-19",
      comments: 10,
      profileImg: "https://via.placeholder.com/50",
      rating: 4.8,
    },
    {
      name: "Sam Wilson",
      title: "Lead Developer",
      role: "Developer",
      mainImage: "/high5.jpg",
      thumbnails: ["/high5.jpg", "/sp3.jpg", "/sp2.jpg", "/high4.jpg"],
      description: "Sam focuses on building a robust and user-friendly platform.",
      date: "2024-11-20",
      comments: 8,
      profileImg: "https://via.placeholder.com/50",
      rating: 4.2,
    },
    {
      name: "Emily Johnson",
      title: "Creative Director",
      role: "Designer",
      mainImage: "/sp2.jpg",
      thumbnails: ["/sp2.jpg", "/sp3.jpg", "/high4.jpg", "/high5.jpg"],
      description: "Emily ensures our projects stand out with her unique designs.",
      date: "2024-11-18",
      comments: 12,
      profileImg: "https://via.placeholder.com/50",
      rating: 4.7,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(imageData[0]);
  const [mainImage, setMainImage] = useState(imageData[0].mainImage);

  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      {/* Left Side: Main Image and Thumbnails */}
      <div>
        {/* Main Image */}
        <div className="w-full overflow-hidden rounded-lg shadow-md mb-4">
          <img
            src={mainImage}
            alt={selectedImage.name}
            className="w-full h-72 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        {/* Thumbnails */}
        <div className="flex justify-center gap-4">
          {selectedImage.thumbnails.map((thumb, index) => (
            <button
              key={index}
              onClick={() => setMainImage(thumb)}
              className="focus:outline-none"
            >
              <img
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 rounded-lg shadow-md border-2 ${
                  mainImage === thumb
                    ? "border-blue-500"
                    : "border-gray-300"
                } hover:opacity-75 transition-opacity`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Side: Card Details */}
      <div className="space-y-6">
        {/* Profile and Details */}
        <div className="flex items-center gap-4">
          <img
            src={selectedImage.profileImg}
            alt={selectedImage.name}
            className="w-16 h-16 rounded-full border-2 border-gray-300"
          />
          <div>
            <h2 className="text-xl font-bold">{selectedImage.name}</h2>
            <p className="text-gray-500">{selectedImage.role}</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
          <p className="text-gray-700">{selectedImage.description}</p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{selectedImage.date}</span>
          <span>{selectedImage.comments} Comments</span>
          <span className="flex items-center gap-1">
            {"⭐".repeat(Math.floor(selectedImage.rating))}
            {selectedImage.rating % 1 ? "⭐" : ""}
          </span>
        </div>
        {/* Image Selection for Card */}
        <div className="grid grid-cols-2 gap-4">
          {imageData.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedImage(image);
                setMainImage(image.mainImage);
              }}
              className="focus:outline-none"
            >
              <img
                src={image.mainImage}
                alt={image.name}
                className="w-full h-32 rounded-lg shadow-md hover:opacity-75 transition-opacity"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
