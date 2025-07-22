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

import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
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
    name: "Ahmed Hussein",
    title: "Laravel FullStack Developer",
    skills: ["Laravel", "PHP", "MySQL", "Vue.js"],
    description:
      "Specializes in building robust backend systems and scalable web applications.",
    socialLinks: [
      { icon: <BsGithub />, url: "#" },
      { icon: <BsLinkedin />, url: "#" },
      { icon: <BsFacebook />, url: "#" },
    ],
  },
  {
    name: "Seif Amr",
    title: "Frontend Developer",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    description:
      "Creates responsive and interactive user interfaces with modern web technologies.",
    socialLinks: [
      { icon: <BsGithub />, url: "#" },
      { icon: <BsLinkedin />, url: "#" },
      { icon: <BsFacebook />, url: "#" },
    ],
  },
  {
    name: "Ahmed Shaaban",
    title: ".NET FullStack Developer",
    skills: [".NET Core", "C#", "SQL Server", "Azure"],
    description:
      "Expert in enterprise application development with Microsoft technologies.",
    socialLinks: [
      { icon: <BsGithub />, url: "https://github.com/AhmedShaban52" },
      {
        icon: <BsLinkedin />,
        url: "https://www.linkedin.com/in/ahmed-shaaban52/",
      },
      {
        icon: <BsFacebook />,
        url: "https://www.facebook.com/ahmed.shaaban522000",
      },
    ],
  },
  {
    name: "Manar Samhy",
    title: "UI/UX Designer / Graphic Designer",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    description:
      "Transforms complex problems into intuitive and beautiful design solutions.",
    socialLinks: [
      { icon: <BsGithub />, url: "#" },
      { icon: <BsLinkedin />, url: "#" },
      { icon: <BsFacebook />, url: "#" },
    ],
  },
  {
    name: "Yousef Mahmoud",
    title: "Mobile Developer",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    description:
      "Builds cross-platform mobile applications with excellent performance.",
    socialLinks: [
      { icon: <BsGithub />, url: "#" },
      { icon: <BsLinkedin />, url: "#" },
      { icon: <BsFacebook />, url: "#" },
    ],
  },
  {
    name: "Karrem Alaa",
    title: "Mobile Developer",
    skills: ["React Native", "JavaScript", "Redux", "App Store"],
    description:
      "Creates native-like experiences with React Native and modern tools.",
    socialLinks: [
      { icon: <BsGithub />, url: "#" },
      { icon: <BsLinkedin />, url: "#" },
      { icon: <BsFacebook />, url: "#" },
    ],
  },
];

export const cards = [
  {
    href: "web-development",
    title: "Web Development",
    description:
      "Build modern, responsive, and interactive websites using the latest web technologies to deliver seamless user experiences.",
    icon: <FaLaptopCode />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    href: "mobile-development",
    title: "Mobile Development",
    description:
      "Design and develop high-performance mobile applications tailored for both iOS and Android platforms, ensuring smooth and engaging user experiences.",
    icon: <MdPhoneIphone />,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    href: "ui-design",
    title: "UI/UX Design / Graphic-Design",
    description:
      "Create intuitive and beautiful user interfaces that enhance user engagement and provide exceptional digital experiences.",
    icon: <FaLaptopCode />,
    technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
  },
  {
    href: "backend-solutions",
    title: "Backend Solutions",
    description:
      "Develop robust and scalable server-side solutions that power your applications and handle complex business logic efficiently.",
    icon: <MdPhoneIphone />,
    technologies: ["Node.js", "Express", "MongoDB", "Firebase"],
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
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Firebase",
      "REST API",
      "Material Design",
    ],
  },
  {
    title: "LMS System Dashboard",
    description:
      "Comprehensive dashboard tailored for learning management systems, with tools for course management, student tracking, progress analytics, and multi-role administration.",
    image: mob2,
    url: "https://devops.exabyte-eg.com/projects/learnu/web/",
    stack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Firebase",
      "Cloud Firestore",
      "Provider",
    ],
  },
  {
    title: "Furniture E-Commerce",
    description:
      "Responsive furniture store dashboard focused on managing product catalogs, customer orders, and inventory tracking across various home and office categories.",
    image: mob3,
    url: "https://devops.exabyte-eg.com/projects/istikbal/web/",
    stack: ["Flutter", "Dart", "GetX", "Node.js", "MongoDB", "Stripe Payments"],
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
