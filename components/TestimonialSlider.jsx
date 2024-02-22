import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Saydur Rahman Rifat",
    position: "Customer",
    message:
      "Exceptional SOC services provided by Md. Hadisur Rahman. Their proactive monitoring and swift response capabilities have significantly bolstered our cybersecurity defenses, providing us with peace of mind knowing our digital assets are well-protected!",
  },
  {
    image: "/t-avt-2.png",
    name: "Md. Abu Bakar Siddiq Mim",
    position: "Customer",
    message:
      "We engaged Md. Hadisur Rahman for VAPT services and were thoroughly impressed with their comprehensive approach. They meticulously identified vulnerabilities in our systems and provided actionable recommendations to fortify our security posture. Their expertise has been invaluable in safeguarding our organization against potential cyber threats!",
  },
  {
    image: "/t-avt-3.png",
    name: "Md. Zobayer Hasan Nayem",
    position: "Customer",
    message:
      "The digital forensic expertise demonstrated by Md. Hadisur Rahman was instrumental in resolving a critical security incident. Their team conducted a thorough investigation, uncovering crucial evidence and providing invaluable insights that enabled us to mitigate the impact and prevent future occurrences. We highly recommend their services for anyone in need of expert digital forensic assistance!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
