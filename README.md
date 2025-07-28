# Arnab's Web Developer Portfolio

This is a dynamic and interactive personal portfolio website built with React and Vite, designed to showcase my skills, projects, and experience as a web developer. It features a modern design with engaging animations and a functional contact form.

## Live Demo

[Link to your live portfolio website]

## Features

- **Interactive Terminal Intro:** A unique, animated terminal popup greets visitors with a typing effect, creating a memorable first impression.
- **Smooth Animations:** Utilizes the GreenSock Animation Platform (GSAP) for smooth scrolling and engaging animations on various page elements.
- **Dynamic Particle Background:** An animated particle background using `particles.js` adds a modern, techy feel to the site.
- **Project Carousel:** A sleek, responsive, and accessible carousel to showcase projects, built with `shadcn/ui`.
- **Responsive Design:** Fully responsive layout for all screen sizes, from mobile to desktop, built with Tailwind CSS.
- **Functional Contact Form:** Integrated with EmailJS to allow visitors to send messages directly from the website, with toast notifications for feedback.

## Technologies Used

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS, `clsx`, `tailwind-merge`
- **UI Components:** `shadcn/ui` (Carousel, Button, Toast)
- **Animations:** GSAP (GreenSock Animation Platform), TypeIt.js, Vanilla-Tilt.js
- **Particle Effects:** Particles.js
- **Email Service:** EmailJS
- **Linting:** ESLint

## Project Structure

The project follows a standard Vite + React structure. Key directories and files are outlined below:

```
portfulio/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and other media
│   ├── components/
│   │   ├── ui/           # Re-usable UI components (shadcn/ui)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── TerminalIntro.jsx
│   ├── lib/
│   │   └── utils.js      # Tailwind Merge utility
│   ├── pages/
│   │   └── Portfolio.jsx # Main page component that assembles all sections
│   ├── App.jsx           # Main App component with routing
│   ├── index.css         # Global styles and Tailwind directives
│   └── main.jsx          # Application entry point
├── .env.example          # Example environment variables
├── index.html
└── package.json
```

## Component Breakdown

The main page is assembled in `src/pages/Portfolio.jsx`, which imports and arranges the following components:

- **`TerminalIntro.jsx`**: Located in `src/components/TerminalIntro.jsx`.

  - A modal that simulates a terminal with a typing animation on page load. It uses the `TypeIt.js` library for the typing effect.

- **`Header.jsx`**: Located in `src/components/Header.jsx`.

  - The top navigation bar with links to different sections of the portfolio.

- **`Hero.jsx`**: Located in `src/components/Hero.jsx`.

  - The introductory "hero" section with the main heading, a brief bio, and social media links.

- **`About.jsx`**: Located in `src/components/About.jsx`.

  - The "About Me" section, providing more detail about my background and interests.

- **`Skills.jsx`**: Located in `src/components/Skills.jsx`.

  - A grid displaying technical skills with corresponding icons.

- **`Projects.jsx`**: Located in `src/components/Projects.jsx`.

  - This component uses the `Carousel` UI component (from `src/components/ui/carousel.jsx`) to display project cards in an interactive and responsive slider.

- **`Contact.jsx`**: Located in `src/components/Contact.jsx`.

  - A functional contact form that uses **EmailJS** to send emails without a backend. It provides user feedback using the `Toast` component (from `src/components/ui/use-toast.js`).

- **`Footer.jsx`**: Located in `src/components/Footer.jsx`.
  - The standard page footer with copyright information and links.

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-portfolio-repo.git
    cd your-portfolio-repo
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    - Create a `.env` file in the root of the project.
    - Copy the contents of `.env.example` into your new `.env` file.
    - You will need to sign up for a free account at EmailJS to get your credentials.
    - Fill in your EmailJS credentials in the `.env` file:
      ```
      VITE_EMAILJS_SERVICE_ID=your_service_id
      VITE_EMAILJS_TEMPLATE_ID=your_template_id
      VITE_EMAILJS_PUBLIC_KEY=your_public_key
      ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Building for Production

To create a production-ready build, run:

```bash
npm run build
```

This will create a `dist` folder with the optimized and minified files ready for deployment.
