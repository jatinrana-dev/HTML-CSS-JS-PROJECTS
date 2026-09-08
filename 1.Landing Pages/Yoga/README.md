🧘 Yoga Landing Page

A responsive yoga studio landing page built from scratch using vanilla HTML, CSS, and JavaScript — no frameworks, no libraries. Built as a practice project to strengthen core web fundamentals.

🔗 Live Preview: landing-page-yoga.netlify.app

📸 Overview

A clean, mobile-first yoga studio landing page featuring a responsive navbar with a slide-down mobile menu, a hero header section, and smooth logo/theme switching between mobile and desktop layouts.

🛠️ Built With
HTML5 — semantic structure
CSS3
CSS Custom Properties (variables) for theme colors and consistent spacing
Flexbox for layout
Mobile-first responsive design with a single media query breakpoint
CSS transitions & transforms for the mobile menu slide animation
JavaScript (Vanilla)
DOM manipulation (querySelector, classList)
Event listeners for interactive menu toggle
Ternary logic for conditional icon swapping
Remix Icon — icon font library (via CDN) for the menu/close icons and social icons
Google Fonts — Montserrat for body text
✨ Features
📱 Mobile-first responsive design — built for small screens first, scaled up for desktop with a min-width media query
🍔 Animated mobile menu — hamburger menu slides down using CSS transform + transition, with the icon switching between menu/close states via JavaScript
🎨 CSS variables — centralized color palette (--primary-color, --text-dark, etc.) for easy theming
🖼️ Adaptive logo — swaps between a light and dark logo depending on screen size and nav background
🎯 Auto-centered layout — content constrained to a max-width and centered using margin-inline: auto
📁 Project Structure
yoga-landing-page/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── logo-dark.png
    ├── logo-white.png
    └── header.png
🚀 Running Locally
Clone or download this repository
Open the project folder in VS Code
Install the Live Server extension (if not already installed)
Right-click index.html → Open with Live Server
The site will open at http://127.0.0.1:5500/index.html with auto-reload on save

No build tools, no npm install — just open and go.

📚 What I Practiced

This project was built to reinforce core JavaScript and CSS concepts before diving deeper into React:

DOM selection and event handling without a framework
Conditional logic with ternary operators
CSS custom properties and mobile-first responsive patterns
Debugging real-world issues (element targeting bugs, git repo management, responsive breakpoints)
📄 License

This project is for learning purposes and is free to use as a reference.