import React from 'react';

interface ExperienceItemProps {
  position: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  position,
  company,
  location,
  period,
  duration,
  responsibilities,
}) => (
  <div className="mb-6 bg-terminal-bg/30 p-4 border border-terminal-border rounded-md">
    <h3 className="text-terminal-green font-bold">{position}</h3>
    <div className="flex flex-wrap justify-between mb-2">
      <span className="text-terminal-text">{company} – {location}</span>
      <span className="text-terminal-blue">
        <span className="text-sm">{period}</span> <span className="text-xs">({duration})</span>
      </span>
    </div>
    <ul className="list-disc pl-5 text-terminal-output">
      {responsibilities.map((item, i) => (
        <li key={i} className="mb-1">{item}</li>
      ))}
    </ul>
  </div>
);

// ----------------------------
// Main Component
// ----------------------------

const Experience: React.FC = () => {
  const experiences: ExperienceItemProps[] = [
    {
      position: "Cyber Security R&D Intern",
      company: "Asian School of Cyber Laws",
      location: "Mumbai, India",
      period: "Nov 2021 – Nov 2021",
      duration: "1 month",
      responsibilities: [
        "Drafted survey questions for a \"Cyber Crime against Teenagers\" study.",
        "Researched serious cyber‑crime case studies and their legal implications.",
        "Documented best‑practice precautions to mitigate cyber threats affecting teens.",
      ],
    },
    {
      position: "Software Development Intern",
      company: "GlobeMind Technologies",
      location: "Pune, India",
      period: "Jul 2022 – Aug 2022",
      duration: "2 months",
      responsibilities: [
        "Developed and maintained core features in client software applications.",
        "Performed peer code reviews and suggested refactors to improve quality and maintainability.",
        "Authored and executed unit tests; performed end‑to‑end system testing to ensure stability.",
        "Troubleshot and resolved production defects, reducing bug backlog by 30%.",
      ],
    },
  ];

  const technicalPapers = [
    {
      title: "An Exploitable App – Demonstrating Common Web Vulnerabilities",
      publication: "International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)",
      summary:
        "Co‑authored a research paper showcasing a deliberately vulnerable web application that illustrates SQL Injection, Sensitive Data Exposure, Missing Access Control, CSRF, and Open Redirect flaws, along with mitigation strategies.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Professional Experience */}
      <div>
        <h2 className="text-xl text-terminal-yellow font-bold mb-4">// Professional Experience</h2>
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>

      {/* Technical Publications */}
      <div>
        <h2 className="text-xl text-terminal-yellow font-bold mb-4">// Technical Publications</h2>
        {technicalPapers.map((paper, i) => (
          <div key={i} className="mb-6 bg-terminal-bg/30 p-4 border border-terminal-border rounded-md">
            <h3 className="text-terminal-green font-bold">{paper.title}</h3>
            <p className="text-terminal-text mb-2 italic">{paper.publication}</p>
            <p className="text-terminal-output leading-relaxed">{paper.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
