export const PERSONAL_INFO = {
    name: "Niranj S",
    title: "Robotics & Autonomous Systems Engineer",
    email: "niranjx64@gmail.com",
    phone: "+91 8921315903",
    github: "https://github.com/Niranj-S/",
    linkedin: "https://www.linkedin.com/in/niranj-s/",
    summary: "Specializing in autonomous robotic systems, edge AI execution, and defense tech. Experienced in building end-to-end intelligent systems integrating computer vision, sensor fusion, and large language models.",
};

export const SKILLS = [
    {
        category: "Languages",
        items: ["Python", "C++", "Embedded C", "C"],
    },
    {
        category: "Core Technologies",
        items: [
            "Linux", "ROS2", "OpenCV", "TensorFlow", "PyTorch", "ArduPilot", "Pymavlink",
            "Ollama", "Gradio", "Arduino IDE", "MATLAB"
        ],
    },
    {
        category: "Hardware & Platforms",
        items: [
            "Raspberry Pi", "ESP-32", "Pixhawk", "3D Printing", "Creality", "Bambu Studio",
            "LiDAR", "Sensor Fusion"
        ],
    },
    {
        category: "CAD & Design",
        items: ["Fusion360", "SolidWorks"],
    },
];

export const EXPERIENCE = [
    {
        company: "Indian Army (XI Corps)",
        role: "Technical Intern | Machine Learning, Aerial Robotics",
        period: "May 2025 – Aug 2025",
        description: [
            "Designed, developed, and tested autonomous UAV systems for defense applications, integrating computer vision, sensor fusion, and payload capabilities in compliance with stringent military standards.",
            "Implemented a secure, self-hosted LLM solution with RAG to assist military personnel with knowledge access and task automation.",
            "Engineered secure communication protocols on micro-controller platforms for defense applications, ensuring reliability, robustness, and data integrity in mission-critical environments."
        ]
    },
    {
        company: "Renovation Tech Robotics and Aeromodelling",
        role: "Head of Research and Development",
        period: "Jan 2024 – Present",
        description: [
            "Leading technical R&D initiatives focusing on autonomous agents, advanced aeromodelling, and deploying robotic systems for varied applications."
        ]
    }
];

export const PROJECTS = [
    {
        slug: "insect",
        title: "Insect Bionic Beetle",
        tech: ["Robotics", "Surveillance"],
        period: "Recent",
        description: "An insect-sized bionic robotic beetle designed for surveillance and reconnaissance operations.",
        image: "/media/insect.png",
    },
    {
        slug: "vtol-disaster-management",
        title: "VTOL Disaster Response",
        tech: ["ArduPilot", "Pymavlink", "Pixhawk"],
        period: "Dec 2024",
        description: "A cost-effective VTOL aircraft made for disaster management, performing real-time flood mapping, human detection, and payload delivery.",
        image: "/media/vtol.png",
    },
    {
        slug: "ordis",
        title: "Ordis Speech AI",
        tech: ["GPT-SoVITS", "Python", "LLMs"],
        period: "Feb 2024",
        description: "An emotionally expressive voice model trained on GPT-SoVITS for realistic speech synthesis and interactions.",
        image: "/media/ordis.jpg",
    },
    {
        slug: "afsk-gps-transceiver",
        title: "AFSK GPS Transceiver",
        tech: ["Embedded C", "Radio"],
        period: "Completed",
        description: "An attachment for existing radios to transmit and receive digital data over audio frequencies, specifically functioning as a GPS transceiver.",
        image: "/media/afsk.png",
    },
    {
        slug: "tank-detection",
        title: "Tank Detection Algorithm",
        tech: ["OpenCV", "Python", "Computer Vision"],
        period: "Apr 2024",
        description: "A robust tank detection algorithm utilizing OpenCV, optimized for threat identification in dynamic environments.",
        image: "/media/tank.png",
    },
    {
        slug: "momentum-humanoid",
        title: "Momentum Humanoid",
        tech: ["Python", "Arduino", "LLMs", "Robotics"],
        period: "Apr 2023",
        description: "A 12DOF desktop-sized humanoid robot featuring head tracking, human recognition, and conversational capabilities via integrated LLMs.",
        image: "/media/momentum.png",
    }
];

export const ACHIEVEMENTS = [
    {
        title: "Outstanding Technical Contribution",
        organization: "XI Corps Commander, Jalandhar Cantonment",
        date: "Aug 2025",
        image: "/media/achievement1.jpeg"
    },
    {
        title: "Smart India Hackathon '24 FINALIST",
        organization: "GITAM, Vishakapatanam",
        date: "Dec 2024"
    },
    {
        title: "First Runner Up - Tech Marathon: Python Challenge",
        organization: "Lovely Professional University",
        date: "Sep 2023"
    }
];

export const CERTIFICATES = [
    {
        title: "Technical Collaborator",
        issuer: "Indian Army",
        date: "Aug 2025",
        image: "/media/cert1.jpeg"
    },
    {
        title: "Certificate of Achievement",
        issuer: "",
        date: "",
        image: "/media/cert2.jpeg"
    },
    {
        title: "Parametric CAD",
        issuer: "Onshape",
        date: "Apr 2025",
        image: "/media/onshape.jpeg"
    },
    {
        title: "Electricity and Electronics",
        issuer: "Udemy",
        date: "Nov 2024",
        image: "/media/udemy.jpg"
    },
    {
        title: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        date: "Oct 2023",
        image: "/media/webdesign.png"
    }
];

export const EDUCATION = [
    {
        institution: "Lovely Professional University",
        degree: "Bachelor of Technology in Robotics and Automation Engineering",
        period: "Aug 2023 – Present",
        location: "Phagwara, Punjab",
        score: "CGPA: 7.78"
    },
    {
        institution: "Carmel CMI School",
        degree: "Higher Secondary (PCM)",
        period: "Completed Mar 2023",
        location: "Palakkad, Kerala",
        score: "90.2%"
    }
];
