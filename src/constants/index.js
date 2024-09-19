import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  zacecom,
  heartbeat,
  salusvita,
  threejs,
  rmplc,
  lethal,
  starss,
  nologo,
  cardwatch,
  php,
  laravel,
  postgresql,
  django,
  aws,
  spring,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Full-stack Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Gitlab CI/CD",
    icon: "",
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Cardwatch POS",
    icon: cardwatch,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Architected a microservice-based POS system using Java/Spring Boot for scalable backend services",
      "Developed a tool to optimize database queries, improving system speed and performance by 30%.",
      "Integrated Kafka for reliable, asynchronous microservice communication",
      "Ensured robust unit testing and continuous integration using JUnit and Docker",
      "Conducted code reviews and mentored junior developers, fostering a culture of clean code and best practices",
      "Implementing responsive and user-friendly frontend components with React",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "RM Plc",
    icon: rmplc,
    iconBg: "#383E56",
    date: "Nov 2021 - March 2023",
    points: [
      "Engineered an automated machine scoring system with advanced data exporting and reporting capabilities, resulting in a 15% improvement in grading accuracy",
      "Designed engaging and interactive e-assessment content for over one hundred schools, supporting more than forty languages",
      "Optimized API performance by reducing latency from 6.8 seconds to 3 seconds, enhancing user experience",
      "Revamped legacy code for custom context functionality across all modules, ensuring greater consistency and reliability",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Hdmona",
    icon: nologo,
    iconBg: "#E6DEDD",
    date: "May 2020 - Nov 2021",
    points: [
      "Created a custom MVC framework utilizing OOP for a content management system, increasing modularity, and reducing software defects",
      "Architected and deployed robust RESTful APIs with Node.js and PostgreSQL, facilitating seamless data exchange",
      "Streamlined database efficiency by enhancing schema and optimizing SQL queries, leading to faster query execution times",
      "Increased revenue by 11% through the integration of PayPal's Payment Gateway API, offering customers a secure payment experience",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Lethal Digital",
    icon: lethal,
    iconBg: "#383E56",
    date: "Jun 2018 - Sep 2018",
    points: [
      "Developed custom themes and plugins using PHP, CSS, and JavaScript, meeting specific client requirements",
      "Conducted website audits and implemented optimizations, reducing load times by up to 30%",
      "Integrated third-party APIs (Google Maps, Facebook, Twitter) to enhance website functionality",
      "Deployed e-commerce websites using payment gateways like PayPal, Stripe, and WooCommerce, increasing online sales",
      "Optimized SEO through on-page optimization, keyword research, and content strategy, resulting in higher search rankings",
    ],
  },
  {
    title: "Education Coordinator | Instuctor",
    company_name: "StARS",
    icon: starss,
    iconBg: "#E6DEDD",
    date: "Nov 2014 - Feb 2018",
    points: [
      "Established partnerships with NGOs and local schools to increase resources and opportunities",
      "Designed an interactive database to maintain and update accurate school records",
      "Developed and delivered lesson plans on ICT topics (MS Office Suite, computer security).",
      "Taught comprehensive Math lessons (algebra, geometry, introductory calculus).",
      "Delivered engaging Physics and Chemistry lessons to students in years 10–12",
    ],
  },

  {
    title: "Software Developer",
    company_name: "EISA",
    icon: nologo,
    iconBg: "#E6DEDD",
    date: "Sept 2010 - Jun 2013",
    points: [
      "Implemented an education management information system, achieving 95% accuracy in student data reporting",
      "Built a television program scheduler with C# in .NET, eliminating manual input by 89%",
      "Designed a TV game for a special national event, entertaining tens of thousands of viewers",
      "Developed products from identifying system requirements to implementation, testing, and delivery",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Throughout our collaboration, Fadega has consistently shown a high level of technical competence and a strong commitment to our team's objectives. His problem-solving skills have been a great asset in our projects.",
    name: "David Wyn ",
    designation: "Lead Developer",
    company: "RM Plc",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    testimonial:
      "Fadega has a good knack for coding and are always ready to take on challenges. His positive attitude and willingness to learn make them a great asset to our team. We were lucky to have had worked with him",
    name: "X(Ian) Qiu",
    designation: "Senior Developer",
    company: "RM Plc",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    testimonial:
      "Working with him has been a pleasure. He consistently deliver high-quality work that addresses our product needs, and his dedication to the team and the product is truly appreciated.",
    name: "Redae Beraki",
    designation: "Senior Software Develper",
    company: "PayCom",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const projects = [
  {
    name: "Zacecom - Ecommerce",
    description:
      "Web-based ecommerece platform that allows users to search, filter,and shop for merchendize. It provides convenient shopping experience with  seamless integration with Paypal's payment gateway API for secure and efficient checkout. The project was built using PHP in MVC - OOP pattern.",
    tags: [
      {
        name: "mvc",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
      {
        name: "customFramework",
        color: "blue-text-gradient",
      },
    ],
    image: zacecom,
    source_code_link: "https://github.com/fadega/zacecom",
  },
  {
    name: "Heart Beat Monitor",
    description:
      "A Java app that monitors heart beat rate and recommends heart beat checks. Implemented in MVC architecture (but organized differently), it implements user and patienet management systems including role based authentication feature. It is fully built in OOP pattern.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mvc",
        color: "green-text-gradient",
      },
      {
        name: "health",
        color: "pink-text-gradient",
      },
    ],
    image: heartbeat,
    source_code_link: "https://github.com/fadega/HeartRateMonitor",
  },
  {
    name: "Salus Vita",
    description:
      "A comprehensive exercise web app built in react hooked into rapidApi's exercise API. It provide a huge collection of exercises categorized in ten different types based in the body they target. Framer-motion and few other packages are used plus tailwind.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framermotion",
        color: "blue-text-gradient",
      },
    ],
    image: salusvita,
    source_code_link: "https://github.com/fadega/salus-vita",
  },
];

export { services, technologies, experiences, testimonials, projects };
