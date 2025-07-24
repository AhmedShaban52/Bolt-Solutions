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

import slide from "../assets/slide.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";
import slide4 from "../assets/slide4.jpeg";
import slide5 from "../assets/slide5.jpeg";
import slide6 from "../assets/slide6.jpeg";

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
    skills: ["Laravel", "PHP", "MySQL", "Docker", "Java Script"],
    description:
      "Specializes in building robust backend systems and scalable web applications.",
  },

  {
    name: "Ahmed Shaaban",
    title: ".NET FullStack Developer",
    skills: [".NET Core", "C#", "SQL Server", "Next.js"],
    description:
      "Expert in enterprise application development with Microsoft technologies.",
  },
  {
    name: "Manar Samhy",
    title: "UI/UX Designer / Graphic Designer",
    skills: ["Adobe Photoshop", "Illustrator", "AdobeXD", "Adode InDesign"],
    description:
      "Transforms complex problems into intuitive and beautiful design solutions.",
  },
  {
    name: "Yousef Mahmoud",
    title: "Mobile Developer",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    description:
      "Builds cross-platform mobile applications with excellent performance.",
  },
  {
    name: "Karrem Alaa",
    title: "Mobile Developer",
    skills: ["State Management", "Flutter", "Firebase", "App Store"],
    description:
      "Creates native-like experiences with React Native and modern tools.",
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
    href: "graphic-design",
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
    value: "dodix@gmail.com",
  },
  {
    icon: <FaPhone className="text-blue-700" size={20} />,
    title: "Phone",
    value: "+20 1155414805",
  },
];

export const graphicDesigns = [
  {
    id: 1,
    title: "Tech Startup Brand Identity",
    description:
      "Complete brand identity for a tech startup including logo, color palette, and guidelines.",
    image: slide,
    category: "Brand Identity",
    client: "Nexus Technologies",
    year: "2023",
  },
  {
    id: 2,
    title: "Coffee Shop Packaging",
    description:
      "Packaging design for premium coffee beans with sustainable materials.",
    image: slide2,
    category: "Packaging",
    client: "Brew Haven",
    year: "2022",
  },
  {
    id: 3,
    title: "Fitness Apparel Logo",
    description:
      "Modern and energetic logo design for a fitness apparel brand.",
    image: slide3,
    category: "Logo Design",
    client: "ActiveWear Co.",
    year: "2023",
  },
  {
    id: 4,
    title: "Restaurant Menu Design",
    description:
      "Elegant menu design for a fine dining restaurant with custom illustrations.",
    image: slide4,
    category: "Print Design",
    client: "La Belle Cuisine",
    year: "2022",
  },
  {
    id: 5,
    title: "Social Media Campaign",
    description: "Complete social media assets for a product launch campaign.",
    image: slide5,
    category: "Social Media",
    client: "Glow Beauty",
    year: "2023",
  },
  {
    id: 6,
    title: "Corporate Brand Refresh",
    description:
      "Brand refresh for a financial services company with updated visual identity.",
    image: slide6,
    category: "Brand Identity",
    client: "Capital Trust",
    year: "2022",
  },
];
