import React from "react";
import HeadingText from "../components/ui/HeadingText";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Header */}
      <section className="text-center">
        <HeadingText text="About Us" />
        <p className="mt-10 text-lg text-gray-600">
          Welcome to <strong>Infincode</strong>, where technical
          expertise meets creative vision to shape impactful digital
          experiences. We pride ourselves on creating tailored, innovative
          solutions that help brands thrive in the digital world.
        </p>
      </section>

      {/* Mission */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-600">
          With 5+ years of industry experience, we specialize in
          delivering high-quality, end-to-end digital solutions crafted to meet
          the diverse needs of businesses across sectors like healthcare,
          banking, education, and beyond. Our journey began with a simple
          mission: to empower brands to thrive online through cutting-edge
          technology and user-centered design. Today, this mission remains at
          the core of every project we undertake, guiding us as we bring the
          latest advancements in web development, AI, e-commerce, and digital
          transformation to our clients.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us</h2>
        <p className="text-gray-600">
          We believe that each project is an opportunity to build a long-term
          partnership. Rooted in collaboration, transparency, and a commitment
          to quality, our approach ensures that we work closely with you at
          every stage of development, from ideation through deployment and
          beyond. Our priority is to deliver solutions that not only meet
          immediate needs but also foster sustainable growth. With a focus on
          innovation and a deep understanding of the latest technologies, we’re
          committed to helping your business succeed in the digital landscape.
        </p>
        <p className="text-gray-600">
          Our goal is not just to build digital solutions but to create
          experiences that resonate with your audience and bring value to your
          organization. We constantly evolve our strategies and skills to keep
          pace with technology, so you can rest assured that our solutions are
          modern, scalable, and adaptable to changing business needs.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">Our Services</h2>

        <div className="space-y-6 border-t border-gray-200 pt-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Web Development & Management
            </h3>
            <p className="text-gray-600">
              A robust online presence is essential for businesses today. Our
              Web Development & Management services focus on building
              responsive, optimized, and accessible websites that offer a
              seamless user experience. We go beyond aesthetics, ensuring your
              site is secure, fast, and ready to support your goals. From custom
              development to ongoing management, we handle all aspects of web
              development to keep your online presence strong and effective.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Generative AI & Machine Learning
            </h3>
            <p className="text-gray-600">
              Leveraging the power of AI, we create innovative solutions that
              automate processes, enhance customer interactions, and drive
              efficiency. Our AI and Machine Learning services are designed to
              add unique value to your audience, from predictive analytics to
              chatbot automation and personalized user experiences. We ensure
              our solutions are tailored to your specific needs, making complex
              AI applications accessible and effective for your business.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              E-commerce Development
            </h3>
            <p className="text-gray-600">
              E-commerce is a lifeline for modern businesses, and our E-commerce
              Development services focus on building secure, intuitive platforms
              where transactions are safe, navigation is smooth, and the
              customer experience is paramount. We integrate advanced features
              like payment processing, inventory management, and customer
              relationship tools, creating a shopping experience that is as
              engaging as it is efficient.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              API Development & Integrations
            </h3>
            <p className="text-gray-600">
              Seamless data flow and connectivity are crucial for modern
              applications. Our API Development & Integrations services connect
              your digital ecosystem with the tools and platforms that drive
              growth, streamline processes, and enhance data accuracy. Whether
              it’s integrating third-party services or building custom APIs, we
              ensure that your systems communicate effectively, enhancing
              overall efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="text-center border-t border-gray-200 pt-6">
        <p className="text-lg text-gray-700">
          At <strong>Infincode</strong>, we’re more than just a
          development agency; we’re a dedicated partner in your digital journey.
          Let’s work together to transform your ideas into lasting, impactful
          experiences that make a real difference in the digital world.
        </p>
      </section>
    </div>
  );
};

export default About;
