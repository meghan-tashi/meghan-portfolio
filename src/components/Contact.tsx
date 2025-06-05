
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  className?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, href, className }) => {
  const content = (
    <div className={cn("flex items-center gap-3 p-2 transition-colors", 
      href && "hover:bg-terminal-border/30 rounded-md cursor-pointer", 
      className
    )}>
      <div className="text-terminal-blue">{icon}</div>
      <div>
        <div className="text-xs text-terminal-text/70">{label}</div>
        <div className="text-terminal-text">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }

  return content;
};

const Contact: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-terminal-yellow font-bold mb-4">{"// Contact"}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ContactItem
          icon={<Mail className="h-5 w-5" />}
          label="Email"
          value="simohamedtaher123@gmail.com"
          href="mailto:meghantashi.h4cks@gmail.com"
        />
        <ContactItem
          icon={<Phone className="h-5 w-5" />}
          label="Mobile No"
          value="+919370017887"
          href="tel:+919370017887"
        />
        <ContactItem
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          value="Mumbai, Maharashtra"
        />
        <ContactItem
          icon={<Github className="h-5 w-5" />}
          label="GitHub"
          value="github.com/meghan-tashi"
          href="https://github.com/meghan-tashi"
        />
        <ContactItem
          icon={<Linkedin className="h-5 w-5" />}
          label="LinkedIn"
          value="linkedin.com/in/meghan-tashi"
          href="https://www.linkedin.com/in/meghan-tashi"
        />
      </div>
    </div>
  );
};

export default Contact;
