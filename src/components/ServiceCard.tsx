import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-start space-y-6 justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-10 m-10 rounded-3xl h-[400px] text-black dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 dark:text-white">
      <div className="text-5xl">{icon}</div>
      <div className="text-3xl font-bold">{title}</div>
      <div className="text-lg font-medium text-left">{description}</div>
    </div>
  );
};

export default ServiceCard;
