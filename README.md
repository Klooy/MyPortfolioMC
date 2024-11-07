# MC Klooy Portfolio Project

## 📋 Overview
Un sitio web interactivo inspirado en una computadora de escritorio, creado con React y Tailwind CSS. El proyecto presenta una interfaz única que imita el entorno de un sistema operativo, 
lo que permite a los visitantes explorar diferentes aspectos de mi experiencia profesional a través de un diseño atractivo e intuitivo.

## 🚀 Features
- **Sistema de carpetas interactivas**: explore su experiencia laboral, proyectos, educación y habilidades
- **Interfaz de arrastrar y soltar**: personalice el diseño arrastrando carpetas
- **Modo de suspensión**: incluye un modo de suspensión estético con un reloj en tiempo real.
- **Diseño responsivo**: optimizado para todos los tamaños de dispositivos
- **Integración social**: enlaces directos a perfiles de GitHub y LinkedIn

## 🛠️ Technical Stack
- **Frontend Framework**: React.js 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Build Tool**: Create React App

## 📁 Project Structure
```
my-portfolio/
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
  │   └── index.js                  # Entry point
```

## 📱 Responsive Features
- El sistema de cuadrícula se adapta a distintos tamaños de pantalla
- Interfaz optimizada para dispositivos móviles
- Interacciones táctiles
- Tipografía y espaciado adaptables
- Diseño optimizado para tabletas y dispositivos móviles

## 🗂️ Content Sections

### 1. Work Experience
- Historial laboral detallado
- Descripciones de funciones
- Logros clave
- Duración del empleo
- Información de la empresa

### 2. Projects
- Descripciones de proyectos
- Tecnologías utilizadas
- Características principales
- Detalles de implementación
- Enlaces a demostraciones en vivo/repositorios

### 3. Education
- Títulos académicos
- Instituciones a las que asistió
- Años de graduación
- Cursos relevantes
- Logros académicos

### 4. Skills
- Habilidades técnicas
- Lenguajes de programación
- Frameworks y librerías
- Herramientas y tecnologías
- Competencias profesionales

## 🚀 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-project.git
cd portfolio-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

## 🔧 Configuration

### Customizing Content
1. Vaya a `src/data/portfolioData.js`
2. Actualice los objetos de datos con su información
3. Siga la estructura existente para mantener la coherencia

### Styling Modifications
- Estilos globales: modificar `src/styles/globals.css`
- Estilos específicos de componentes: actualizar las propiedades className usando Tailwind CSS
- Colores personalizados: ajustar `tailwind.config.js`

## 🤝 Contribuciones
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## 🔗 Contact
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

## 🙏 Agradecidimentos
- Íconos proporcionados por Lucide React
- Inspiración de la interfaz de usuario de los sistemas operativos modernos
- Tailwind CSS para el sistema de estilo

## 🔄 Version History
- 1.0.0: Versión inicial
- Sistema de carpetas básico
- Secciones de experiencia laboral y proyectos
- Integración con redes sociales

- 1.1.0: Funciones agregadas
- Modo de suspensión
- Funcionalidad de arrastrar y soltar
- Mejoras en el diseño responsivo

## 🐛 Problemas conocidos
- No se ha informado de ninguno actualmente

## 🔜 Hoja de ruta
- [ ] Agregar alternancia entre tema oscuro y claro
- [ ] Implementar minimización/maximización de carpetas
- [ ] Agregar más elementos interactivos
- [ ] Integrar sección de blog
- [ ] Agregar carrusel de capturas de pantalla del proyecto

## ⚙️ Optimización del rendimiento
- Carga diferida del contenido de la carpeta
- Carga de imágenes optimizada
- Gestión de estado eficiente
- Tamaño de paquete minimizado

## 🔒 Seguridad
- No se almacenan datos confidenciales
- Enlaces externos seguros
- Rutas protegidas (si corresponde)

Para obtener más información o ayuda, abra un problema en el repositorio de GitHub.