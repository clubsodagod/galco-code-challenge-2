# 🛒 Product Showcase Application

A responsive and accessible frontend application built with **React** and **Next.js** that displays a list of products and allows filtering by **category** and **price range**, with optional cart functionality and dynamic theme toggling.

> ✅ Includes tests, semantic HTML, ARIA accessibility, Knockout-compatible badge rendering structure, and Magento 2-style modularity.

---

## 📦 Features

- ✅ Product grid with image, name, price, and stubbed “Add to Cart” button
- ✅ Category filter (multi-select checkboxes)
- ✅ Price range filter (slider)
- ✅ Infinite scroll for product loading
- ✅ Mobile responsive layout
- ✅ Keyboard-accessible and screen reader friendly
- ✅ Cart system using React Context + `localStorage`
- ✅ Dark mode toggle (Tailwind + MUI theme synced)
- ✅ Theme persistence with system preference support
- ✅ Unit tests with Jest + React Testing Library
- ✅ Accessible alert notifications for cart actions
- ✅ Styled with SCSS and Tailwind-compatible utility classes

---

## 🧩 Tech Stack

| Tool               | Purpose                        |
|--------------------|--------------------------------|
| **Next.js**        | React framework with routing & SSR |
| **TypeScript**     | Static type checking           |
| **React Context**  | Global state for cart & theme  |
| **Jest + RTL**     | Unit testing and coverage      |
| **Tailwind CSS**   | Utility-first responsive styling |
| **MUI (Material UI)** | Component styling & theming |
| **SCSS**           | Optional styling integration   |
| **ARIA**           | Accessible interactions        |
| **products.json**  | Static mock product dataset    |

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 📥 1. Clone the Repository

```bash
git clone https://github.com/your-username/product-showcase.git
cd product-showcase
```

### 📦 2. Install Dependencies

```bash
npm install
```

### ▶️ 3. Start the Development Server

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

## 🧪 Running Tests

```bash
npm run test
```

Runs all unit tests using **Jest** and **React Testing Library**.

To generate a coverage report:

```bash
npm run test:coverage
```

---

## 🌙 Theme Support

- Toggle between **light** and **dark** mode
- Respects **system preferences**
- Tailwind and MUI theming are synchronized
- All background, typography, and accessibility settings adapt based on theme

---

## 🚀 Live Deployment

> [🔗 View the Demo on Vercel](https://your-vercel-link.vercel.app)

---

## ✅ Submission Notes

This project includes:

- Fully responsive and accessible frontend experience
- Dark mode
- Semi-full cart (no checkout)
- Unit test coverage
- Semantic HTML and proper ARIA usage

---

---

## 👤 Author

**Maliek Davis**  
[GitHub @clubsodagod](https://github.com/clubsodagod)  
Email: <self@maliek-davis.com>

---

> If you have any questions or need support during review, feel free to reach out. Thank you for your time and consideration!
