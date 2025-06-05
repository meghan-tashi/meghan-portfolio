import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-terminal-yellow font-bold">{"// Professional Profile"}</h2>
      <p className="text-terminal-output leading-relaxed">
        I’m a passionate and driven Computer Engineering student specializing in Offensive Cybersecurity, with hands-on experience in bug bounty hunting, vulnerability assessment, and secure software development. With a strong foundation in core Java, Spring Boot, and React, I enjoy building full-stack applications and applying security principles to every layer. My goal is to contribute to real-world cybersecurity projects, gain deep technical expertise in red teaming, and continuously grow through practical learning and collaboration.
      </p>

      <h2 className="text-xl text-terminal-yellow font-bold">{"// Languages"}</h2>
      <ul className="list-disc pl-6 text-terminal-output">
        <li className="mb-1">🇬🇧 English: Fluent</li>
        <li className="mb-1">🇮🇳 Hindi: Native</li>
        <li className="mb-1">🇮🇳 Marathi: Fluent </li>
      </ul>

      <h2 className="text-xl text-terminal-yellow font-bold">{"// Interests"}</h2>
      <ul className="list-disc pl-6 text-terminal-output">
        <li className="mb-1">Offensive security, penetration testing, red teaming</li>
        <li className="mb-1">Bug bounty and vulnerability research</li>
        <li className="mb-1">Open-source development and community tools</li>
        <li className="mb-1">Web application and API security</li>
        <li className="mb-1">CTFs (Capture the Flag) and security competitions</li>
        <li className="mb-1">Security automation and scripting</li>
      </ul>
    </div>
  );
};

export default About;