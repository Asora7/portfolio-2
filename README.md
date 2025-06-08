#  Portfolio 2 – Frontend Development

This is my second-year portfolio project built as part of the Noroff Frontend Development program. The site showcases three major projects using a new layout and upgraded skills including modern React with Vite, routing, and styling frameworks.

🔗 **Live site**: [https://asora7-portfolio-2.netlify.app](https://asora7-portfolio-2.netlify.app)

---

## 🛠️ Tech Stack

- **React 19** + **Vite 6**
- **React Router DOM 7** for page navigation
- **Bootstrap 5.3** for layout and responsive components
- **Custom CSS** for additional styling and layout control
- **PropTypes** for props validation
- **Prettier** and **ESLint** for consistent code style
- **Netlify** for deployment

---

## 📁 Project Structure

- **/public** – Static files like `favicon`, exposed as root
- **/src**
  - **/assets** – Project images: thumbnails, large previews, and profile photo
  - **/components** – Reusable UI components: `Navbar`, `Footer`, `ProjectCard`
  - **/pages** – Main views: `Home.jsx`, `ProjectOne`, `ProjectTwo`, `ProjectThree`
  - **/styles** – Component-specific CSS files (e.g. `ProjectCard.css`)
  - `App.jsx` – Sets up routes and layout
  - `App.css` – Global layout styles
  - `index.css` – Variables and base styling
  - `main.jsx` – Entry point for React DOM rendering
- **index.html** – Main HTML template used by Vite
- **package.json** – Project metadata and dependency list
- **vite.config.js** – Vite configuration
- **.prettierrc** – Prettier formatting rules
- **eslint.config.js** – ESLint configuration
- **README.md** – Project overview and documentation


---

## 💡 Key Features

- 🏠 **Landing page with teaser cards**  
  Each card shows a preview of one of the 3 featured projects (thumbnail, title, and short teaser text)

- 📄 **Article pages for each project**  
  When clicking a card, you’re taken to a detailed project page that includes:
  - A full description and overview
  - A screenshot of the project
  - Live site link and GitHub repo link
  - Summary of improvements based on feedback
  - Technologies used and reflections

- 📱 **Responsive design**  
  Fully responsive layout using Bootstrap grid and utility classes

- ✨ **New design from scratch**  
  No styles or layout reused from Portfolio 1 — fully redesigned structure and UI

---

## 🧩 Featured Projects

1. **JavaScript Frameworks CA**  
   A React-based bidding site with user login and listing functionality  
   🔗 [Live site](https://asora7-js-frameworks-ca.netlify.app) • [Repo](https://github.com/Asora7/js-frameworks-ca-asora)

2. **Semester Project 2**  
   A museum website with improved UX, accessibility, and layout  
   🔗 [Live site](https://asora7-semester-project-2.netlify.app) • [Repo](https://github.com/Asora7/semester-project-2-asora)

3. **Exam Project 2: Holidaze**  
   A full-featured accommodation booking site with admin and customer roles  
   🔗 [Live site](https://holidaze-asora.netlify.app) • [Repo](https://github.com/Asora7/holidaze-asora)

---

## 📄 Reflection & Improvements

Each article page includes a summary of what was originally missing, the improvements I made based on teacher feedback, and screenshots showing the changes.

Some examples of common improvements:
- Replacing blocking `alert()`s with non-blocking Toastify messages
- Adding loading spinners to pages that fetch data
- Refactoring logic for better readability
- Improving accessibility (contrast, alt text, keyboard nav)
- Adding missing JSDoc comments

---

## 🚀 Getting Started (for devs)

To run locally:

```bash
git clone https://github.com/Asora7/portfolio-2
cd portfolio-2
npm install
npm run dev
```

---

## 📦 Dependencies

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.1",
  "bootstrap": "^5.3.6",
  "react-icons": "^5.5.0",
  "prop-types": "^15.8.1"
}
```

---

## 🧼 Code Quality

- Prettier formatting with custom settings (e.g. `singleQuote: true`, `trailingComma: es5`)
- ESLint rules applied across all components
- Clean and organized folder structure

---

## 📤 Deployment

Deployed via Netlify  
URL: [https://asora7-portfolio-2.netlify.app](https://asora7-portfolio-2.netlify.app)

---

## 👩‍💻 Author

**Veronica Asora**  
Frontend Developer  
GitHub: [https://github.com/Asora7](https://github.com/Asora7)

---

## 📜 License

This project is part of a school assignment and not intended for commercial use.
