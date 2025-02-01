import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function ImageSlider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const toggleContentDisplay = (index) => {
    setCurrentIndex(currentIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveDotIndex(newIndex),
    customPaging: (i) => (
      <button
        className={`w-3 h-3 rounded-full ${
          i === activeDotIndex ? "bg-aqua" : "bg-white"
        }`}
      />
    ),
    appendDots: (dots) => (
      <div className="flex items-center justify-center mt-4 space-x-2">
        {dots}
      </div>
    ),
  };


  return (
    <div className="w-3/4 m-auto">
      <div className="mt-0">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={d.title} className="bg-white h-auto text-black rounded-xl">
              <div className="h-60 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={d.image} alt="" className="h-full w-full rounded-t-xl" />
              </div>

              <div className="flex flex-col items-center justify-center gap-0 p-4">
                <div className="text-center">
                  <h1 className="text-xl font-bold">{d.title}</h1>
                  <p className="text-xl font-semibold mt-0 text-slate-600">{`By ${d.evangelist}`}</p>
                </div>
                {currentIndex === index ? "" : <p className="text-left py-2 ">{d.summary}</p>}

                {currentIndex === index && (
                  <div className="transition-all pb-1">{d.description}</div>
                )}
                <div className="flex gap-2 w-full flex-col md:flex-row md:gap-9 items-center justify-center">
                  <button
                    className=" bg-indigo-600 text-white text-lg px-6 py-1 rounded-xl hover:bg-indigo-500"
                    onClick={() => toggleContentDisplay(index)}
                  >
                    {currentIndex === index ? "View less" : "View more"}
                  </button>
                  {d.video_url && (
                    <a
                      className="bg-black text-white text-md px-6 py-1.5 rounded-xl hover:bg-slate-600"
                     href={d.video_url}
                     target="_blank"
                    >
                     
                      Watch Sermon
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
