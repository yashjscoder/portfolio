import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Shield, Code, Terminal, Database, Lock, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    // Languages
    { name: 'Python', icon: '🐍', category: 'language' },
    { name: 'Java', icon: '☕', category: 'language' },
    { name: 'JavaScript', icon: '🟨', category: 'language' },
    { name: 'C/C++', icon: '⚡', category: 'language' },
    { name: 'HTML', icon: '🔥', category: 'language' },
    { name: 'CSS (Tailwind)', icon: '🎨', category: 'language' },
    
    // Frameworks
    { name: 'React.js', icon: '⚛️', category: 'framework' },
    { name: 'Redux.js', icon: '🔄', category: 'framework' },
    { name: 'Node.js', icon: '🟢', category: 'framework' },
    { name: 'Express.js', icon: '🚀', category: 'framework' },
    
    // Security Tools
    { name: 'VMware', icon: '💻', category: 'security' },
    { name: 'Kali Linux', icon: '🐉', category: 'security' },
    { name: 'Nmap', icon: '🗺️', category: 'security' },
    { name: 'Bettercap', icon: '🛡️', category: 'security' },
    { name: 'Wireshark', icon: '🦈', category: 'security' },
    { name: 'OWASP ZAP', icon: '⚡', category: 'security' },
    { name: 'Metasploit', icon: '💥', category: 'security' },
    { name: 'Nexpose', icon: '🔍', category: 'security' },
    { name: 'SQLmap', icon: '🗃️', category: 'security' },
    { name: 'Maltego', icon: '🕸️', category: 'security' },
    { name: 'Veil Framework', icon: '👻', category: 'security' },
    { name: 'Crunch', icon: '🔨', category: 'security' },
    { name: 'Netdiscover', icon: '🔎', category: 'security' },
    { name: 'Zenmap', icon: '🗺️', category: 'security' },
    { name: 'Arpspoof', icon: '🎭', category: 'security' },
    { name: 'Evilgrade', icon: '⬆️', category: 'security' },
    { name: 'Backdoor Factory', icon: '🏭', category: 'security' },
    { name: 'BeEF', icon: '🥩', category: 'security' },
    { name: 'Dirb', icon: '📁', category: 'security' },
    { name: 'Knockpy', icon: '🚪', category: 'security' },
    { name: 'Netcat', icon: '🌐', category: 'security' },
    { name: 'Aircrack-ng', icon: '📡', category: 'security' },
    { name: 'Airmon-ng', icon: '📶', category: 'security' },
    { name: 'Airodump-ng', icon: '📊', category: 'security' },
    { name: 'Aireplay-ng', icon: '🔁', category: 'security' },
    
    // Deployment/APIs
    { name: 'Render', icon: '🚀', category: 'deployment' },
    { name: 'Open APIs', icon: '🔗', category: 'deployment' },
    { name: 'Postman', icon: '📮', category: 'deployment' },
    
    // Version Control & IDEs
    { name: 'Git', icon: '📝', category: 'tools' },
    { name: 'GitHub', icon: '🐙', category: 'tools' },
    { name: 'VS Code', icon: '💙', category: 'tools' },
    { name: 'IntelliJ', icon: '🧠', category: 'tools' },
    { name: 'Atom', icon: '⚛️', category: 'tools' },
  ];

  const projects = [
    {
      title: 'SpasthaLAB',
      description: 'AI pathology web platform under mentorship from AIIMS Delhi. Clinical application for IIT Delhi patent with advanced machine learning capabilities.',
      tech: ['React', 'Node.js', 'Redux.js', 'AI/ML', 'Medical Tech', 'Render', 'OpenAPI'],
      category: 'web',
      status: 'Ongoing',
      impact: 'Healthcare Innovation'
    },
    {
      title: 'Bill Splitter App',
      description: 'Node.js and Tailwind CSS application for expense sharing with intuitive user interface and real-time calculations.',
      tech: ['Node.js', 'Tailwind CSS', 'JavaScript'],
      category: 'web',
      github: 'https://github.com/yashjscoder/splitting_THE_BILL',
      impact: 'Personal Finance'
    },
    {
      title: 'Network Security Assessment',
      description: 'Comprehensive penetration testing using advanced security tools for vulnerability assessment and network analysis.',
      tech: ['Kali Linux', 'Wireshark', 'Bettercap', 'Nmap', 'OWASP ZAP'],
      category: 'security',
      impact: 'Network Security'
    },
    {
      title: 'WiFi Security Analysis',
      description: 'Advanced WiFi cracking and ARP spoofing demonstrations with honeypot deployment and wireless network auditing.',
      tech: ['Aircrack-ng', 'ARP Spoofing', 'Honeypots', 'Network Analysis'],
      category: 'security',
      impact: 'Wireless Security'
    }
  ];

  const certifications = [
    {
      name: 'Google Generative AI',
      link: 'https://www.cloudskillsboost.google/public_profiles/d6845629-3a44-47c9-bf90-ef1905d87004/badges/15813712?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
    },
    {
      name: 'Python OOPs - GeeksforGeeks',
      link: null
    },
    {
      name: 'Microsoft Azure AI Essentials',
      link: 'https://www.linkedin.com/learning/certificates/a0ca304c011b2e08499753bde3ad882fa6c83566901eb3e5b33f770dd80dff6b'
    },
    {
      name: 'Vertex AI + Prompt Engineering',
      link: 'https://www.cloudskillsboost.google/public_profiles/d6845629-3a44-47c9-bf90-ef1905d87004/badges/15670254?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
    },
    {
      name: 'GenAI Apps with Streamlit',
      link: 'https://www.cloudskillsboost.google/public_profiles/d6845629-3a44-47c9-bf90-ef1905d87004/badges/15813712?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
    },
    {
      name: 'LLM Foundations by Google',
      link: 'https://www.cloudskillsboost.google/public_profiles/d6845629-3a44-47c9-bf90-ef1905d87004/badges/13806833?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
    },
    {
      name: 'Nestlé Leadership & Management',
      link: null
    },
    {
      name: 'ROBOPACK Industrial Training Bootcamp - AI based',
      link: null
    },
    {
      name: 'Ethical Hacking (Udemy, in progress)',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-purple-500/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              YASH VISHNOI
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-6xl shadow-2xl shadow-purple-500/60 border-2 border-purple-400/50">
              👨‍💻
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent animate-fade-in">
            YASH VISHNOI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in">
            Cybersecurity Enthusiast | Full-Stack Web Developer | CSE Undergrad
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            Passionate cybersecurity professional and full-stack developer with deep expertise in ethical hacking, 
            penetration testing, network security analysis, and modern web technologies. Currently pursuing B.Tech 
            in Computer Science while actively contributing to healthcare innovation through AI-powered solutions. 
            Specialized in comprehensive vulnerability assessment, advanced threat detection, wireless security 
            auditing, and building secure, scalable web applications using cutting-edge frameworks. Experienced 
            in deploying sophisticated security tools for real-world penetration testing scenarios and developing 
            robust full-stack applications with seamless user experiences.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a 
              href="https://github.com/yashjscoder/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/yash-vishnoi-22456a291" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:yashisofficial@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition-colors hover:scale-110 transform duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
          
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-2xl shadow-purple-500/60 hover:shadow-purple-500/80 transition-all duration-300 hover:scale-105 animate-fade-in border border-purple-400/30 hover:border-purple-300/50"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/60">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I&apos;m a passionate Computer Science student pursuing B.Tech at Ajay Kumar Garg Engineering College, 
                  with a deep fascination for both web development and cybersecurity.
                </p>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  My journey spans from creating intuitive web applications using modern frameworks like React and Node.js 
                  to diving deep into penetration testing and network security analysis using advanced tools and methodologies.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-purple-500/20 rounded-lg border border-purple-500/40">
                    <Code className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <div className="text-sm text-gray-300">Web Development</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/20 rounded-lg border border-purple-500/40">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <div className="text-sm text-gray-300">Cybersecurity</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black/70 p-6 rounded-lg border border-purple-500/40">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Education</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <div className="font-medium">B.Tech, Computer Science & Engineering</div>
                      <div className="text-sm text-gray-400">Ajay Kumar Garg Engineering College (2023-2027)</div>
                    </div>
                    <div>
                      <div className="font-medium">Class XII - CBSE</div>
                      <div className="text-sm text-gray-400">St. Francis Academy, Auraiya | 1st Division</div>
                    </div>
                    <div>
                      <div className="font-medium">Class X - CBSE</div>
                      <div className="text-sm text-gray-400">St. Francis Academy, Auraiya | 90.4%</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/70 p-6 rounded-lg border border-purple-500/40">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Languages</h3>
                  <div className="text-gray-300">
                    <ul className="space-y-1">
                      <li>• English</li>
                      <li>• Hindi</li>
                      <li>• Spanish</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/40">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/70 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <Badge variant={project.category === 'web' ? 'default' : 'secondary'} className="bg-purple-500/20 text-purple-400">
                      {project.category === 'web' ? 'Web Dev' : 'Security'}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-purple-500/40 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">
                      Impact: <span className="text-purple-400">{project.impact}</span>
                    </div>
                    {project.github && (
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/60">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black/70 p-4 rounded-lg border border-purple-500/40 hover:border-purple-400/70 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div className="text-white font-medium text-sm">{skill.name}</div>
                  <div className="text-xs text-purple-400 mt-1 capitalize">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-black/40">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-black/70 p-4 rounded-lg border border-purple-500/40 hover:border-purple-400/70 transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="text-gray-300">{cert.name}</div>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 space-y-6">
              <div className="bg-gradient-to-r from-purple-500/30 to-purple-600/30 p-6 rounded-lg border border-purple-500/50">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <div className="font-medium">Cybersecurity Virtual Workshop & Project</div>
                    <div className="text-sm text-gray-400">4 Week Program - Currently Pursuing (College)</div>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Advanced penetration testing methodologies</li>
                      <li>• Network security analysis and vulnerability assessment</li>
                      <li>• Hands-on experience with industry-standard security tools</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium">SME - Intern</div>
                    <div className="text-sm text-gray-400">Learn As You Go (Oct 2023 - Dec 2023)</div>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Supported technical learning material design</li>
                      <li>• Helped optimize training content for engineering concepts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/60">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and cybersecurity.
            </p>
            
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="mailto:yashisofficial@gmail.com"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://linkedin.com/in/yash-vishnoi-22456a291"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/yashjscoder/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
            
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/50">
              Let's Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-800/60 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Yash Vishnoi. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
