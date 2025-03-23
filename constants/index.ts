export const navItems = [
    {
        label: "Home",
        url: "/#hero-section"
    },
    {
        label: "About",
        url: "/#about-section"
    },
    {
        label: "Education",
        url: "/#education-section"
    },
    {
        label: "Skills",
        url: "/#skills-section"
    },
    {
        label: "Projects",
        url: "/#projects-section"
    },
    {
        label: "Contact",
        url: "/#contact-section"
    },
]

export const skills = [
    {
        name: "HTML",
        icon: "/assets/html-logo.svg"
    },
    {
        name: "CSS",
        icon: "/assets/css-logo.svg"
    },
    {
        name: "JavaScript",
        icon: "/assets/javascript-logo.svg"
    },
    {
        name: "NodeJS",
        icon: "/assets/nodejs-logo.svg"
    },
    {
        name: "Express",
        icon: "/assets/expressjs-logo.svg"
    },
    {
        name: "MongoDB",
        icon: "/assets/mongodb-logo.svg"
    },
    {
        name: "React",
        icon: "/assets/react-logo.svg"
    },
    {
        name: "NextJS",
        icon: "/assets/nextjs-logo.svg"
    },
    {
        name: "TypeScript",
        icon: "/assets/typescript-logo.svg"
    },
    {
        name: "MySQL",
        icon: "/assets/mysql-logo.svg"
    },
    {
        name: "Tailwind CSS",
        icon: "/assets/tailwindcss-logo.svg"
    }
];

export const projects = [
    {
        name: "Basic Calculator",
        description: "A simple calculator app for basic arithmetic operations. The project uses HTML, CSS and JavaScript to build a simple but useful frontend calculator application.",
        techStack: "HTML, CSS, JavaScript",
        detailedDesc: "This application can perform basic arithmetic operations like addition, subtraction, multiplication and division along with percentage calculation. Mathematical expressions involving negative numbers and nested expressions (involving brackets) can also be evaluated. It can handle mathematical errors like division by zero and indeterminate form.", 
        gitHubLink: "https://github.com/Anamika-Mukherjee/basic-calculator",
        images: ["/assets/calculator.png", "/assets/bodmas.png", "/assets/decimal.png", "/assets/complex.png", "/assets/bracket.png", "/assets/signed.png", "/assets/error.png"],
        url: "/basic-calculator"
    },
    {
        name: "Interactive Quiz",
        description: "A quiz application having 5-20 multiple choice questions on world geography. Uses HTML, CSS and JavaScript.",
        techStack: "HTML, CSS, JavaScript",
        detailedDesc: "This is a simple quiz application where users get 5 to 20 questions about world geography. Users can select the number of questions to attempt before starting the quiz. They can check their scores at the end of the quiz and the correct answers for the attempted questions are displayed at the end.",
        gitHubLink: "https://github.com/Anamika-Mukherjee/interactive-quiz",
        images: ["/assets/quiz.png", "/assets/quiz-intro.png", "/assets/question.png", "/assets/selection.png", "/assets/submission.png", "/assets/score.png", "/assets/correct-ans.png"],
        url: "/interactive-quiz"
    },
    {
        name: "Speech-to-Text Converter",
        description: "Application that converts speech into text transcriptions. Uses React, Tailwind CSS in frontend and NodeJS and Express in backend.",
        techStack: "React, Tailwind CSS, NodeJS, Express",
        detailedDesc: "The application takes user input in the form of audio and converts it in text transcriptions. Uses DeepInfra Speech Recognition API for the audio to text conversion. User authentication is needed before using the application. Users can also view their previous transcriptions.",
        gitHubLink: "https://github.com/Anamika-Mukherjee/speech-to-text-conversion-frontend",
        deploymentLink: "https://convert-speech-to-text-frontend.vercel.app/",
        images: ["/assets/speech-to-text.png", "/assets/speech-intro.png", "/assets/signin.png", "/assets/user-account.png", "/assets/record.png", "/assets/previous-transcription.png"],
        url: "/speech-to-text"
    },
    {
        name: "Google Drive Clone",
        description: "A cloud storage application where users can upload, manage and share files easily. Uses NextJS and Tailwind CSS in frontend and NodeJS and Express in backend. TypeScript is used for both client-side and server-side scripting.",
        techStack: "NextJS, Tailwind CSS, TypeScript, NodeJS, Express",
        detailedDesc: "The application allows users to upload files and store them in a secure way. It allows users to manage files with the help of different file operations like renaming, sharing and deleting files. File share permissions like view and edit are also incorporated.", 
        gitHubLink: "https://github.com/Anamika-Mukherjee/google-drive-clone-frontend",
        deploymentLink: "https://your-store-mu.vercel.app",
        images: ["/assets/google-drive-clone.png", "/assets/authentication.png", "/assets/dashboard.png", "/assets/file-storage.png", "/assets/file-sharing.png", "/assets/file-edit.png", "/assets/file-search.png"],
        url: "/google-drive-clone"
    },
];

export const contact = {
    email: "anamikamukherjee.raipur@gmail.com",
    linkedin: "https://www.linkedin.com/in/anamika-mukherjee-web-developer",
    github: "https://github.com/Anamika-Mukherjee"
}
