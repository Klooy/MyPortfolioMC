import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const SocialIcons = ({ type, className }) => {
  switch (type) {
    case 'github':
      return <Github className={`w-8 h-8 text-white ${className}`} />;
    case 'linkedin':
      return <Linkedin className={`w-8 h-8 text-white ${className}`} />;
    default:
      return null;
  }
};

export default SocialIcons;