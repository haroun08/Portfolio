/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/


export const projectsData = [ 
  {
    id: 1,
    name: "Ecommerce Microservices Platform",
    description: "Implemented an E-commerce web application using a microservices architecture.",
    date: "2024-12-01",
    demoLink: "https://github.com/RamziHaddad/projet-soa-ecommerce-enit-2024-3AINFO2",
    technologies: ["Spring Cloud", "Spring Boot", "Docker"],
  },
  {
    id: 2,
    name: "Ai Short Video Generator",
    description: "Implemented an Ai Short Video Generator using NextJS.",
    date: "2024-11-16",
    demoLink: "https://github.com/haroun08/AI-Video-Generator",
    technologies: ["NextJS", "ShadCN", "Postgres","Clerk","Neon"],    
  },
  {
    id: 3,
    name: "Replanto",
    description: "A Flutter app to manage and care for plants with features like watering schedules and plant profiles.",
    date: "2024-08-21",
    demoLink: "https://github.com/haroun08/replanto",
    technologies: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: 4,
    name: "Book Social Network",
    description: "Created a social networking platform for book lovers to share and discuss books.",
    date: "2024-09-01",
    demoLink: "https://github.com/haroun08/Book-Social-Network",
    technologies: ["Spring Boot", "Keycloak", "Docker", "Angular"],
  },
  {
    id: 5,
    name: "DNA Data Storage",
    description: "An experimental project focused on storing data within DNA sequences, with potential applications in long-term digital data storage.",
    date: "2024-07-21",
    demoLink: "https://github.com/haroun08/DNA-DataStorage",
    technologies: ["Next.js", "Artificial Intelligence", "Blockchain", "DNA Data Storage"],
  },
  {
    id: 6,
    name: "Movie-API",
    description: "A RESTful API for managing movies and reviews built with Spring Boot and MongoDB.",
    date: "2024-06-01",
    demoLink: "https://github.com/haroun08/Movie-API",
    technologies: ["Spring Boot", "Postman", "MongoDB"],
  },
  {
    id: 7,
    name: "Transport Application",
    description: "TransportMVC is a comprehensive web application designed to streamline the management and booking of tours and travel destinations.",
    date: "2024-05-01",
    demoLink: "https://github.com/haroun08/TransportMVC",
    technologies: ["C# .NET", "ASP.NET 8 MVC", "MySQL"],
  },
  {
    id: 8,
    name: "Gym Plus",
    description: "Designed a full-stack gym management system with scheduling and membership management.",
    date: "2024-03-01",
    demoLink: "https://github.com/haroun08/GymPlus",
    technologies: ["Java", "Spring Boot", "MySQL", "JHipster", "Docker", "ReactJS"],
  },
  {
    id: 9,
    name: "Full Stack Blog Website",
    description: "Built a blog platform with user registration, post creation, and commenting features.",
    date: "2024-01-01",
    demoLink: "https://github.com/haroun08/Symfony-blog",
    technologies: ["Symfony", "PHP", "MySQL"],
  },
  {
    id: 10,
    name: "Project Management Site",
    description: "Developed a web-based project management platform for collaborative project tracking and management.",
    date: "2024-01-01",
    demoLink: "https://github.com/haroun08/JEE-ProjectManagement",
    technologies: ["Java", "JEE", "MySQL"],
  },
  {
    id: 11,
    name: "Face Detection",
    description: "Face Detection and Emotion Recognition Program using Java and Python.",
    date: "2023-08-01",
    demoLink: "https://github.com/haroun08/FaceDetection",
    technologies: ["Python", "Java", "OpenCV","Maven"],
  },
  {
    id: 12,
    name: "Trading Simulator",
    description: "This C++ application simulates a trading environment, allowing users to experiment with different trading strategies.",
    date: "2023-03-03",
    demoLink: "https://github.com/achrefGT/TradingSimulator",
    technologies: ["C++"],
  },
];





export const BtnList = [
  { label: "Home",
    link: "/", 
    icon: "home", 
    newTab: false 
  },
  { label: "About", 
    link: "/about", 
    icon: "about", 
    newTab: false 
  },
  { label: "Projects", 
    link: "/projects", 
    icon: "projects", 
    newTab: false 
  },
  { label: "Contact", 
    link: "/contact", 
    icon: "contact", 
    newTab: false 
  },
  {
    label: "Github",
    link: "https://www.github.com/haroun08",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/haroun-barhoumi/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
  {
    label: "LeetCode",
    link: "https://leetcode.com/haroun_brh/",
    icon: "leetcode",
    newTab: true,
  },
  {
    label:"CodeForces",
    link: "https://codeforces.com/profile/Haroun_brh.ar",
    icon:"codeforces",
    newTab:true
  }
];


