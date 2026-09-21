export const personalDetails = {
  name: "Snehal Kanpariya",
  role: "Front End & Full-Stack Developer",
  shortTagline: "A mindful developer crafting elegant, high-performance web & mobile software solutions.",
  bio: "Motivated and detail-oriented Postgraduate MCA final-year student with a strong foundation in web development and software engineering. Passionate about front-end and full-stack development, building responsive, user-friendly web and mobile applications.",
  location: "Navrangpura, Ahmedabad, Gujarat, India",
  timezone: "Asia/Kolkata", // IST UTC+5:30
  email: "snehalkanpariya@gmail.com",
  phone: "+91 6354832682",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  status: "Available for Projects & Opportunities",
};

export const educationList = [
  {
    id: 1,
    degree: "Master of Computer Application",
    institution: "Gujarat Vidyapith",
    period: "June 2025 - Present",
    tag: "Tiny matcha & sumi-ink",
    active: true,
    highlight: "Postgraduate Final-Year Scholar",
    details: "Advanced software engineering, modern web architectures, mobile app design, and full-stack cloud workflows."
  },
  {
    id: 2,
    degree: "Bachelor of Computer Application",
    institution: "Saurashtra University",
    period: "June 2022 - Mar 2025",
    tag: "Foundation & Core Systems",
    active: false,
    highlight: "Graduated with Distinction",
    details: "Core Computer Science concepts, object-oriented programming, relational databases (SQL), software development lifecycle, and web fundamentals."
  }
];

export const skillsList = [
  { name: "React", category: "Front-End", level: "Expert", glow: "#61DAFB" },
  { name: "React Native", category: "Mobile", level: "Advanced", glow: "#61DAFB" },
  { name: "JavaScript", category: "Language", level: "Expert", glow: "#F7DF1E" },
  { name: "HTML & CSS", category: "Front-End", level: "Expert", glow: "#E34F26" },
  { name: "Node.js", category: "Back-End", level: "Advanced", glow: "#339933" },
  { name: "Express.js", category: "Back-End", level: "Advanced", glow: "#FFFFFF" },
  { name: "MongoDB", category: "Database", level: "Advanced", glow: "#47A248" },
  { name: "Python", category: "Language", level: "Advanced", glow: "#3776AB" },
  { name: "Django", category: "Back-End", level: "Advanced", glow: "#092E20" },
  { name: "C#", category: "Software", level: "Intermediate", glow: "#239120" },
  { name: "SQL", category: "Database", level: "Advanced", glow: "#4479A1" },
  { name: "Git & GitHub", category: "Tools", level: "Expert", glow: "#F05032" },
  { name: "REST API", category: "Architecture", level: "Expert", glow: "#FF6C37" }
];

export const projectCategories = ["All", "Full-Stack (MERN / Mobile)", "Python / Django", "Software & Desktop"];

export const projectsList = [
  {
    id: "annadata",
    title: "Annadata - Full Stack Agricultural & Rental Platform",
    subtitle: "A comprehensive platform for agricultural equipment rental, crop disease advisory, and marketplace.",
    category: "Full-Stack (MERN / Mobile)",
    stack: ["React", "React Native", "Node.js", "Express", "MongoDB", "Google GenAI", "Cloudinary", "GeoJSON"],
    imageTheme: "green",
    highlights: [
      "Built a comprehensive platform combining equipment rentals, marketplace, and AI disease diagnosis.",
      "Implemented MongoDB GeoJSON 2dsphere indexing for real-time proximity-based equipment search (GET /api/services/nearby).",
      "Integrated Google GenAI & Cloudinary for automated instant crop disease diagnosis and advisory recommendations.",
      "Developed secure OTP verification workflow for equipment pickup/return alongside role-based JWT authentication."
    ],
    github: "https://github.com",
    liveUrl: "#"
  },
  {
    id: "cake-shop",
    title: "Cake Shop Full Stack Website",
    subtitle: "Dynamic e-commerce website with product listing, interactive ordering system, and admin panel.",
    category: "Python / Django",
    stack: ["Django", "Python", "Relational DB (SQL)", "HTML5", "CSS3", "JavaScript"],
    imageTheme: "sand",
    highlights: [
      "Built a complete dynamic website using Django framework with product catalog, ordering workflow, and custom admin dashboard.",
      "Integrated relational SQL database for managing customer orders, product inventory, and user sessions seamlessly.",
      "Deployed as a fully working full-stack web application with responsive UI components."
    ],
    github: "https://github.com",
    liveUrl: "#"
  },
  {
    id: "velocore",
    title: "Velocore Client Static Website",
    subtitle: "Modern, high-performance static website built for IT professionals client 'Velocore'.",
    category: "Full-Stack (MERN / Mobile)",
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "UI/UX Architecture"],
    imageTheme: "matcha",
    highlights: [
      "Designed and developed a professional web portal tailored for IT agency client 'Velocore'.",
      "Focused on modern glassmorphic UI/UX, fast page loads, and seamless responsiveness across all device viewports.",
      "Implemented custom interactive UI elements and micro-animations using pure JavaScript."
    ],
    github: "https://github.com",
    liveUrl: "#"
  },
  {
    id: "blood-bank",
    title: "Blood Bank Management System",
    subtitle: "Desktop software application to manage blood donation records, inventory, and donor-recipient matching.",
    category: "Software & Desktop",
    stack: ["C#", ".NET", "SQL Database", "Desktop UI"],
    imageTheme: "dark",
    highlights: [
      "Developed a robust desktop application for managing blood bank donation records and real-time availability.",
      "Implemented full CRUD operations for donor registries, blood group requests, and inventory management.",
      "Engineered with a focus on strict data integrity, fast query execution, and high software usability."
    ],
    github: "https://github.com",
    liveUrl: "#"
  }
];

export const languages = ["English", "Hindi", "Gujarati"];
export const strengths = [
  "Leadership & Teamwork",
  "Strong Communication Skills",
  "Time Management",
  "Problem-Solving Mindset",
  "Quick Learner with Adaptability"
];
