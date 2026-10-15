import React, { useState } from 'react';
import bhuvanaImg from './bhuvana.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projects = [
    {
      title: "Personalized Learning & Student Performance Prediction",
      category: "Full-Stack",
      description: "A comprehensive full-stack application designed to predict student performance, manage interactive quizzes, provide analytics, and deliver personalized learning recommendations.",
      tech: ["React.js", "FastAPI", "Python", "MySQL", "SQLAlchemy", "JWT"],
      github: "https://github.com/bhuvanamnms",
      live: "#"
    },
    {
      title: "Enhanced Criminal Prediction System",
      category: "AI & ML",
      description: "Developed an advanced machine learning system using historical datasets to analyze crime patterns, detect trends, and predict criminal behaviors with data preprocessing techniques.",
      tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn"],
      github: "https://github.com/bhuvanamnms",
      live: "#"
    },
    {
      title: "Digital Marketing Website & Delivery App UI",
      category: "Frontend & UI/UX",
      description: "Built a responsive business website for local enterprises using modern frontend practices, alongside a mobile delivery app interface prototype designed via Figma.",
      tech: ["HTML5", "CSS3", "JavaScript", "Figma", "Netlify"],
      github: "https://github.com/bhuvanamnms",
      live: "https://push-digitalmarketing.netlify.app/"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Python", "Flask", "FastAPI", "REST APIs", "JWT Authentication"]
    },
    {
      category: "Database & ML",
      skills: ["MySQL", "SQLAlchemy", "Scikit-Learn", "Pandas", "NumPy"]
    },
    {
      category: "Tools & Workflow",
      skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "Netlify"]
    }
  ];

  const education = [
    {
      degree: "M.E. Computer Science and Engineering",
      institution: "Annapoorana Engineering College, Salem",
      period: "2025 – 2027",
      status: "Pursuing | Focused on Advanced Software Systems & AI"
    },
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Surya Engineering College, Erode",
      period: "2021 – 2025",
      status: "Completed | CGPA: 7.8"
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bhuvanam417@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="bg-[#070605] text-gray-100 min-h-screen font-sans selection:bg-orange-600 selection:text-white relative overflow-x-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* RESPONSIVE NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070605]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-lg sm:text-xl font-black tracking-wider bg-gradient-to-r from-white via-gray-200 to-orange-500 bg-clip-text text-transparent">
            BHUVANESHWARI M
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-orange-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-orange-400 transition-colors">Education</a>
            <a href="#contact" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-600/20">
              Get in touch
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-300 text-2xl p-2 focus:outline-none">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#120f0d] border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-400">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-400">Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-400">Skills</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-400">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-orange-600 text-white text-center py-3 rounded-xl font-medium">Get in touch</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION / ABOUT */}
      <section id="about" className="pt-36 pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Full-Stack Developer & ML Explorer
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Hi, I'm Bhuvaneshwari M <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400">Building Scalable Web Apps</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl font-light mx-auto lg:mx-0">
            Aspiring Full-Stack Software Engineer with a strong foundation in HTML, CSS, JavaScript, React, Python, and FastAPI. Currently pursuing my M.E. in Computer Science, aiming to build secure, data-driven applications that solve real-world problems.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-medium px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-orange-600/25">
              Explore Projects ↓
            </a>
            <a 
              href="/resume.pdf" 
              download="Bhuvaneshwari_Resume.pdf"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-medium px-7 py-3.5 rounded-xl transition-all flex items-center gap-2"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* PHOTO CARD */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md bg-gradient-to-b from-[#16110f] to-[#0e0a08] border border-white/10 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden group">
            
            <div className="absolute top-8 left-8 z-10 bg-[#070605]/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl shadow-xl">
              <span className="text-orange-500 font-bold text-lg">03+</span>
              <p className="text-gray-400 text-xs">Core Projects</p>
            </div>

            <div className="w-full h-80 rounded-2xl overflow-hidden mt-6 bg-[#1a1310] flex items-center justify-center border border-white/5">
              <img 
                src={bhuvanaImg} 
                alt="Bhuvaneshwari M" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute bottom-8 right-8 z-10 bg-[#070605]/80 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl shadow-xl">
              <span className="text-orange-500 font-bold text-lg">M.E</span>
              <p className="text-gray-400 text-xs">CSE (Annapoorana)</p>
            </div>
          </div>
        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-orange-500 text-sm font-bold tracking-widest uppercase">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Featured Projects</h2>
            <p className="text-gray-400 mt-2 max-w-xl">Working applications with source code and live demos.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-[#120f0d] border border-white/10 p-1.5 rounded-2xl">
            {['All', 'Full-Stack', 'AI & ML', 'Frontend & UI/UX'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === tab 
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-[#120f0d] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <div>
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-gray-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-8 mt-8 border-t border-white/10">
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition shadow-md">
                    Live Demo ↗
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 px-4 py-2 rounded-xl text-sm font-medium transition">
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIZED SKILLS */}
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-14">
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Technical Skills</h2>
          <p className="text-gray-400 mt-2">Verified technologies and tools I utilize for development.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group, index) => (
            <div key={index} className="bg-[#120f0d] border border-white/10 p-6 rounded-3xl">
              <h3 className="text-lg font-bold text-orange-400 mb-4 pb-2 border-b border-white/10">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-gray-200 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-14">
          <p className="text-orange-500 text-sm font-bold tracking-widest uppercase">Academic Background</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Education</h2>
        </div>

        <div className="max-w-3xl space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-[#120f0d] border border-white/10 p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {edu.period}
                </span>
                <p className="text-gray-400 text-xs mt-2">{edu.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="bg-gradient-to-b from-[#14100e] to-[#0c0a08] border border-white/10 rounded-[2.5rem] p-8 sm:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          
          <h2 className="text-3xl sm:text-5xl font-black text-white">Let's Connect & Collaborate</h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-lg mx-auto font-light">
            I am actively looking for Full-Stack Developer opportunities. Feel free to reach out via email, LinkedIn, or GitHub!
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:bhuvanam417@gmail.com" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-medium px-8 py-4 rounded-2xl transition-all shadow-xl shadow-orange-600/25">
              Send Me an Email →
            </a>
            <button 
              onClick={handleCopyEmail}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-medium px-8 py-4 rounded-2xl transition-all"
            >
              {copiedEmail ? '✓ Email Copied!' : '📋 Copy Email'}
            </button>
          </div>

          <div className="mt-12 p-6 bg-[#070605] border border-white/10 rounded-2xl max-w-sm mx-auto shadow-inner flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Verified Profiles
            </div>
            <p className="text-white font-bold text-sm">bhuvanam417@gmail.com</p>
            <div className="flex gap-4 pt-1 text-xs">
              <a href="https://github.com/bhuvanamnms" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition underline">GitHub</a>
              <span className="text-gray-600">•</span>
              <a href="https://www.linkedin.com/in/bhuvaneshwari2003" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition underline">LinkedIn</a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-white tracking-wider">BHUVANESHWARI M</span>
          <p>© 2026 Bhuvaneshwari M. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}