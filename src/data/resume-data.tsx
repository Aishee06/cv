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
  location: "Kolkata, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about:
    "You need to be different, to be stellar🚀",
  summary:
    "Welcome to my profile! I am Aishee Guha Biswas, driven by curiosity and determination. Always learning, always evolving. With a sharp, rational mindset, I am constantly refining my skills and embracing new challenges. Growth drives me, progress fuels me!",
  avatarUrl: "/public/images/ProfilePic.jpg",
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
      school: "DAV School, Siliguri (CBSE Merit Holder | 90%+ Class 12 (2020-2021))",
      degree: "CBSE Class 12, specializing in Pure Science with Computer Science as an additional subject",
      start: "2019",
      end: "2021",
    },
    {
      school: "Don Bosco School, Oodlabari (ICSE School Topper 2018-2019)",
      degree: "ICSE Class 10, specializing in Science with Computer Science and Mathematics as major subjects",
      start: "2008",
      end: "2019",
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
      title: "Remote Internship",
      start: "April 13, 2024",
      end: "July 13, 2024",
      description: "Developed and presented innovative business strategies on futuristic concepts for car servicing, enhancing product understanding and potential market impact.",
    },
  ],
  skills: [
    "Python","Java","HTML","CSS","JavaScript",
    "MySql","Oracle",
    "Scikit learn","Numpy","Pandas", "Tensorflow", "Keras", "PyTorch", "XGBoost", "OpenCV", "Matplotlib",
    "HuggingFace Transformers", "OpenAI Gymnasium", "Groq", "OctoAI", "EasyOCR", "Streamlit","Langchain", 
    "Diffusers", "LoRA & QLoRA", "Tailwind CSS", "Flask", "Google Colab", "Blender","Latex"

  ],
  projects: [
    {
      title: "Lunar Lander AI with NEAT-Python",
      techStack: ["Personal Project", "NEAT", "OpenAI Gymnasium", "Miniconda", "Python", "Matplotlib", "Networkx"],
      description:
        "Developed an AI using NEAT to control Lunar Lander from Gymnasium, evolving neural networks for soft landings.",
      link: {
        label: "LunarLander_AI",
        href: "https://github.com/Aishee06/LunarLander_AI",
      },
    },
    {
      title: "KanjiGen AI: Generate Kanji Characters from English Descriptions",
      techStack: ["Personal Project", "PyTorch", "HuggingFace Transformers ", "Diffusers", "LoRA", "Tensorboard"],
      description:
        "Developed KanjiGen AI using Stable Diffusion fine-tuned with LoRA to generate novel Kanji characters from English descriptions. Integrated text and image inputs, leveraging deep learning for AI-generated art.",
      link: {
        label: "Text-to-KanjiGen-AI",
        href: "https://github.com/Aishee06/Text-to-KanjiGen-AI",
      },
    },
    {
      title: "Multi-Agent Debate for Improving Factuality and Reasoning in Language Models",
      techStack: ["Personal Project", "WizardMath-7B-v1.1", "GSM8K", "PyTorch", "Transformers", "Matplotlib"],
      description:
        "Developed a Multi-Agent Debate system where AI agents debate math problems to improve factuality and reasoning. Fine-tuned WizardMath-7B on GSM8K dataset, leveraging collaborative AI for enhanced accuracy.",
      link: {
        label: "MultiAgent_Debate",
        href: "https://github.com/Aishee06/MultiAgent_Debate",
      },
    },
    {
      title: "Character-Level Language Model using nanoGPT",
      techStack: ["Personal Project", "enwik8", "PyTorch", "Transformers", "nanoGPT"],
      description:
        "Developed a character-level language model using nanoGPT, trained on the enwik8 dataset. Implemented and compared a baseline GPT model with a modified version using Multi-Scale Positional Encodings, evaluating performance based on bits per character.",
      link: {
        label: "Character_Level_Transformer",
        href: "https://github.com/Aishee06/Character_Level_Transformer",
      },
    },
    {
      title: "Finetuned Llama2-7b using LoRA and QLoRA",
      techStack: ["Personal Project", "Finetuning", "Llama2", "Finetuning LLMs", "LoRA", "HuggingFace Transformers", "QLoRA", "Transformer Reinforcement Learning", "Supervised Fine Tuning"],
      description:
        "Fine-tuned Llama2 model using LoRA and QLoRA techniques, optimizing its performance for specific downstream tasks by leveraging supervised learning and reinforcement learning.",
      link: {
        label: "Finetuned_Llama2-7b_using_LoRA_and_QLoRA",
        href: "https://github.com/Aishee06/Finetuned_Llama2-7b_using_LoRA_and_QLoRA.git",
      },
    },
    {
      title: "Groq with Llama3-8b Assistant",
      techStack: ["Personal Project", "Streamlit", "Langchain", "Groq API", "HuggingFace Embeddings", "Transformers", "FAISS"],
      description:
        "Developed a Retrieval-Augmented Generation (RAG) system using Streamlit, LangChain, Groq's Llama3 LLM, HuggingFace Embeddings and FAISS for intelligent document querying and answer generation from PDF content.",
      link: {
        label: "groq-llama3-assistant",
        href: "https://github.com/Aishee06/groq-llama3-assistant.git",
      },
    },
    {
      title: "Gen-AI Assistant",
      techStack: ["Personal Project", "Streamlit", "OctoAI", "Google Gemini LLM", "Stable Diffusion XL"],
      description:
        "Developed a Streamlit-based AI Assistant utilizing Google Gemini-Pro, Stable Diffusion XL, and OctoAI for advanced chatbot interaction, image captioning, and text-to-image generation.",
      link: {
        label: "Gen-AI_Assistant",
        href: "https://github.com/Aishee06/Gen-AI_Assistant.git",
      },
    },
    {
      title: "Hand Gesture Controlled Mouse",
      techStack: ["Group Project", "Machine Learning", "Python", "OpenCV", "Tensorflow"],
      description:
        "An Interactive Human-Computer Interaction (HCI) system enabling users to manipulate their computer's mouse pointer through specific hand gestures.",
      link: {
         label: "handGestureMouse",
         href: "https://github.com/Aishee06/handGestureMouse",
       },
    },
    {
      title: "AI Irrigation System",
      techStack: ["Group Project", "Python", "Flask", "Tailwind CSS", "JS", "pandas", "scikit-learn"],
      description:
        "The Smart Irrigation Predictor system concentrated on optimizing resource utilization in agricultural settings.",
      link: {
        label: "ai-irrigation",
        href: "https://github.com/RiddhiRaj/ai_irrigation_bg",
      },
    },
    {
      title: "Music Recommendation System",
      techStack: ["Personal Project", "Streamlit", "Pandas", "Python"],
      description:
        "Developed a personalized music recommendation system using Python, Streamlit, and Pandas, implementing content-based filtering to suggest similar tracks based on user preferences.",
      link: {
        label: "Music-Recommendation",
        href: "https://github.com/Aishee06/Music-Recommendation.git",
      },
    },
    {
      title: "Attendance Tracking Through Signature Verification",
      techStack: ["Group Project", "HTML", "Tailwind CSS", "JS", "Flask", "scikit-learn", "numpy"],
      description:
        "Attendance Checker featuring a Signature Similarity Detector, integrating Flask, JavaScript, and ML libraries for signature image analysis, accompanied by HTML-Tailwind CSS interface.",
      link: {
         label: "attendanceChecker",
         href: "https://github.com/Aishee06/AttendanceChecker2",
       },
    },
    {
      title: "Minimal Portfolio",
      techStack: ["Personal Project", "TypeScript", "React", "Tailwind CSS", "shadcn-ui", "Nextjs"],
      description:
        "A modern website using Tailwind, HTML, TypeScript, showcasing my skills, projects and experience in a very minimal, resume-like style.",
      link: {
        label: "cv",
        href: "https://aishee-cv.netlify.app/",
      },
    },
    {
      title: "Extracting text from Images using EasyOCR(Amazon ML Hackathon 2024)",
      techStack: ["Group Project", "numpy", "EasyOCR", "regex", "matplotlib", "tqdm", "cv2"],
      description:
        "Extracted numerical values and units from images using EasyOCR, regex, custom preprocessing, developing a robust pipeline for entity recognition tasks.",
      link: {
        label: "easyocr_text_extraction",
        href: "https://github.com/Aishee06/easyocr_text_extraction",
      },
    },
    {
      title: "Credit Risk Prediction for Loan Applicants",
      techStack: ["Personal Project", "streamlit", "pandas", "numpy", "scikit-learn", "xgboost"],
      description:
        "A machine learning-powered Streamlit web app that predicts whether a loan applicant is a good or bad credit risk based on their financial and personal details.",
      link: {
        label: "Credit_Risk_Prediction_for_Loan_Applicants",
        href: "https://github.com/Aishee06/Credit_Risk_Prediction_for_Loan_Applicants",
      },
    },
  ],
} as const;