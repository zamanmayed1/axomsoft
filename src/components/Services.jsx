import React from "react";
import ComponentTitle from "./child/ComponentTitle";
import ServiceCard from "./child/ServiceCard";
const services = [
  {
    image: "https://img.icons8.com/?size=512&id=117011&format=png",
    title: "Web Development",
    subtitle:
      "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).",
  },
  {
    image: "https://img.icons8.com/?size=512&id=64523&format=png",
    title: "Graphics Design",
    subtitle:
      "Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography, and illustration.",
  },
  {
    image: "https://img.icons8.com/?size=512&id=118633&format=png",
    title: "Mobile App Development",
    subtitle:
      "Mobile app development is the process of creating software applications that run on mobile devices, such as smartphones and tablets.",
  },
  {
    image: "https://img.icons8.com/?size=512&id=117008&format=png",
    title: "Artificial Intelligence",
    subtitle:
      "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems, to perform tasks that would typically require human intelligence.",
  },
  {
    image: "https://img.icons8.com/?size=512&id=x1wieqREzmXv&format=png",
    title: "Cybersecurity",
    subtitle:
      "Cybersecurity refers to the practice of protecting computers, servers, mobile devices, electronic systems, networks, and data from digital attacks, damage, theft, and unauthorized access.",
  },
  {
    image: "https://img.icons8.com/?size=512&id=113862&format=png",
    title: "Digital Marketing",
    subtitle:
      "Digital marketing is the use of digital channels, such as search engines, social media, email, and websites, to promote products, services, and brands to targeted audiences.",
  },
  {
    image: "https://img.icons8.com/?size=512&id=4jTZOHNDLqDM&format=png",
    title: "UI/UX Design",
    subtitle:
      "UI/UX design focuses on enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between users and a product's interface.",
  },
 
  {
    image: "https://img.icons8.com/?size=512&id=64595&format=png",
    title: "Blockchain",
    subtitle:
      "Blockchain is a decentralized and distributed digital ledger technology that securely records transactions across multiple computers, providing transparency, security, and immutability.",
  },
  
  {
    image: "https://img.icons8.com/?size=512&id=64847&format=png",
    title: "E-commerce",
    subtitle:
      "E-commerce, or electronic commerce, refers to the buying and selling of goods and services over the Internet, as well as the transfer of money and data to execute these transactions.",
  },
];

const Services = () => {
  return (
    <div id="#services" className="bg-[#d7dde37e] w-full min-h-[100vh] ">
      <div className="max-w-[1440px] w-full mx-auto p-4 ">
        <ComponentTitle
          data={{
            title: "Services",
            subtitle: "All owesome services we provide.",
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((val, i) => (
            <ServiceCard key={i} data={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
