import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import wordpress from "../../../public/icons/wordpress.svg";
import nextjs from "../../../public/icons/nextjs.svg";
import tailwind from "../../../public/icons/tailwind.svg";
import nodejs from "../../../public/icons/nodejs.svg";
import vercel from "../../../public/icons/vercel.svg";
import figma from "../../../public/icons/figma.svg";
import powerBi from "../../../public/icons/powerbi.svg";
import { AiFillOpenAI } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiFillMerge } from "react-icons/ai";
import { VscUngroupByRefType } from "react-icons/vsc";
import { VscDashboard } from "react-icons/vsc";
import { VscGlobe } from "react-icons/vsc";
import { VscCloud } from "react-icons/vsc";

const ToolKit = () => {
  const features = [
    {
      icon: <AiFillOpenAI />,
      title: "Genrative AI & Machine Learning",
      desc: "Unlock creativity and efficiency with cutting-edge AI and machine learning solutions tailored to your business needs.",
    },
    {
      icon: <AiOutlineBarChart />,
      title: "Business Insights",
      desc: "Transform data into actionable insights for smarter, data-driven business decisions and strategies.",
    },
    {
      icon: <VscUngroupByRefType />,
      title: "Data Pipelines",
      desc: "Streamline and automate your data flow, ensuring seamless integration and real-time processing.",
    },
    {
      icon: <VscDashboard />,
      title: "Performance Optimization",
      desc: "Enhance your systems for peak performance and efficiency with our expert optimization services.",
    },
    {
      icon: <VscGlobe />,
      title: "Website Management",
      desc: "Keep your website running smoothly with our comprehensive management and maintenance solutions.",
    },
    {
      icon: <VscCloud />,
      title: "Cloud Computing",
      desc: "Leverage the power of the cloud for scalable, secure, and flexible computing solutions.",
    },
    // {
    //     icon: nextjs,
    //     title: "Next.js",
    //     desc: "Next.js is a React framework that gives you building blocks to create web apps."
    // },
    // {
    //     icon: tailwind,
    //     title: "Tailwind CSS",
    //     desc: "Tailwind CSS is basically a utility-first CSS framework for rapidly building UIs."
    // },
    // {
    //     icon: nodejs,
    //     title: "Node.js",
    //     desc: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment."
    // },
    // {
    //     icon: vercel,
    //     title: "Vercel",
    //     desc: "Vercel is a cloud platform that enables developers to host web apps."
    // },
    // {
    //     icon: figma,
    //     title: "Figma",
    //     desc: "Figma is a web-based graphics editing and user interface design app."
    // },
  ];

  return (
    <SectionWrapper>
      <div
        id="toolkit"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            What We{" "}
            <span className="text-indigo-600 ">
              <strong> Offer</strong>{" "}
            </span>
          </h2>
          <p>These are a few of our favourite things</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-20 gap-x-15 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 gradient-border  rounded-full flex items-center justify-center text-3xl">
                  {item.icon}
                  {/* <Image src={item.icon} alt={item.title} /> */}
                  {/* <i className="text-lg"></i> */}
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
