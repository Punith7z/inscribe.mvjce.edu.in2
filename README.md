# INSCRIBE - MVJCE Club Website

Welcome to the official repository for the **INSCRIBE** club website at MVJCE! 

Where creativity meets code, and imagination meets innovation. INSCRIBE is a student-led club dedicated to fostering technical and creative excellence through events, workshops, and collaborative projects.

## 🚀 Features

*   **Immersive 3D Experience:** Beautiful 3D background effects powered by Spline, featuring dynamic dark ("Abstract Nirvana") and light ("Particle Nebula") theme designs.
*   **Intelligent Theming:** Fully integrated Light and Dark mode with distinct color palettes, background images, and customized UI elements.
*   **Silky Smooth Scrolling:** Fluid page navigation provided by `@studio-freight/react-lenis`.
*   **Dynamic Sections:**
    *   **Hero:** Engaging landing section with animated text and striking contrast.
    *   **Domains:** Showcasing our core areas: Web Development, Animation, Design & Arts, Content Writing, Media, and Hackathons.
    *   **Events Calendar:** Interactive event cards featuring details on events like "Meme Arena", "Animaze", and "3D Forge".
    *   **Team Roster:** A comprehensive database of our Leadership, Domain Leads, and talented members.
    *   **Event Registration:** A built-in user-friendly form for quick student sign-ups.
    *   **Contact & Socials:** Quick links to connect with the club via Instagram, LinkedIn, or Email.
*   **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices using Tailwind CSS.

## 🛠️ Tech Stack

*   **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router v6](https://reactrouter.com/)
*   **Smooth Scrolling:** [@studio-freight/react-lenis](https://github.com/studio-freight/react-lenis)
*   **3D Graphics:** [Spline](https://spline.design/)

## 📂 Project Structure

```text
inscribe.mvjce.edu.in/
├── public/                 # Static assets (images, videos, Spline exports)
│   └── images/             # Event posters, team member photos, backgrounds
├── src/
│   ├── components/         # Reusable React components (Navbar, Hero, Footer, etc.)
│   ├── contexts/           # React Context providers (ThemeContext)
│   ├── data/               # Structured data for the website
│   │   ├── domains.js      # Club domain descriptions
│   │   ├── events.js       # Upcoming and past events
│   │   └── team.js         # Leadership and team member information
│   ├── pages/              # Main route pages (Home, Register, etc.)
│   ├── App.jsx             # Main application wrapper and routing
│   ├── index.css           # Global styles and Tailwind directives
│   └── main.jsx            # Application entry point
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind configuration and custom theme tokens
└── vite.config.js          # Vite configuration
```

## 💻 Local Development

Follow these steps to get the project running on your local machine.

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16 or higher recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Akshayikify/inscribe.mvjce.edu.in.git
    cd inscribe.mvjce.edu.in
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173/` in your web browser.

## 🤝 Contributing

We welcome contributions from club members! If you're looking to update content or add new features:

1.  **Content Updates:** To add new team members, events, or domains, edit the respective JavaScript files in the `src/data/` directory. Place any new images inside the `public/images/` folder.
2.  **Code Changes:** Create a new branch for your feature (`git checkout -b feature/your-feature-name`), commit your changes, and open a Pull Request against the `main` branch.

## 📧 Contact

For any technical queries or website-related issues, please reach out to the development team at [inscribe.mvjce24@gmail.com](mailto:inscribe.mvjce24@gmail.com).

---
*Built with ❤️ by the INSCRIBE Web Development Team.*
