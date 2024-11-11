import SectionWrapper from "../../SectionWrapper";
import { FaAward } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaFingerprint } from "react-icons/fa6";

const Features = () => {
  const features = [
    {
      icon: <FaAward />,
      title: "Best quality",
      desc: "We care about the quality of the product. As a digital product development agency, we believe in beautiful software.",
    },
    {
      icon: <FaCode />,
      title: "Modern technologies",
      desc: "We use the modern and most flexible and secure technologies to build the best products on the internet.",
    },
    {
      icon: <FaFingerprint />,
      title: "Advenced security",
      desc: "At Software Security Solutions our mission is to raise the bar by making computer security more accessible.",
    },
  ];

  return (
    <SectionWrapper>
      <div id="features" className="custom-screen text-gray-600">
        <div className="max-w-2xl mx-auto space-y-1 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Why{" "}  
            <span className="text-indigo-600 ">
              <strong>Clients </strong>{" "}
            </span>Trust Us
          </h2>
          <p>These are a few of our favourite things</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-x-12 gap-y- sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 border text-3xl text-indigo-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
