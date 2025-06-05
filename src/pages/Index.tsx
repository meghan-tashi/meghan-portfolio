import React, { useState, useEffect } from 'react';
import Terminal from '@/components/Terminal';
import CommandLine from '@/components/CommandLine';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Github, Linkedin, Mail, Info } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [typingComplete, setTypingComplete] = useState<{ [key: string]: boolean }>({});
  const [showNameIntro, setShowNameIntro] = useState(false);
  const [initialAnimationsPlayed, setInitialAnimationsPlayed] = useState(false);

  const handleCommandComplete = (command: string) => {
    setTypingComplete(prev => ({ ...prev, [command]: true }));
  };

  useEffect(() => {
    // Play the initial animations only once when the component mounts
    if (!initialAnimationsPlayed) {
      // Show the ASCII art intro first
      setTimeout(() => {
        setShowNameIntro(true);
      }, 500);

      // Then show the welcome command
      setTimeout(() => {
        setTypingComplete(prev => ({ ...prev, welcome: true }));
      }, 2000);

      // Then show the help command
      setTimeout(() => {
        setTypingComplete(prev => ({ ...prev, help: true }));
        setInitialAnimationsPlayed(true);
      }, 3500);
    }
  }, [initialAnimationsPlayed]);

  const handleSectionSelect = (section: string) => {
    setActiveSection(section === 'clear' ? null : section);

    // Reset the terminal if the "clear" command is triggered
    if (section === 'clear') {
      setShowNameIntro(true);
      setTypingComplete({
        welcome: true,
        help: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text p-4 md:p-8 max-w-5xl mx-auto">
      {/* Header with name and matrix‑style gradient background */}
      <div className="mb-8 p-6 rounded-lg border border-terminal-border bg-gradient-to-r from-terminal-bg via-terminal-border/10 to-terminal-bg relative overflow-hidden">
        {/* Matrix-style numbers background */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-xs text-terminal-green font-mono leading-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="overflow-hidden">
                {Array.from({ length: 100 }).map((_, j) => (
                  <span key={j} className="inline-block">
                    {Math.round(Math.random())}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative z-10">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-terminal-green mb-2 tracking-wider">MEGHAN TASHI</h1>
            <p className="text-terminal-text/80">
              <span className="text-terminal-yellow">Cyber Security Enthusiast</span> |{' '}
              <span className="text-terminal-purple">Red Teamer</span>
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/meghan-tashi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-terminal-border rounded-md hover:bg-terminal-border/30 transition-colors hover:text-terminal-green hover:border-terminal-green"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/meghan-tashi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-terminal-border rounded-md hover:bg-terminal-border/30 transition-colors hover:text-terminal-blue hover:border-terminal-blue"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:meghantashi.h4cks@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-terminal-border rounded-md hover:bg-terminal-border/30 transition-colors hover:text-terminal-yellow hover:border-terminal-yellow"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Location info */}
        <div className="mt-4 text-sm flex items-center gap-2 text-terminal-text/60">
          <Info className="h-4 w-4" />
          <span>Mumbai, Maharashtra</span>
        </div>
      </div>

<Terminal title="terminal@0xMegs:~">
  {/* ASCII Art Name */}
  {showNameIntro && (
    <div className="font-mono text-terminal-green mb-6 overflow-x-auto whitespace-pre animate-pulse-slow">
      {`
   _____                .__                    ___________             .__    .__ 
  /     \\   ____   ____ |  |__ _____    ____   \\__    ___/____    _____|  |__ |__|
 /  \\ /  \\_/ __ \\ / ___\\|  |  \\\\__  \\  /    \\    |    |  \\__  \\  /  ___/  |  \\|  |
/    Y    \\  ___// /_/  >   Y  \\/ __ \\|   |  \\   |    |   / __ \\_\\___ \\|   Y  \\  |
\\____|__  /\\___  >___  /|___|  (____  /___|  /   |____|  (____  /____  >___|  /__|
        \\/     \\/_____/      \\/     \\/     \\/                 \\/     \\/     \\/    
      `}
    </div>
  )}

        {/* Welcome message */}
        {typingComplete['welcome'] && (
          <CommandLine
            command="echo 'Welcome to my online portfolio!'"
            output={
              <p className="text-terminal-text animate-fade-in">
                Welcome to my online portfolio! I am{' '}
                <span className="text-terminal-green font-semibold">Meghan Tashi</span>, a Cyber‑Security Enthusiast and passionate Red Teamer, exploring and securing the digital world!
              </p>
            }
            onComplete={() => handleCommandComplete('welcome')}
            typingSpeed={30}
            isTyping={!typingComplete['welcome']}
          />
        )}

        {/* Help menu */}
        {typingComplete['help'] && (
          <CommandLine
            command="help"
            output={
              <div className="space-y-2 animate-fade-in">
                <p className="text-terminal-blue">List of available commands:</p>
                <ul className="space-y-2 pl-4">
                  <li
                    className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group"
                    onClick={() => handleSectionSelect('about')}
                  >
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">about</span> - About me
                  </li>
                  <li
                    className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group"
                    onClick={() => handleSectionSelect('skills')}
                  >
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">skills</span> - My technical skills
                  </li>
                  <li
                    className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group"
                    onClick={() => handleSectionSelect('experience')}
                  >
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">experience</span> - My professional experience
                  </li>
                  <li
                    className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group"
                    onClick={() => handleSectionSelect('education')}
                  >
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">education</span> - My academic background
                  </li>
                  <li
                    className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group"
                    onClick={() => handleSectionSelect('projects')}
                  >
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">projects & certifications</span> - My personal projects & certificates
                  </li>
                  <li
                    className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group"
                    onClick={() => handleSectionSelect('contact')}
                  >
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">contact</span> - My contact details
                  </li>
                  <li
                    className="cursor-pointer hover:text-terminal-green transition-colors flex items-center gap-2 group"
                    onClick={() => handleSectionSelect('clear')}
                  >
                    <span className="w-2 h-2 bg-terminal-yellow group-hover:bg-terminal-green rounded-full"></span>
                    <span className="text-terminal-yellow group-hover:text-terminal-green">clear</span> - Clear the terminal
                  </li>
                </ul>
                <p className="mt-4 text-terminal-text/60 italic text-sm">
                  Click on a command or type it to execute.
                </p>
              </div>
            }
            onComplete={() => handleCommandComplete('help')}
            typingSpeed={30}
            isTyping={!typingComplete['help']}
          />
        )}

        {/* Display section based on selected command */}
        {activeSection && (
          <CommandLine
            command={activeSection}
            output={
              activeSection === 'about' ? (
                <About />
              ) : activeSection === 'skills' ? (
                <Skills />
              ) : activeSection === 'experience' ? (
                <Experience />
              ) : activeSection === 'education' ? (
                <Education />
              ) : activeSection === 'projects' ? (
                <Projects />
              ) : activeSection === 'contact' ? (
                <Contact />
              ) : (
                <p className="text-terminal-error">
                  Command not recognized. Type 'help' to see the available commands.
                </p>
              )
            }
            isTyping={false}
          />
        )}

        {/* Persistent prompt */}
        <div className="flex mt-6 border-t border-terminal-border/30 pt-4">
          <span className="prompt mr-2 text-terminal-prompt">meghan@portfolio:~$</span>
          <span className="typed-cursor text-white">|</span>
        </div>
      </Terminal>

      <Footer />
    </div>
  );
};

export default Index;
