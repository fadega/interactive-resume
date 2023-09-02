import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    rmplc,
    lethal,
    starss,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "RM Plc",
      icon: rmplc,
      iconBg: "#383E56",
      date: "Nov 2021 - Feb 2023",
      points: [
        "Developed automatic machine scoring module with data exporting and reporting features which increased marking accuracy by 15%",
        "Optimized API performance, reducing latency to less than a second, enhancing user experience for tens of thousands of users",
        "Revamped legacy code for custom context functionality, ensuring system consistency and efficiency across all modules",
        "Created highly interactive e-assessment content used in numerous schools across multiple countries, and over 40 languages",
        "Participated in code reviews and provided constructive feedback to other developers",
        
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Hdmona",
      icon: "",
      iconBg: "#E6DEDD",
      date: "May 2020 - Nov 2021",
      points: [
        "Built a custom MVC framework using the OOP development approach, reducing software defects by 30%",
        "Architected and deployed robust RESTful APIs with Node.js and PostgreSQL, improving system performance ",
        "Streamlined database efficiency by implementing an enhanced schema and optimizing SQL queries, reducing query execution times by 35%",
        "Increased company revenue by 15% through the integration of PayPal's Payment gateway API",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Lethal Digital",
      icon: lethal,
      iconBg: "#383E56",
      date: "Jun 2018 - Sep 2018",
      points: [
        "Developed custom themes and plugins using PHP, CSS, and JavaScript, resulting in highly tailored and unique websites that met specific client requirements",
        "Integrated third-party APIs and services, expanding website functionality and improving user engagement by 30%",
        "Optimized website SEO by implementing best practices such as on-page optimization, keyword research, and content strategy, resulting in higher search engine rankings and 13% increase in website traffic",

      ],
    },
    {
      title: "Education Coordinator | Instuctor",
      company_name: "StARS",
      icon: starss,
      iconBg: "#E6DEDD",
      date: "Nov 2014 - Feb 2018",
      points: [
        "Managed school terms and activities for a student body of 200+ students",
        "Designed an interactive database to maintain and update accurate school records",
        "Supervised a team of 16 teachers and support staff, ensuring the smooth running of the school",
        "Designed and delivered comprehensive Math lessons( algebra, geometry, and introductory calculus)",
      ],
    },

    {
      title: "Software Developer",
      company_name: "EISA",
      icon: "",
      iconBg: "#E6DEDD",
      date: "Sept 2010 - Jun 2013",
      points: [
        "Built a television program scheduler with C# in .NET, eliminating manual input by 95%, saving hundreds of hours of manual work",
        "Designed a TV game for a special national event, entertaining tens of thousands of viewers",
        "Collaborated with teams to implement an education management information system, achieving higher accuracy in student data reporting across multiple educational branches",
        "Developed products from identifying system requirements to implementation, testing, and delivery, improving system efficiency by 30%",
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
        "They have a good knack for coding and are always ready to take on challenges. Their positive attitude and willingness to learn make them a great asset to our team. We're lucky to have them",
      name: "Felica Gu",
      designation: "Lead Developer",
      company: "RM Plc",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
    },
    {
      testimonial:
        "Working with them has been a pleasure. They consistently deliver high-quality work that addresses our product needs, and their dedication to the team and the product is truly appreciated.",
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
        "Web-based ecommerece platform that allows users to search, filter,and shop for merchendize. It provides convenient shopping experience with  seamless integration of Paypal's payment gateway API for secure and efficient checkout. The project was built using PHP in MVC - OOP pattern.",
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
      image: carrent,
      source_code_link: "https://github.com/fadega/zacecom",
    },
    {
      name: "Heart Beat Monitor",
      description:
        "A Java app that monitors heart beat rate and recommends heart beat check. Implemented in MVC architecture (but organized differently), it implements user and patienet management systems. It is fully built OOP pattern.",
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
      image: jobit,
      source_code_link: "https://github.com/fadega/HeartRateMonitor",
    },
    {
      name: "Salus Vita",
      description:
        "A comprehensive exercise web app built in react hooked into a rapidApi's exercise API. It provide a huge collection of exercises categorized in ten different types based in the body they target. Framer-motion and few other packages are used plus tailwind.",
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
      image: tripguide,
      source_code_link: "https://github.com/fadega/salus-vita",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };