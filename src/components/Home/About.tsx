import ServiceCard from "./ServiceCard";
import { FaLaptopCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const services = [
  {
    heading: "Web Application Development",
    body: [
      "Design custom web apps.",
      "Develop responsive interfaces.",
      "Integrate with backend services.",
      "Ensure database connectivity.",
      "Optimize for performance.",
    ],
    Icon: <FaLaptopCode />,
  },
  {
    heading: "API Development and Integration",
    body: [
      "Create RESTful and GraphQL APIs.",
      "Integrate third-party services.",
      "Ensure secure data exchange.",
      "Maintain API documentation.",
      "Monitor and manage API performance.",
    ],
    Icon: <FaServer />,
  },
  {
    heading: "Database Design and Management",
    body: [
      "Design efficient databases.",
      "Optimize data retrieval.",
      "Ensure data integrity.",
      "Implement indexing solutions.",
      "Scale databases effectively.",
    ],
    Icon: <FaDatabase />,
  },
  {
    heading: "Maintenance and Support",
    body: [
      "Maintain and update apps.",
      "Troubleshoot and fix bugs.",
      "Provide technical support.",
      "Consult for optimization.",
      "Ensure system reliability.",
    ],
    Icon: <FaTools />,
  },
];

const About = () => {
  return (
    <div className="bg-common-white rounded-xl p-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-common-black">About</h2>
        <hr className="w-1/3 border-t-2 border-theme-secondary" />
      </div>

      <p className="text-body-text mb-3">
        I&apos;m a Fullstack Developer from Addis Ababa, Ethiopia, skilled in
        both frontend and backend development. I create robust, user-friendly
        applications using various technologies and frameworks.
      </p>
      <p className="text-body-text">
        Passionate about solving complex problems, I deliver high-quality code
        and seamless digital experiences.
      </p>
      <h4 className="text-common-black py-4">What I do!</h4>
      <div className="grid grid-cols-2 gap-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            heading={service.heading}
            body={service.body}
            Icon={service.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
