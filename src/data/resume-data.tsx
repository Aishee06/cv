import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aishee Guha Biswas",
  initials: "AGB",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about:
    "CSIT engineer with a passion for pushing boundaries, fueled by the potential of AI and Machine Learning.",
  summary:
    "As a CS Engineer, I've found immense satisfaction in delving into the world of Machine Learning, where I've led and contributed to several hands-on projects. I've eagerly seized every chance to engage in collaborative projects within my college community, setting a strong foundation for my future endeavors",
  avatarUrl: "https://i.postimg.cc/zB8YqWyC/Aishee.jpg",
  personalWebsiteUrl: "https://aishee-cv.netlify.app/",
  contact: {
    email: "aisheeguhabiswas04@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Aishee06",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aishee-guha-biswas/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "University of Engineering and Management, Kolkata",
      degree: "B.Tech in Computer Science and Information Technology",
      start: "2021",
      end: "2025",
    },
    {
      school: "Don Bosco School, Oodlabari",
      degree: "ICSE Class 10, specializing in Science with Computer Science and Mathematics as major subjects",
      start: "2008",
      end: "2019",
    },
    {
      school: "DAV School,Siliguri",
      degree: "CBSE Class 12, specializing in Pure Science with Computer Science as an additional subject",
      start: "2019",
      end: "2021",
    },
    
  ],
  work: [
    {
      company: "ISRO",
      link: "https://www.isro.gov.in",
      badges: [],
      title: "Online Training Programme",
      start: "July 20, 2023",
      end: "August 7, 2023",
      description: "Explored the importance and historical context of space research and exploration, along with ISRO's contribution to it. Examined astrophysical principles encompassing celestial events, cosmic formations, and the dynamics of matter and energy in the cosmos. Additionally, delved into astrochemistry, investigating the chemical makeup of cosmic entities.",
    },
    {
      company: "Helpy Moto Pvt.Ltd",
      link: "https://helpymoto.com/",
      badges: [],
      title: "Online Internship",
      start: "April 13, 2024",
      end: "July 13, 2024",
      description: "Developed and presented innovative business strategies on futuristic concepts for car servicing, enhancing product understanding and potential market impact.",
    },
  ],
  skills: [
    "Java","Python","C","HTML","CSS","JavaScript",
    "MySql","Oracle",
    "Scikit learn","Numpy","Pandas","Tensorflow", "Keras", "PyTorch", "OpenCV", "Matplotlib",
    "HuggingFace Transformers", "Groq", "OctoAI",
    "Streanlit","Langchain", "Tailwind CSS", "Flask",
    "Google Cloud Platform for AIML",
    "Blender","Latex"

  ],
  projects: [
    {
      title: "Groq with Llama3-8b Assistant",
      techStack: ["Side Project", "Streamlit", "Langchain", "Groq API", "HuggingFace Embeddings", "Transformers", "FAISS"],
      description:
        "Developed a Retrieval-Augmented Generation (RAG) system using Streamlit, LangChain, Groq's Llama3 LLM, HuggingFace Embeddings and FAISS for intelligent document querying and answer generation from PDF content.",
      link: {
        label: "groq-llama3-assistant",
        href: "https://github.com/Aishee06/groq-llama3-assistant.git",
      },
    },
    {
      title: "Gen-AI Assistant",
      techStack: ["Side Project", "Streamlit", "OctoAI", "Google Gemini LLM", "Stable Diffusion XL"],
      description:
        "Developed a Streamlit-based AI Assistant utilizing Google Gemini-Pro, Stable Diffusion XL, and OctoAI for advanced chatbot interaction, image captioning, and text-to-image generation.",
      link: {
        label: "Gen-AI_Assistant",
        href: "https://github.com/Aishee06/Gen-AI_Assistant.git",
      },
    },
    {
      title: "AI Irrigation System",
      techStack: ["Side Project", "Python", "Flask", "Tailwind CSS", "JS", "pandas", "scikit-learn"],
      description:
        "The Smart Irrigation Predictor system concentrated on optimizing resource utilization in agricultural settings.",
      link: {
        label: "ai-irrigation",
        href: "https://github.com/RiddhiRaj/ai_irrigation_bg",
      },
    },
    {
      title: "Hand Gesture Controlled Mouse",
      techStack: ["Side Project", "Machine Learning", "Python", "OpenCV", "Tensorflow"],
      description:
        "An Interactive Human-Computer Interaction (HCI) system enabling users to manipulate their computer's mouse pointer through specific hand gestures.",
      link: {
         label: "handGestureMouse",
         href: "https://github.com/Aishee06/handGestureMouse",
       },
    },
    {
      title: "Attendance Tracking Through Signature Verification",
      techStack: ["Side Project", "HTML", "Tailwind CSS", "JS", "Flask", "scikit-learn", "numpy"],
      description:
        "Attendance Checker featuring a Signature Similarity Detector, integrating Flask, JavaScript, and ML libraries for signature image analysis, accompanied by HTML-Tailwind CSS interface.",
      link: {
         label: "attendanceChecker",
         href: "https://github.com/Aishee06/AttendanceChecker2",
       },
    },
    {
      title: "Habitable Exoplanets",
      techStack: ["NASA Space Apps Challenge 2023", "GenAI", "Canva"],
      description:
        "Made an exoplanet travel bureau, authored an extensive illustrated concept paper, designed a user-friendly interface (UI/UX) for an e-commerce platform, and created a corresponding video presentation.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Minimal Portfolio",
      techStack: ["Side Project", "TypeScript", "React", "Tailwind CSS", "shadcn-ui", "Nextjs"],
      description:
        "A modern website using Tailwind, HTML, TypeScript, showcasing my skills, projects and experience in a very minimal, resume-like style.",
      link: {
        label: "cv",
        href: "https://aishee-cv.netlify.app/",
      },
    },
    {
      title: "AI In Agriculture: A Social Engineering Perspective",
      techStack: ["Research Paper", "Python", "Kaggle", "Neural Networks", "Tensorflow", "scikit-learn", "OpenCV", "Pandas"],
      description:
        "A research study demonstrating the superiority of deep learning models like CNN and VGG16 over traditional methods for tomato image classification in agriculture.",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;