
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-terminal-border py-6 mt-10 text-center text-xs text-terminal-text/70 bg-gradient-to-r from-transparent via-terminal-border/10 to-transparent">
      <div className="max-w-md mx-auto">
        <p className="mb-2 text-terminal-green/80">© {new Date().getFullYear()} Meghan Tashi. All copyrights reserved.</p>
        <p className="text-terminal-text/50">The site is built with React, TypeScript, and Tailwind CSS.</p>
        <div className="w-16 h-1 bg-gradient-to-r from-terminal-green/0 via-terminal-green/50 to-terminal-green/0 mx-auto mt-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
