# Reddit Client Application

A modern, responsive client application for Reddit built using React and Redux Toolkit. This application connects to the unofficial Reddit JSON API to allow users to view, search, and filter popular posts and their respective comments.

## 🚀 Features

*   **Responsive UI Layout**: Crafted with a cohesive design system that looks great on all devices, from desktop to mobile screens.
*   **Subreddits Sidebar**: Built-in navigation allowing users to filter posts based on predefined categories.
*   **Dynamic Comments Modal**: Interactive popup overlay managed by Redux state that allows users to seamlessly open and close detailed views of post comments.
*   **Functional Design Elements**: Includes custom hover effects, smooth active states, and a clean search input shell.

---

## 🛠️ Technologies Used

*   **Frontend**: React (Vite)
*   **State Management**: Redux Toolkit & React-Redux
*   **Styling**: Pure CSS (Flexbox & Responsive Grid Layouts)
*   **Version Control**: Git & GitHub

---

## 📐 Wireframes & Layout Design

The application structure is split into a robust semantic grid system:
1.  **Header**: Home to the main brand identity, standard search navigation, and session entry point placeholders.
2.  **Main Layout (`content-layout`)**:
    *   `main` (Posts Container): Takes up the majority of the view width to display individual post cards.
    *   `aside` (Subreddits Sidebar): Stays strictly aligned to the side for intuitive section switching.
3.  **Modal Overlay**: Implements a dedicated absolute/fixed coordinate canvas to focus user attention entirely on selected discussions.

---

## 🔮 Future Work & Checklist

- [ ] Connect application state to the live Reddit API data feeds.
- [ ] Implement search filtering logic via JavaScript array methods (`.filter()` / `.find()`).
- [ ] Move hardcoded component assets into modular React state structures.
- [ ] Write unit tests for independent components using Jest.
- [ ] Configure end-to-end tests for critical user flows.
- [ ] Optimize loading and performance to reach a 90+ score on Google Lighthouse.
- [ ] Deploy the final production build using automated CI/CD workflows.

---

## ⚙️ Getting Started Locally

To launch this project on your machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

2. Navigate into the folder:
   ```bash
   cd reddit-client
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the local development server:
   ```bash
   npm run dev
   ```
