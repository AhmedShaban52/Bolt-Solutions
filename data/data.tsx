import { FaLaptopCode } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

import pro1 from "../assets/pro-1.png";
import pro2 from "../assets/pro-2.png";
import pro3 from "../assets/pro-3.png";
import pro4 from "../assets/pro-4.png";

import mob1 from "../assets/mob1.jpeg";
import mob2 from "../assets/mob2.jpeg";
import mob3 from "../assets/mob3.jpeg";

import { BsPersonWorkspace } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";

export const principles = [
  {
    text: "Timely delivery is our promise — we never miss a deadline.",
  },
  {
    text: "Professional results, delivered with speed and precision",
  },
  {
    text: "Clean, maintainable code as a foundation",
  },
  {
    text: "Performance optimization from day one",
  },
];

export const teamMembers = [
  {
    // experince: "April 2024 - Present",
    icon: <BsPersonWorkspace />,
    name: "Ahmed Hussein",
    title: "Laravel FullStack Developer",
  },
  {
    // experince: "April 2024 - Present",
    icon: <BsPersonWorkspace />,
    name: "Seif Amr",
    title: "Frontend Developer",
  },
  {
    // experince: "April 2024 - Present",
    icon: <BsPersonWorkspace />,
    name: "Ahmed Shaaban",
    title: ".NET FullStack Developer",
  },
  {
    // experince: "April 2024 - Present",
    icon: <BsPersonWorkspace />,
    name: "Manar Samhy",
    title: "Ui/Ux Designer",
  },
  {
    // experince: "April 2024 - Present",
    icon: <BsPersonWorkspace />,
    name: "Yousef Mahmoud",
    title: "Mobile Developer",
  },
  {
    // experince: "April 2024 - Present",
    icon: <BsPersonWorkspace />,
    name: "Karrem Alaa",
    title: "Mobile Developer",
  },
];

export const cards = [
  {
    hreaf: "web-development",
    title: "Web Development",
    description:
      "Build modern, responsive, and interactive websites using the latest web technologies to deliver seamless user experiences.",
    icon: <FaLaptopCode className="text-blue-600 text-2xl md:text-6xl mb-4" />,
  },
  {
    hreaf: "mobile-development",
    title: "Mobile Development",
    description:
      "Design and develop high-performance mobile applications tailored for both iOS and Android platforms, ensuring smooth and engaging user experiences.",
    icon: <MdPhoneIphone className="text-blue-600 text-2xl md:text-6xl mb-4" />,
  },
];

export const webProjects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Responsive admin dashboard for an e-commerce platform with analytics, inventory management, and order processing.",
    image: pro1,
    url: "https://devops.exabyte-eg.com/projects/temry/web/",
    stack: ["React", "Tailwind Css", "Ant Design", "PHP", "Laravel", "MySQL"],
  },
  {
    title: "LMS System Dashboard",
    description:
      "Comprehensive dashboard tailored for learning management systems, with tools for course management, student tracking, progress analytics, and multi-role administration.",
    image: pro2,
    url: "https://devops.exabyte-eg.com/projects/learnu/web/",
    stack: ["React", "Tailwind Css", "Ant Design", "PHP", "Laravel", "MySQL"],
  },
  {
    title: "Furniture E-Commerce",
    description:
      "Responsive furniture store dashboard focused on managing product catalogs, customer orders, and inventory tracking across various home and office categories.",
    image: pro3,
    url: "https://devops.exabyte-eg.com/projects/istikbal/web/",
    stack: ["React", "Tailwind Css", "Ant Design", "PHP", "Laravel", "MySQL"],
  },
  {
    title: "Fertilizer E-Commerce ",
    description:
      "Responsive admin dashboard designed for agricultural e-commerce platforms, enabling streamlined management of fertilizers, order tracking, and inventory control.",
    image: pro4,
    url: "https://devops.exabyte-eg.com/projects/learnu/web/",
    stack: ["React", "Tailwind Css", "Ant Design", "PHP", "Laravel", "MySQL"],
  },
];

export const mobileProjects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Responsive admin dashboard for an e-commerce platform with analytics, inventory management, and order processing.",
    image: mob1,
    url: "https://devops.exabyte-eg.com/projects/temry/web/",
    stack: ["React", "Tailwind Css", "Ant Design", "PHP", "Laravel", "MySQL"],
  },
  {
    title: "LMS System Dashboard",
    description:
      "Comprehensive dashboard tailored for learning management systems, with tools for course management, student tracking, progress analytics, and multi-role administration.",
    image: mob2,
    url: "https://devops.exabyte-eg.com/projects/learnu/web/",
    stack: ["React", "Tailwind Css", "Ant Design", "PHP", "Laravel", "MySQL"],
  },
  {
    title: "Furniture E-Commerce",
    description:
      "Responsive furniture store dashboard focused on managing product catalogs, customer orders, and inventory tracking across various home and office categories.",
    image: mob3,
    url: "https://devops.exabyte-eg.com/projects/istikbal/web/",
    stack: ["React", "Tailwind Css", "Ant Design", "PHP", "Laravel", "MySQL"],
  },
];

export const contactDetails = [
  {
    icon: <FaLocationDot className="text-blue-700" size={20} />,
    title: "Location",
    value: "Cairo, Egypt",
  },
  {
    icon: <MdEmail className="text-blue-700" size={20} />,
    title: "Email",
    value: "mostafaontrack@gmail.com",
  },
  {
    icon: <FaPhone className="text-blue-700" size={20} />,
    title: "Phone",
    value: "+20 1155414805",
  },
];
