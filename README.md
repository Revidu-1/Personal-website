# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js and Vite.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 📧 Contact form
- 🎭 Animated components

## Sections

- **Hero**: Eye-catching introduction with social links
- **About**: Personal information and statistics
- **Skills**: Technical skills with progress bars
- **Projects**: Portfolio showcase with project cards
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change name, title, and description
   - Update social media links
   - Replace avatar placeholder

2. **About Section** (`src/components/About.jsx`):
   - Update bio text
   - Modify statistics

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels
   - Add new skill categories

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your own
   - Update project images, descriptions, and links
   - Modify technologies used

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Configure form submission (currently logs to console)

### Styling

All CSS files are in `src/components/` directory. The main color scheme is defined in `src/index.css` using CSS variables:

```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
```

You can customize these colors to match your brand.

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Custom styling)

## License

This project is open source and available under the MIT License.


