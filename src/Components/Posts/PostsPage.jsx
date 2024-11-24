import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay, FaQuoteRight, FaUser, FaUserTie } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";

const lifestyleCards = [
    {
        id: 1,
        type: "image",
        image: "/b1.jpg",
        title: "A Sunday night routine for a great start to the week",
        description: "Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.",
        name: "John Doe",
        profileImage: "pro2.jpg",
        date: "24 Jun 2024",
        comments: 23,
    },
    {
        id: 2,
        type: "carousel",
        images: [
            "/b2.jpg",
            "/b1.jpg",
            "/b3.jpg",
        ],
        title: "Top ways you deal with stress",
        description: "Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.",
        name: "Jane Smith",
        profileImage: "/pro1.jpg",
        date: "20 july 2024",
        comments: 45,
    },
    {
        id: 3,
        type: "iconText",
        icon: "🌟",
        title: "The top then things to do in your city or regional area",
        description: "Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.",
        name: "Alex Johnson",
        profileImage: "/pro.jpg",
        date: "12 Aug 2024",
        comments: 12,
    },
    {
        id: 4,
        type: "video",
        image: "/b3.jpg",
        title: "Your tips for growing an Instagram account",
        description: "Consulting is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Add the YouTube URL here
        name: "Sam Wilson",
        profileImage: "/pro2.jpg",
        date: "05 Dec 2024",
        comments: 7,
    },
];

const PostsPage = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Function to go to the next image
    const goToNext = (images) => {
        if (carouselIndex === images.length - 1) {
            setCarouselIndex(0); // Loop back to the first image
        } else {
            setCarouselIndex(carouselIndex + 1);
        }
    };

    // Function to go to the previous image
    const goToPrev = (images) => {
        if (carouselIndex === 0) {
            setCarouselIndex(images.length - 1); // Loop to the last image
        } else {
            setCarouselIndex(carouselIndex - 1);
        }
    };

    // Function to open the video player
    const openVideo = () => {
        setIsVideoOpen(true);
    };

    // Function to close the video player
    const closeVideo = () => {
        setIsVideoOpen(false);
    };

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                {lifestyleCards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white overflow-hidden"
                    >
                        {/* Image Card */}
                        {card.type === "image" && (
                            <div>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="py-8">
                                <div className="flex justify-start items-start gap-3">
                                        <div className="flex justify-start items-start gap-6 pb-6">
                                            <div className="flex justify-start items-center gap-3">
                                                <p className="text-gray-500 flex justify-start items-center gap-2"><FaUserTie />{card.name}</p>
                                            </div>
                                            <div className="flex justify-start items-center gap-3">
                                                <div className="bg-[#3756f7] w-[6px] h-[6px] rounded-full"></div>
                                            <p className="text-gray-500 flex justify-start items-center gap-2"><FaRegComment />{card.comments} Comments</p>
                                            </div>
                                            <div className="flex justify-start items-center gap-3">
                                            <div className="bg-[#3756f7] w-[6px] h-[6px] rounded-full"></div>
                                            <p className="text-gray-500 flex justify-start items-center gap-2"><LuCalendarDays />{card.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl text-[#232f4b] font-bold mb-6">{card.title}</h2>
                                    <p className="text-gray-600 mb-4">{card.description}</p>
                                    <div>
                                        <button className="text-[#232f4b] text-lg underline">Read More...</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Carousel Card */}
                        {card.type === "carousel" && (
                            <div>
                                <div className="relative">
                                    <img
                                        src={card.images[carouselIndex]}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                                    />
                                    {/* Next and Prev buttons */}
                                    <button
                                        onClick={() => goToPrev(card.images)}
                                        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-blue-600 bg-white p-3 rounded-full"
                                    >
                                        <IoMdArrowBack className="text-2xl"/> 
                                    </button>
                                    <button
                                        onClick={() => goToNext(card.images)}
                                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-600 bg-white p-3 rounded-full"
                                    >
                                        <IoMdArrowForward className="text-2xl"/>
                                    </button>
                                </div>
                                <div className="py-8">
                                <div className="flex justify-start items-start gap-3">
                                        <div className="flex justify-start items-start gap-6 pb-6">
                                            <div className="flex justify-start items-center gap-3">
                                                <p className="text-gray-500 flex justify-start items-center gap-2"><FaUserTie />{card.name}</p>
                                            </div>
                                            <div className="flex justify-start items-center gap-3">
                                                <div className="bg-[#3756f7] w-[6px] h-[6px] rounded-full"></div>
                                            <p className="text-gray-500 flex justify-start items-center gap-2"><FaRegComment />{card.comments} Comments</p>
                                            </div>
                                            <div className="flex justify-start items-center gap-3">
                                            <div className="bg-[#3756f7] w-[6px] h-[6px] rounded-full"></div>
                                            <p className="text-gray-500 flex justify-start items-center gap-2"><LuCalendarDays />{card.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl text-[#232f4b] font-bold mb-6">{card.title}</h2>
                                    <p className="text-gray-600 mb-4">{card.description}</p>
                                    <div>
                                        <button className="text-[#232f4b] text-lg underline">Read More...</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Icon & Text Card */}
                        {card.type === "iconText" && (
                            <div className="pl-6 pb-4 bg-[#f9faff]">
                                <div className="flex justify-between items-baseline gap-3">
                                        <div className="flex justify-start items-start gap-6 pb-6">
                                            <div className="flex justify-start items-center gap-3">
                                                <p className="text-gray-500 flex justify-start items-center gap-2"><FaUserTie />{card.name}</p>
                                            </div>
                                            <div className="flex justify-start items-center gap-3">
                                                <div className="bg-[#3756f7] w-[6px] h-[6px] rounded-full"></div>
                                            <p className="text-gray-500 flex justify-start items-center gap-2"><FaRegComment />{card.comments} Comments</p>
                                            </div>
                                            <div className="flex justify-start items-center gap-3">
                                            <div className="bg-[#3756f7] w-[6px] h-[6px] rounded-full"></div>
                                            <p className="text-gray-500 flex justify-start items-center gap-2"><LuCalendarDays />{card.date}</p>
                                            </div>
                                             
                                        </div>
                                        <div className="text-7xl flex justify-end items-end text-[#e5f0fb]"><FaQuoteRight/> </div>
                                    </div>
                                    <h2 className="text-3xl text-[#232f4b] font-bold mb-6">{card.title}</h2>
                                    <p className="text-gray-600 mb-4">{card.description}</p>
                                    <div>
                                        <button className="text-[#232f4b] text-lg underline">Read More...</button>
                                    </div>
                                
                            </div>
                        )}

                        {/* Video Card */}
                        {card.type === "video" && (
                            <div className="relative">
                                <div className="relative w-full h-full ">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Play Button with emitting effect */}
                                    <div className="absolute inset-0 bg-blue-600 opacity-60 flex items-center justify-center">
                                        <div className="relative flex items-center justify-center">
                                            {/* Emitting Effect */}
                                            <span className="absolute inline-flex h-16 w-16 rounded-full bg-white opacity-90 animate-ping delay-1000 "></span>
                                            <span className="absolute inline-flex h-12 w-12 rounded-full bg-white opacity-90 animate-ping delay-1000"></span>

                                            {/* Play Button Icon */}
                                            <button onClick={openVideo} className="relative z-10 flex items-center justify-center w-16 h-16 bg-white text-orange-600 rounded-full shadow-lg hover:bg-pink-600">
                                                <FaPlay className="text-2xl" />
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="py-8">
                                <div className="flex justify-start items-start gap-3">
                                        <div className="flex justify-start items-start gap-6 pb-6">
                                            <div className="flex justify-start items-center gap-3">
                                                <p className="text-gray-500 flex justify-start items-center gap-2"><FaUserTie />{card.name}</p>
                                            </div>
                                            <div className="flex justify-start items-center gap-3">
                                                <div className="bg-[#3756f7] w-[6px] h-[6px] rounded-full"></div>
                                            <p className="text-gray-500 flex justify-start items-center gap-2"><FaRegComment />{card.comments} Comments</p>
                                            </div>
                                            <div className="flex justify-start items-center gap-3">
                                            <div className="bg-[#3756f7] w-[6px] h-[6px] rounded-full"></div>
                                            <p className="text-gray-500 flex justify-start items-center gap-2"><LuCalendarDays />{card.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-3xl text-[#232f4b] font-bold mb-6">{card.title}</h2>
                                    <p className="text-gray-600 mb-4">{card.description}</p>
                                    <div>
                                        <button className="text-[#232f4b] text-lg underline">Read More...</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className="flex justify-start items-center mt-8">
                    <div className="flex justify-center items-center gap-3">
                        <button className="bg-[#ebf4fc] text-[#232f4b] px-4 py-3 hover:bg-[#3756f7] hover:text-white"><FaAngleLeft className="text-xl"/></button>
                        <button className="bg-[#3756f7] text-white px-4 py-2 font-bold hover:bg-[#3756f7] hover:text-white">1</button>
                        <button className="bg-[#ebf4fc] text-[#232f4b] px-4 py-2 font-bold hover:bg-[#3756f7] hover:text-white">2</button>
                        <button className="bg-[#ebf4fc] text-[#232f4b] px-4 py-2 font-bold hover:bg-[#3756f7] hover:text-white">3</button>
                        <button className="bg-[#ebf4fc] text-[#232f4b] px-4 py-2 font-bold hover:bg-[#3756f7] hover:text-white">4</button>
                        <button className="bg-[#ebf4fc] text-[#232f4b] px-4 py-3 hover:bg-[#3756f7] hover:text-white"><FaAngleRight className="text-xl"/></button>
                    </div>
                </div>
            </div>

            {/* Video Player Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative bg-white p-4 rounded-lg w-11/12 md:w-3/4">
                        <button
                            onClick={closeVideo}
                            className="absolute top-4 right-4 text-white text-2xl"
                        >
                            ❌
                        </button>
                        <iframe
                            width="100%"
                            height="400"
                            src={lifestyleCards[3].videoUrl}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Video"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostsPage;
