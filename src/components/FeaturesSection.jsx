import React from "react";

const features = [
  {
    title: "Monthly Budgeting Support",
    description:
      "Get detailed insights into your spending habits and discover where you can save.",
    imageUrl: "/images/track-spending.webp",
  },
  {
    title: "Chose The Plan That's Right For You",
    description:
      "We offer a variety of paths to meet your needs, whether you're just starting out or a seasoned budgeter.",
    imageUrl: "/images/paths.webp",
  },
  {
    title: "Exclusive Deals and Discounts",
    description:
      "Unlock special offers and discounts from our partners to help you save even more.",
    imageUrl: "/images/deals.webp",
  },
];

const FeaturesSection = () => (
  <section id="features" className="features-section bg-gray-50">
    <h2 className="text-4xl font-bold mb-8 text-black">Our Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="feature bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
        >
          <picture>
            <source
              srcSet={`${feature.imageUrl}?w=400 400w, ${feature.imageUrl}?w=800 800w`}
              sizes="(max-width: 600px) 400px, 800px"
            />
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </picture>
          <h3 className="text-2xl font-semibold mb-4 text-black">
            {feature.title}
          </h3>
          <p className="mb-4 text-gray-500">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
