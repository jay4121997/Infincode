import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import ctaImage from "../../../public/cta-image.jpg";
import Image from "next/image";
import analysis from "./heroanimation.json";
import Lottie from "lottie-react";

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="pb-0">
      <div className="custom-screen">
        <div className="items-center  gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Lottie animationData={analysis} loop={true} autoPlay={true} />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl capitalize">
                Past
              <span className="text-indigo-600 ">
                <strong> Projects</strong>{" "}
              </span>
            </h2>
            <p className="mt-3 text-gray-600 text-justify">
            At InsightfulMinds, we take pride in delivering cutting-edge solutions across various domains. Our expertise spans Generative AI, Data Pipelines, Machine Learning, and Web Development. Explore our diverse portfolio of successful projects, where we've helped clients achieve their goals through innovative and tailored solutions.
            </p>
            <NavLink
              href="/get-started"
              className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
            >
              Explore
            </NavLink>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
