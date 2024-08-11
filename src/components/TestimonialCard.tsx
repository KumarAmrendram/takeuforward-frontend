import React from "react";

interface TestimonialProp {
  name: string;
  designation: string;
  image: string;
  content: string;
}

const TestimonialCard = ({
  name,
  designation,
  image,
  content,
}: TestimonialProp) => {
  return (
    <div className="flex flex-col bg-pink-200 bg-opacity-15 p-10 m-10 rounded-3xl text-black">
      <div className="text-lg font-medium text-left">{content}</div>
      <div className="w-1/2 flex items-center">
        <img src={image} alt="image" className="w-10 h-10 rounded-full" />
        <div className="ps-5">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-lg font-medium text-left -mt-2">{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
