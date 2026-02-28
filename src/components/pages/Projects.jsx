import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce App",
      description: "Robust MERN-stack e-commerce application featuring dynamic product management, advanced filtering, and secure user authentication.",
      liveLink: "https://react-ecommerce-project-manaswini-sasmals-projects.vercel.app/",
      githubLink: "https://github.com/Monisasmal/ReactEcommerceProject",
    },
    {
      title: "Developer Portfolio",
      description: "A clean and modern personal portfolio website built with React.js and deployed on Vercel. This site highlights my skills, projects, and contact information in an interactive and responsive layout.",
      liveLink: "https://manaswini-portfolio.vercel.app/",
      githubLink: "https://github.com/Monisasmal/Manaswini_Portfolio",
    },
    {
      title: "QR Code Generation App",
      description: "A QR Code Generator app in React lets users input text or URLs and instantly creates a scannable QR code. It’s fast, responsive, and great for sharing information easily.",
      liveLink: "https://qr-code-generator-react-manaswini-sasmals-projects.vercel.app/",
      githubLink: "https://github.com/Monisasmal/ReactQuizApp",
    },
    {
      title: "Grid Light Game",
      description: "A Grid Light Game app in React features a grid of lights that toggle on click. The goal is to turn off all lights, using logic and strategy to win.",
      liveLink: "https://grid-light-react-manaswini-sasmals-projects.vercel.app/",
      githubLink: "https://github.com/Monisasmal/Grid-Light-React",
    },
    {
      title: "Markdown Editor",
      description: "A simple and interactive **Markdown Editor Game built with React** where users write markdown in real-time and instantly see the rendered preview while completing fun formatting challenges.",
      liveLink: "https://markdown-editor-manaswini-sasmals-projects.vercel.app/",
      githubLink: "https://github.com/Monisasmal/Markdown_Editor",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-10 py-16">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Projects</h1>
      <p className="text-slate-500 mb-12">
        Below are some of my deployed projects with live demos and source code.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="border border-slate-900 rounded-2xl p-8 hover:bg-slate-50 transition-colors"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h2>
            <p className="text-slate-600 mb-8">{project.description}</p>
            
            <div className="flex gap-6">
              <a 
                href={project.liveLink} 
                className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <ExternalLink size={16} />
              </a>
              <a 
                href={project.githubLink} 
                className="text-slate-600 font-medium flex items-center gap-1 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Github size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;