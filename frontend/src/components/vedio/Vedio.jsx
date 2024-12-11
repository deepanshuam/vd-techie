import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const VideoSection = () => {
  return (
    <div className="bg-[#facc15] py-12 px-4"> {/* Background color and padding */}
      <div className="container mx-auto">

        {/* Main Video Player (above Swiper) */}
        <div className="mb-8 flex justify-center"> {/* Center the video */}
          <video
            controls
            className="w-[80%] h-[500px] object-cover rounded-lg" 
            src="https://www.w3schools.com/html/movie.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Description Text */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
            Watch Our Latest Courses
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Learn from the best industry professionals with our engaging video tutorials.
          </p>
        </div>

        {/* Swiper Video Gallery */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {[
            'https://www.w3schools.com/html/movie.mp4',
            'https://www.w3schools.com/html/movie.mp4',
            'https://www.w3schools.com/html/movie.mp4',
            'https://www.w3schools.com/html/movie.mp4',
          ].map((video, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <video
                  controls
                  className="w-full h-40 object-cover rounded-lg"
                  src={video}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoSection;
