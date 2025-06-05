import React from 'react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period }) => (
  <div className="mb-4 p-3 bg-terminal-bg/30 border border-terminal-border rounded-md">
    <h3 className="text-terminal-green font-bold">{degree}</h3>
    <div className="flex flex-wrap justify-between">
      <span className="text-terminal-text">{institution}</span>
      <span className="text-terminal-blue text-sm">{period}</span>
    </div>
  </div>
);

const Education: React.FC = () => {
  const educationItems = [
    {
      degree: "🎓 Bachelor of Engineering in Computer Engineering (B.E.)",
      institution: "Vasantdada Patil Prathisthan's College of Engineering (VPPCOE)",
      period: "Expected 2026 | CGPA: 7.5"
    },
    {
      degree: "🎓 Diploma in Computer Engineering",
      institution: "AISSMS Polytechnic",
      period: "2020 – 2023 | Percentage: 83%"
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-terminal-yellow font-bold">{"// Formation Académique"}</h2>
      
      <div>
        {educationItems.map((item, i) => (
          <EducationItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Education;