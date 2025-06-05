import React from 'react';

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="mb-4">
    <h3 className="text-terminal-blue font-semibold mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-2 py-1 bg-terminal-bg border border-terminal-border rounded text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "HTML5", "CSS3"]
    },
    {
      title: "Cybersecurity Tools & Utilities",
      skills: [
        "Burp Suite", "OWASP ZAP", "Caido", "Nmap", "Nikto", "SQLMap",
        "ffuf", "httpx", "Subfinder", "Amass", "gf", "Dalfox", "XSS-Report", "Nuclei",
        "Recon-ng", "Burp Collaborator"
      ]
    },
    {
      title: "Offensive Security Skills",
      skills: [
        "Bug Bounty Hunting", "Red Teaming", "Web App Pentesting", "Open Redirect",
        "Authentication Bypass", "XSS", "SQL Injection", "LFI/RFI", "SSRF",
        "OSINT", "Payload Crafting"
      ]
    },
    {
      title: "Productivity & Analysis Tools",
      skills: ["Postman", "Visual Studio Code", "Markdown", "Notion", "Wireshark"]
    },
    {
      title: "Operating Systems & Environments",
      skills: ["Linux (Kali, Ubuntu)", "MacOS", "VirtualBox", "VMware"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Initiative", "Time Management", "Communication", "Mentorship", "Teamwork"]
    }
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-xl text-terminal-yellow font-bold mb-4">{"// Technical Skills"}</h2>

      {skillCategories.map((category, i) => (
        <SkillCategory key={i} title={category.title} skills={category.skills} />
      ))}
    </div>
  );
};

export default Skills;