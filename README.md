# 🌟 Prem Sai Munagala — Portfolio Website

A premium, modern, and interactive single-page developer portfolio showcasing cybersecurity expertise and full-stack software engineering capabilities.

🔗 **GitHub Repository:** [https://github.com/munagalapremsai/premsai-portfolio](https://github.com/munagalapremsai/premsai-portfolio)

---

## 🚀 Key Features

*   **🌓 Dark/Light Mode**: Full theme customization powered by React Context, persistent across visits via `localStorage`.
*   **✨ Interactive Custom Cursor**: Performance-optimized cursor ring leveraging `requestAnimationFrame` with acceleration easing.
*   **📱 Universal Responsiveness**: Fluid typography using CSS `clamp()` and adaptive grids for seamless layout transitions from mobile viewports to ultra-wide displays.
*   **💫 Scroll-Reveal Animations**: Native lazy-reveal transitions using the modern browser `Intersection Observer` API.
*   **⚡ Modern Stack**: Built with React 19 and Vite 8 for blazing-fast Hot Module Replacement (HMR) and optimized build chunks.

---

## 🛠️ Technical Stack

*   **Frontend Library:** React 19 (Hooks, Context, Functional Components)
*   **Build Tool & Dev Server:** Vite 8
*   **Styling:** Vanilla CSS3 (Custom properties, grid systems, flexbox layout, clamp)
*   **Linter & Code Quality:** ESLint 10 (Strict React rules)

---

## 📁 Repository Structure

```text
├── public/                 # Static assets (favicons, resume.pdf)
├── src/
│   ├── assets/             # Images and design vector icons
│   ├── components/         # Scoped UI elements (Navbar, Hero, About, Projects, etc.)
│   ├── context/            # React Context (ThemeProvider, ThemeContextCore)
│   ├── data/               # Centralized content store (portfolioData.js)
│   ├── hooks/              # Custom hooks (useReveal, useTheme)
│   ├── index.css           # Global design tokens, variables, and typography rules
│   └── main.jsx            # React entry point
├── eslint.config.js        # Linter parameters
├── index.html              # Document entry point
└── vite.config.js          # Build configuration rules
```

---

## 🖥️ Local Installation & Development

To clone, set up, and run this project locally, execute the following commands:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/munagalapremsai/premsai-portfolio.git
    cd premsai-portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    *The site will be available locally at:* `http://localhost:5173/`

4.  **Production Compilation:**
    ```bash
    npm run build
    ```
    *Build files are optimized and ready for hosting inside the* `dist/` *folder.*

---

## 📝 License

Designed and engineered by **Prem Sai Munagala**. Feel free to explore, fork, and adapt this portfolio to suit your branding.
