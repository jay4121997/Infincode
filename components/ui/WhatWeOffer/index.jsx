import SectionWrapper from "../../SectionWrapper";
import {
  AiOutlineMobile,
  AiOutlineBarChart,
} from "react-icons/ai";
import {
  VscGlobe,
  VscTools,
} from "react-icons/vsc";
import {
  FaDrawPolygon,
  FaSyncAlt,
} from "react-icons/fa";
import HeadingText from "../HeadingText";

const WhatWeOffer = () => {
  const features = [
    {
      icon: <VscGlobe />,
      title: "Website Design & Development",
      desc: "Create visually appealing, responsive websites that provide an optimal user experience and meet business goals.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Speed Optimization",
      desc: "Enhance website performance with optimized load times, ensuring a smooth user experience across all devices.",
    },
    {
      icon: <AiOutlineBarChart />,
      title: "SEO (Search Engine Optimization)",
      desc: "Optimize websites to improve search engine visibility, attracting more organic traffic and increasing online presence.",
    },
    {
      icon: <FaDrawPolygon />,
      title: "Brand Design",
      desc: "Develop a cohesive brand identity, including logos and visuals, to make a lasting impact on your target audience.",
    },
    {
      icon: <VscTools />,
      title: "Web Hosting & Management",
      desc: "Provide reliable web hosting with continuous maintenance to ensure security, updates, and smooth performance.",
    },
    // {
    //   icon: <AiOutlineMobile />,
    //   title: "Mobile App Development",
    //   desc: "Develop cross-platform or native mobile applications for Android and iOS, offering seamless mobile experiences.",
    // },
    {
      icon: <FaDrawPolygon />,
      title: "UI/UX Design",
      desc: "Enhance usability and aesthetics through user-centered design, creating engaging customer journeys.",
    },
  ];

  return (
    <SectionWrapper id='WhatWeOffer'>
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-6 text-gray-700 md:px-12"
      >
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <HeadingText text="What We Offer" />          
          <p className="text-lg text-gray-600">
            Discover our favorite tools and technologies that empower your
            business solutions.
          </p>
        </div>
        <div className="mt-20 grid gap-y-12 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-x-4 items-start transition-transform transform hover:scale-105"
            >
              <div
                className="flex-none w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-3xl text-white shadow-lg 
               hover:rotate-12 hover:shadow-2xl transition-all duration-300"
              >
                {item.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-base text-gray-600">{item.desc}</p>
              </div>
            </li>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatWeOffer;
