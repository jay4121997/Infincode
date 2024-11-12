import SectionWrapper from "../../SectionWrapper";
import {
  AiFillOpenAI,
  AiOutlineBarChart,
  AiFillMerge,
  AiOutlineMobile,
  AiOutlineSecurityScan,
} from "react-icons/ai";
import {
  VscUngroupByRefType,
  VscDashboard,
  VscGlobe,
  VscCloud,
  VscTools,
  VscServer,
} from "react-icons/vsc";
import {
  FaDatabase,
  FaLaptopCode,
  FaDrawPolygon,
  FaShoppingCart,
  FaSyncAlt,
} from "react-icons/fa";

const WhatWeOffer = () => {
  const features = [
    {
      icon: <VscGlobe />,
      title: "Web Development & Management",
      desc: "Build and manage websites that are responsive, user-friendly, and optimized for both performance and SEO, ensuring a smooth digital presence.",
    },
    {
      icon: <AiFillOpenAI />,
      title: "Generative AI & Machine Learning",
      desc: "Unleash creativity and efficiency with innovative AI and machine learning solutions customized to elevate your business.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Development",
      desc: "Build and optimize e-commerce platforms with a focus on secure payment gateways, product management, and customer experience.",
    },
    {
      icon: <FaDatabase />,
      title: "API Development & Integrations",
      desc: "Build and integrate APIs to connect applications, enabling seamless data exchange and functionality across platforms.",
    },
    {
      icon: <VscServer />,
      title: "DevOps & CI/CD",
      desc: "Implement DevOps practices for smooth software development and deployment with CI/CD, automated testing, and monitoring.",
    },
    // {
    //   icon: <AiOutlineBarChart />,
    //   title: "Data Analytics & Business Insights",
    //   desc: "Turn raw data into actionable insights for better decision-making and strategic growth through comprehensive data analysis.",
    // },
    // {
    //   icon: <VscUngroupByRefType />,
    //   title: "ETL & Data Pipelines",
    //   desc: "Automate and streamline data flows, integrating sources for real-time processing and effective data management.",
    // },
    // {
    //   icon: <VscCloud />,
    //   title: "Cloud Computing & Infrastructure",
    //   desc: "Harness the power of cloud solutions to scale efficiently, with secure, adaptable infrastructure tailored to your needs.",
    // },
    {
      icon: <AiOutlineMobile />,
      title: "Mobile App Development",
      desc: "Develop cross-platform or native mobile applications for Android and iOS, providing seamless mobile experiences.",
    },
    // {
    //   icon: <FaLaptopCode />,
    //   title: "Custom Software Development",
    //   desc: "Create tailored software solutions to meet unique client needs, from small applications to complex enterprise systems.",
    // },
    {
      icon: <FaDrawPolygon />,
      title: "UI/UX Design",
      desc: "Focus on user-centered design to enhance usability, aesthetics, and customer journeys for maximum engagement.",
    },
    
    
    // {
    //   icon: <AiOutlineSecurityScan />,
    //   title: "Cybersecurity",
    //   desc: "Protect digital assets with security audits, vulnerability assessments, and ongoing monitoring to guard against cyber threats.",
    // },
    {
      icon: <AiFillMerge />,
      title: "System Integrations",
      desc: "Seamlessly connect your tools, applications, and platforms to enhance workflow and data consistency across systems.",
    },
    {
      icon: <VscTools />,
      title: "Maintenance & Support",
      desc: "Ongoing support and maintenance services to keep systems and websites running smoothly with regular updates and monitoring.",
    },
    
  ];

  return (
    <SectionWrapper id='WhatWeOffer'>
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-6 text-gray-700 md:px-12"
      >
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-gray-900 text-4xl font-bold sm:text-5xl">
            What We{" "}
            <span className="text-indigo-600 underline decoration-wavy decoration-indigo-400">
              Offer
            </span>
          </h2>
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
