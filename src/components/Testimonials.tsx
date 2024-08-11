import React, { useState } from "react";
import "./css/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Petr Hecko",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      designation: "Lead DevOps Engineer",
      content:
        "Aptible just takes away the stress of managing our own infrastructure. With Aptible, managing deployments is easy, especially with the ability to restart with zero-downtime.",
    },
    {
      name: "John Badger",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      designation: "Director",
      content:
        "We had been changing infrastructure and were able to transition smoothly without any downtime.",
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      designation: "CEO",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-control prev" onClick={prevTestimonial}>
        &#10094;
      </button>
      <div className="carousel-content">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex
                ? "active"
                : index === (currentIndex + 1) % testimonials.length
                ? "right"
                : "left"
            }`}>
            <div className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-info">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-designation">
                  {testimonial.designation}
                </p>
                <p className="testimonial-content">{testimonial.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control next" onClick={nextTestimonial}>
        &#10095;
      </button>
    </div>
  );
};

export default Testimonials;
