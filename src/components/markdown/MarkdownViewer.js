import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const MarkdownSection = ({ title, content, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50"
    >
      <span className="text-lg font-medium">{title}</span>
      {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
    </button>
    {isOpen && (
      <div className="p-4 bg-white">
        {content}
      </div>
    )}
  </div>
);

const PortfolioViewer = () => {
  const [openSections, setOpenSections] = useState({
    overview: true,
    features: false,
    technical: false,
    structure: false,
    responsive: false,
    content: false,
    setup: false,
    other: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderList = (items) => (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const renderCodeBlock = (code) => (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
      <code>{code}</code>
    </pre>
  );

  const projectStructure = `my-portfolio/
  ├── src/
  │   ├── components/
  │   │   ├── layout/
  │   │   │   ├── Taskbar.js        # Bottom taskbar component
  │   │   │   └── Modal.js          # Reusable modal component
  │   │   ├── folders/
  │   │   │   ├── FolderGrid.js     # Grid layout for folders
  │   │   │   ├── FolderItem.js     # Individual folder component
  │   │   │   └── FolderContent.js  # Content display for each folder
  │   │   ├── social/
  │   │   │   └── SocialIcons.js    # Social media links
  │   │   └── modes/
  │   │       ├── SleepMode.js      # Sleep mode overlay
  │   │       └── ExitConfirm.js    # Exit confirmation modal
  │   ├── hooks/
  │   │   └── useCurrentTime.js     # Custom hook for clock
  │   ├── data/
  │   │   └── portfolioData.js      # Portfolio content data
  │   ├── styles/
  │   │   └── globals.css           # Global styles and Tailwind
  │   ├── App.js                    # Main app component
  │   └── index.js                  # Entry point`;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">MC Klooy Portfolio Project</h1>
        
        <div className="space-y-2">
          <MarkdownSection
            title="📋 Overview"
            content={
              <p className="text-gray-600">
                Un sitio web interactivo inspirado en una computadora de escritorio, 
                creado con React y Tailwind CSS. El proyecto presenta una interfaz única 
                que imita el entorno de un sistema operativo.
              </p>
            }
            isOpen={openSections.overview}
            onToggle={() => toggleSection('overview')}
          />

          <MarkdownSection
            title="🚀 Features"
            content={renderList([
              "Sistema de carpetas interactivas: explore sobre mi experiencia laboral, proyectos, educación y habilidades",
              "Interfaz de arrastrar y soltar: personalice el diseño arrastrando carpetas",
              "Modo de suspensión: incluye un modo de suspensión estético con un reloj en tiempo real",
              "Diseño responsivo: optimizado para todos los tamaños de dispositivos",
              "Integración social: enlaces directos a perfiles de GitHub y LinkedIn"
            ])}
            isOpen={openSections.features}
            onToggle={() => toggleSection('features')}
          />

          <MarkdownSection
            title="🛠️ Technical Stack"
            content={renderList([
              "Frontend Framework: React.js 18",
              "Styling: Tailwind CSS",
              "Icons: Lucide React",
              "State Management: React Hooks",
              "Build Tool: Create React App"
            ])}
            isOpen={openSections.technical}
            onToggle={() => toggleSection('technical')}
          />

          <MarkdownSection
            title="📁 Project Structure"
            content={
              <div className="font-mono text-sm">
                {renderCodeBlock(projectStructure)}
                <div className="mt-4 text-gray-600">
                  <p className="mb-2">La estructura del proyecto está organizada en:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>components/</strong>: Componentes React organizados por funcionalidad</li>
                    <li><strong>hooks/</strong>: Hooks personalizados para lógica reutilizable</li>
                    <li><strong>data/</strong>: Datos y configuración del portfolio</li>
                    <li><strong>styles/</strong>: Estilos globales y configuración de Tailwind</li>
                  </ul>
                </div>
              </div>
            }
            isOpen={openSections.structure}
            onToggle={() => toggleSection('structure')}
          />

          <MarkdownSection
            title="📱 Responsive Features"
            content={renderList([
              "El sistema de cuadrícula se adapta a distintos tamaños de pantalla",
              "Interfaz optimizada para dispositivos móviles",
              "Interacciones táctiles",
              "Tipografía y espaciado adaptables",
              "Diseño optimizado para tabletas y dispositivos móviles"
            ])}
            isOpen={openSections.responsive}
            onToggle={() => toggleSection('responsive')}
          />

          <MarkdownSection
            title="🗂️ Content Sections"
            content={
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Work Experience</h3>
                  {renderList([
                    "Historial laboral detallado",
                    "Descripciones de funciones",
                    "Logros clave",
                    "Duración del empleo",
                    "Información de la empresa"
                  ])}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Projects</h3>
                  {renderList([
                    "Descripciones de proyectos",
                    "Tecnologías utilizadas",
                    "Características principales",
                    "Detalles de implementación",
                    "Enlaces a demostraciones en vivo/repositorios"
                  ])}
                </div>
              </div>
            }
            isOpen={openSections.content}
            onToggle={() => toggleSection('content')}
          />

          <MarkdownSection
            title="🚀 Installation & Setup"
            content={
              <div className="space-y-4">
                <p className="font-semibold">1. Clone the repository</p>
                {renderCodeBlock('git clone https://github.com/yourusername/portfolio-project.git\ncd portfolio-project')}
                
                <p className="font-semibold">2. Install dependencies</p>
                {renderCodeBlock('npm install')}
                
                <p className="font-semibold">3. Start the development server</p>
                {renderCodeBlock('npm start')}
              </div>
            }
            isOpen={openSections.setup}
            onToggle={() => toggleSection('setup')}
          />

          <MarkdownSection
            title="Other Information"
            content={
              <div className="space-y-4">
                <h3 className="font-semibold">🤝 Contribuciones</h3>
                {renderList([
                  "Fork the repository",
                  "Create a feature branch",
                  "Commit your changes",
                  "Push to the branch",
                  "Open a pull request"
                ])}
                <h3 className="font-semibold">🔗 Contact</h3>
                {renderList([
                  "GitHub: https://github.com/Klooy/MyPortfolioMC",
                  "LinkedIn: https://www.linkedin.com/in/mfcorrales",
                  "Email: mfcorrales26@gmail.com"
                ])}
              </div>
            }
            isOpen={openSections.other}
            onToggle={() => toggleSection('other')}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioViewer;
