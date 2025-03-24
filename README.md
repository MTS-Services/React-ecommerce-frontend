# 🚀 Project Setup & Dependency Installation

## 📌 1. Clone the Repository

```sh
git clone https://github.com/your-repo/OUR-PROJECT.git

cd OUR-PROJECT

npm install
```

## 🧩 3. Install Required Packages

```sh
npm install

react-router-dom
react-icons
framer-motion

npm install @tailwindcss/vite@^4.0.14

```

## 🎨 4. Styling

### @tailwindcss/vite

```sh
npm install @tailwindcss/vite@^4.0.14
```

#### 1. Make sure "Index.css" File are here in this code

```css
@import "tailwindcss";

:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(0, 0, 0, 0.87);
  background-color: #fafafa;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### 2. Make sure "vite.config.js" File are here in this code

```jsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## 📂 2. Here’s a best practice folder structure

Must be following this structure

### Example:

- 📂 OUR-PROJECT
  - 📂 public
    - 📂 assets
    - 📂 images
      - 📄 logo.png
      - 📄 food.jpg
      - 📄 icon.svg
  - 📂 src
    - 📂 components
      - 📂 cart
        - 📄 CartView.jsx
        - 📄 CartItem.jsx
        - 📄 Summary.jsx
      - 📂 home
        - 📄 Hero_Section.jsx
        - 📄 FAQ_Section.jsx
        - 📄 Contact_Section.jsx
      - 📂 ui
        - 📄 Button.jsx
        - 📄 Input.jsx
        - 📄 Select.jsx
      - 📂 layout
        - 📄 Navbar.jsx
        - 📄 Footer.jsx
    - 📂 Pages
      - 📂 cart
        - 📄 CartPage.jsx
      - 📂 home
        - 📄 HomePage.jsx
      - 📂 about
        - 📄 AboutPage.jsx
      - 📂 contact
        - 📄 ContactPage.jsx
    - 📂 hooks
      - 📄 useCart.js
    - 📂 context
      - 📄 CartContext.js
    - 📂 services
      - 📄 api.js
    - 📄 App.jsx
    - 📄 main.jsx
    - 📄 routes.jsx
  - 📄 package.json
  - 📄 tailwind.config.js
  - 📄 .gitignore
  - 📄 README.md

If you have any questions or concerns, feel free to rech out team.

## Why is this structure better?

- ✅ Separation of concerns
- ✅ Scalable & maintainable for future growth
- ✅ Reusability with a dedicated ui folder for common components
- ✅ Optimized state management with context
- ✅ Organized API calls inside services
- ✅ Custom hooks inside hooks for better logic reuse
- ✅ Utility functions inside utils to keep code clean
