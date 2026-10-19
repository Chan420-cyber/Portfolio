"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { 
  Download, 
  ArrowUpRight, 
  ArrowDown, 
  ExternalLink,
  Code2,
  Database,
  GitBranch,
  Layout,
  Mail,
  Briefcase,
  Award,
  Trophy,
  Terminal,
  User,
  Menu,
  X
} from "lucide-react";


// Project data array
const projects = [
  {
    title: "Bookstore Management System",
    description: "An inventory-to-order interface concept for a more organized bookstore workflow.",
    image: "/bookstore.png", // Update with your actual image path
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    title: "LibraFlow Library System",
    description: "A focused library interface concept for discovering books and managing circulation.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop",
    tech: ["PHP", "JavaScript", "MySQL"],
  }, 
  {
    title: "AgriChains",
    description: "A blockchain project exploring a cleaner connection between agriculture and traceability.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Weather App",
    description: "A weather interface concept that puts current conditions and the daily outlook first.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript"],
  }
];

// Skills data
const skills = [
  {
    category: "Frontend",
    icon: <Layout size={18} />,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"]
  },
  {
    category: "Backend",
    icon: <Code2 size={18} />,
    items: ["PHP", "Laravel", "Node.js", "Express"]
  },
  {
    category: "Databases",
    icon: <Database size={18} />,
    items: ["MySQL", "MongoDB"]
  },
  {
    category: "Developer Tools",
    icon: <GitBranch size={18} />,
    items: ["Git", "GitHub"]
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on scroll or outside click
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !target.closest('button[aria-label="Toggle menu"]')
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 w-full border-b border-gray-800/60 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="text-lg sm:text-xl font-bold tracking-tight">
            BuildBy<span className="text-blue-500">Chan</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Desktop Resume Button */}
          <a 
            href="/CHANYAHOR_FullStack_Developer_Resume.pdf" 
            download="CHANYAHOR_FullStack_Developer_Resume.pdf"
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-md transition-colors"
          >
            <span className="hidden lg:inline">Download Resume</span>
            <span className="lg:hidden">Resume</span>
            <Download size={14} className="sm:w-4 sm:h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden border-t border-gray-800/60 bg-[#0a0a0a] px-4 py-4"
          >
            <nav className="flex flex-col gap-4 text-sm text-gray-300">
              <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Home</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Projects</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">About</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Skills</a>
              <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Experience</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Contact</a>

              {/* Mobile Resume Button */}
              <a 
                href="/CHANYAHOR_FullStack_Developer_Resume.pdf" 
                download="CHANYAHOR_FullStack_Developer_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-md mt-2"
              >
                Download Resume
                <Download size={16} />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 w-full pt-16 sm:pt-20">
        
        {/* ================= HERO SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="w-6 sm:w-8 h-[1px] bg-blue-500"></span>
              <span className="text-xs sm:text-sm text-gray-400 tracking-wide uppercase">Junior Full-Stack Developer</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-[1.1] tracking-tight mb-5 sm:mb-6">
              Building Web Experiences <br className="hidden sm:inline" />
              That <span className="text-blue-500">Solve Real Problems.</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-10">
              I'm Chan, a full-stack developer passionate about building responsive interfaces, practical web applications, and reliable backend systems. I enjoy turning ideas into functional products and continuously improving my development skills.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a href="#projects" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-md transition-colors">
                View Projects
                <ArrowDown size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#contact" className="flex items-center gap-2 border border-gray-700 hover:border-gray-500 hover:bg-gray-900 text-white text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-md transition-colors">
                Contact Me
                <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Open to full-stack / web opportunities
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#111111] border border-gray-800 rounded-xl p-4 sm:p-5 shadow-2xl overflow-x-auto">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800">
                <span className="text-xs text-gray-500 font-mono">developer.json</span>
                <ArrowUpRight size={14} className="text-blue-500" />
              </div>
              <pre className="text-xs sm:text-sm font-mono leading-relaxed text-gray-300">
                <code>
                  {"{"}<br />
                  {"  "}<span className="text-blue-400">"name"</span>: <span className="text-green-400">"Chan"</span>,<br />
                  {"  "}<span className="text-blue-400">"focus"</span>: <span className="text-green-400">"Full-stack"</span>,<br />
                  {"  "}<span className="text-blue-400">"basedIn"</span>: <span className="text-green-400">"Manipur, India"</span><br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-gray-800/60">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-blue-500 font-mono tracking-wider">01 /</span>
              <span className="text-xs text-gray-400 tracking-widest uppercase">Selected Projects</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
              Ideas turned into interfaces.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
              Four projects. Practical problems. Interface-first concepts, not just product screenshots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors flex flex-col">
                <div className="w-full h-44 sm:h-56 lg:h-64 bg-gray-900 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Built with</span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-[10px] text-gray-400 border border-gray-800 px-2 py-0.5 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-800/60">
                    <a href="#" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                      <Terminal size={14} />
                      GitHub
                    </a>
                    <a href="#" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                      Live demo
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-gray-800/60">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-blue-500 font-mono tracking-wider">02 /</span>
            <span className="text-xs text-gray-400 tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 sm:mb-12">
            Curious by nature. Builder by choice.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-sm sm:text-base text-gray-400 leading-relaxed">
              <p>
                I'm Chan, a Bachelor of Computer Applications (BCA) Honor graduate from NIELIT, Manipur, India, passionate about full-stack development, problem-solving, and building practical web applications.
              </p>
              <p>
                From responsive interfaces to reliable backend systems, I enjoy turning ideas into functional products. I'm seeking a Full-Stack Developer role where I can contribute, learn, and keep improving.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4 text-blue-500 text-sm">
                  <Briefcase size={16} />
                  <span className="font-mono text-xs tracking-wider uppercase">Education</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Bachelor of Computer Applications</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4">NIELIT · Manipur, India</p>
                <span className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded-sm">BCA Honor Graduate</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS SECTION ================= */}
        <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-gray-800/60">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-blue-500 font-mono tracking-wider">03 /</span>
            <span className="text-xs text-gray-400 tracking-widest uppercase">Technical Skills</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 sm:mb-12">
            The tools behind the work.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-[#111111] border border-gray-800 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4 sm:mb-6 text-blue-500">
                  {skill.icon}
                  <h3 className="text-sm font-semibold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="text-xs text-gray-400 bg-gray-900 border border-gray-800 px-2.5 py-1 rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= EXPERIENCE & ACHIEVEMENTS ================= */}
        <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-gray-800/60">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-blue-500 font-mono tracking-wider">04 /</span>
            <span className="text-xs text-gray-400 tracking-widest uppercase">Experience & Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 sm:mb-12">
            Learning through real work.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            <div className="lg:col-span-7">
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-5 sm:p-6 h-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600/10 p-2 rounded-lg text-blue-500 shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">LMP</h3>
                      <p className="text-xs sm:text-sm text-gray-400">Full-Stack / Web Development Intern</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded-sm self-start">Internship</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  Hands-on web development experience working with PHP and Laravel, with a focus on routing and controllers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["PHP", "Laravel", "Routing", "Controllers"].map((tag) => (
                    <span key={tag} className="text-[10px] text-gray-400 border border-gray-800 px-2 py-0.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Hackathon Card (Featured) */}
              <Link 
                href="/achievements/regen-manipur-2024"
                className="bg-[#111111] border border-gray-800 rounded-xl p-4 sm:p-5 flex items-start gap-4 hover:border-gray-600 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
              >
                <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500 mt-1 shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                  <Award size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-blue-400 transition-colors">
                    Regen Manipur Hackathon 2024
                  </h4>
                  <p className="text-xs text-gray-400 truncate">
                    Hackathon Finalist · AgriChains
                  </p>
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors shrink-0 mt-1" />
              </Link>

              {/* Typing Competition Card */}
              <Link 
                href="/achievements/typing-competition"
                className="bg-[#111111] border border-gray-800 rounded-xl p-4 sm:p-5 flex items-start gap-4 hover:border-gray-600 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
              >
                <div className="bg-purple-500/10 p-2 rounded-lg text-purple-500 mt-1 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <Trophy size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-blue-400 transition-colors">
                    First Position: Typing Competition
                  </h4>
                  <p className="text-xs text-gray-400 truncate">
                    1st Place · Speed & Accuracy
                  </p>
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors shrink-0 mt-1" />
              </Link>
              
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-gray-800/60">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-blue-500 font-mono tracking-wider">05 /</span>
            <span className="text-xs text-gray-400 tracking-widest uppercase">Get In Touch</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-5 sm:mb-6">
                Let's build something <br className="hidden sm:inline" />
                <span className="text-blue-500">useful.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-lg mb-6 sm:mb-8 max-w-xl">
                Hiring a Full-Stack Developer? I'd love to connect about web development opportunities.
              </p>
              <a href="mailto:ashimrayahor@gmail.com" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-md transition-colors mb-5 sm:mb-6">
                Contact Me
                <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Open to full-stack / web opportunities
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center gap-3 sm:gap-4">
              <a href="mailto:ashimrayahor@gmail.com" className="flex items-center justify-between bg-[#111111] border border-gray-800 hover:border-gray-600 rounded-xl p-3.5 sm:p-4 transition-colors group">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="bg-gray-900 p-2 rounded-lg text-gray-400 group-hover:text-blue-500 transition-colors shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium">Email</h4>
                    <p className="text-xs text-gray-500 truncate">ashimrayahor@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors shrink-0" />
              </a>
              
              <a href="https://github.com/Chan420-cyber" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-[#111111] border border-gray-800 hover:border-gray-600 rounded-xl p-3.5 sm:p-4 transition-colors group">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="bg-gray-900 p-2 rounded-lg text-gray-400 group-hover:text-blue-500 transition-colors shrink-0">
                    <Terminal size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium">GitHub</h4>
                    <p className="text-xs text-gray-500 truncate">Chan420-cyber</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors shrink-0" />
              </a>

              <a href="https://linkedin.com/in/ashimray" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-[#111111] border border-gray-800 hover:border-gray-600 rounded-xl p-3.5 sm:p-4 transition-colors group">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="bg-gray-900 p-2 rounded-lg text-gray-400 group-hover:text-blue-500 transition-colors shrink-0">
                    <User size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-medium">LinkedIn</h4>
                    <p className="text-xs text-gray-500 truncate">ashimray</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors shrink-0" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="w-full border-t border-gray-800/60 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 text-center md:text-left">
            <div className="text-lg sm:text-xl font-bold tracking-tight">
              BuildBy<span className="text-blue-500">Chan</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <span>Full-Stack Developer · Manipur, India</span>
              <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                Back to top
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 gap-2 sm:gap-4 text-center md:text-left">
            <p>© 2026 Chan. All rights reserved.</p>
            <p>Contact · GitHub · LinkedIn</p>
          </div>
        </div>
      </footer>

    </div>
  );
}