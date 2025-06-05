import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies }) => (
  <div className="mb-4 p-3 bg-terminal-bg/30 border border-terminal-border rounded-md">
    <h3 className="text-terminal-green font-bold">{title}</h3>
    <p className="my-2 text-terminal-output">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <span key={i} className="px-2 py-0.5 bg-terminal-bg border border-terminal-border rounded text-xs">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

interface Certification {
  name: string;
  issuer: string;
}

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Exploitable Web Application",
      description:
        "Developed as a final year diploma project, this application intentionally incorporates various security vulnerabilities, including SQL injection, sensitive data exposure, missing access control, CSRF, and open redirects. It serves as an educational tool for understanding web application security.",
      technologies: ["HTML", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Student Management System",
      description:
        "Developed during my internship at GlobeMind Technologies using advanced Java technologies such as Java Swing, Servlets, and JDBC. Features include student registration, updates, progress tracking, and dedicated portals for students, administrators, and teachers.",
      technologies: ["Java Swing", "Java Servlets", "JDBC"],
    },
  ];

  const certifications: Certification[] = [
    {
      name: "THM Jr. Pentester",
      issuer: "TryHackMe",
    },
    {
      name: "CAPIE (Certified API Hacking Expert)",
      issuer: "XSSRat",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl text-terminal-yellow font-bold mb-4">// Projects</h2>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>

      <div>
        <h2 className="text-xl text-terminal-yellow font-bold mb-4">// Certifications</h2>
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="mb-4 bg-terminal-bg/20 p-3 border border-terminal-border rounded-md text-terminal-text"
          >
            <h3 className="font-semibold">{cert.name}</h3>
            <p className="text-terminal-blue text-sm">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;