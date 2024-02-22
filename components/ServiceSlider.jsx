import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { MdOutlineSecurity } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { TbNetwork } from "react-icons/tb";
import { SiHackaday } from "react-icons/si";


import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: MdOutlineSecurity,
    title: "SOC Services",
    description: "Proactive monitoring and rapid response for cyber threats to safeguard your digital assets.",
  },
  {
    Icon: GrShieldSecurity,
    title: "VAPT",
    description: "Identifying vulnerabilities and testing defenses to fortify your cybersecurity posture.",
  },
  {
    Icon: TbNetwork,
    title: "Network Security",
    description: "Comprehensive solutions to protect your network infrastructure from unauthorized access and data breaches.",
  },
  {
    Icon: RxDesktop,
    title: "Digital Forensic",
    description: "Expert analysis and investigation to uncover digital evidence and mitigate risks.",
  },
  {
    Icon: SiHackaday,
    title: "Ethical Hacking",
    description: "Simulating real-world attacks to discover weaknesses and enhance your system's resilience.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
