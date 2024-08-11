import React from "react";
import ServiceCard from "./ServiceCard";
import { BiAperture } from "react-icons/bi";

const Services = () => {
  const service = [
    {
      icon: <BiAperture />,
      title: "Reliability",
      description:
        "We take security, scalability, and performance to the next level.",
    },
    {
      icon: <BiAperture />,
      title: "Reliability",
      description:
        "We take security, scalability, and performance to the next level.",
    },
    {
      icon: <BiAperture />,
      title: "Reliability",
      description:
        "We take security, scalability, and performance to the next level.",
    },
    {
      icon: <BiAperture />,
      title: "Reliability",
      description:
        "We take security, scalability, and performance to the next level.",
    },
    {
      icon: <BiAperture />,
      title: "Reliability",
      description:
        "We take security, scalability, and performance to the next level.",
    },
    {
      icon: <BiAperture />,
      title: "Reliability",
      description:
        "We take security, scalability, and performance to the next level.",
    },
    // Other services...
  ];

  return (
    <div className="px-20 py-20 bg-gradient-to-r from-[#047857] via-gray-400 to-gray-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      <div className="text-center text-white dark:text-gray-300">
        <p className="text-6xl font-bold px-20">
          Eliminate the work of provisioning, maintaining, and scaling
          infrastructure.
        </p>
        <div className="grid grid-cols-3">
          {service.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
