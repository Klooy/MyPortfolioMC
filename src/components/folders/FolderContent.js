import React from 'react';
import PortfolioViewer from '../markdown/MarkdownViewer';

const FolderContent = ({ folder }) => {
  const renderContent = () => {
    switch (folder.name) {
      case 'Portfolio Info':  // Nuevo caso para el MarkdownViewer
        return <PortfolioViewer />;
        
      case 'Work Experience':
        return (
          <div className="space-y-6">
            {folder.content.map((job, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-bold text-blue-600">{job.title}</h3>
                <p className="text-lg font-semibold">{job.company}</p>
                <p className="text-gray-600">{job.period}</p>
                <p className="mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        );

      case 'Projects':
        return (
          <div className="space-y-6">
            {folder.content.map((project, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-bold text-blue-600">{project.title}</h3>
                <p className="text-gray-600">Technologies: {project.technologies}</p>
                <p className="mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        );

      case 'Education':
        return (
          <div className="space-y-6">
            {folder.content.map((edu, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-bold text-blue-600">{edu.degree}</h3>
                <p className="text-lg">{edu.institution}</p>
                <p className="text-black-600">{edu.country}</p>
                <p className="text-gray-600">{edu.year}</p>
                <p className="mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        );

      case 'Skills':
        return (
          <div className="space-y-6">
            {folder.content.map((skillGroup, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-bold text-blue-600">{skillGroup.category}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return renderContent();
};

export default FolderContent;