# ♻️ WeWantWaste - Skip Select Page Redesign

This is a small front-end coding challenge built with **React + Vite + Tailwind CSS**.

## 🎯 Goal

Redesign the "skip select" page from [WeWantWaste](https://wewantwaste.co.uk/) while maintaining existing functionality. Focus is on clean, maintainable React code, mobile/desktop responsiveness, and improved UI/UX.

## 🚀 How to Run

1. Clone the repo:
git clone https://github.com/yourusername/wewantwaste-redesign.git cd wewantwaste-redesign


2. Install dependencies:
npm install


3. Start dev server:
npm run dev
 

4. Open `http://localhost:5173/` in your browser.

---

## 🧱 Tech Stack

- ⚛️ React
- 💨 Tailwind CSS
- ⚡ Vite
- 📦 `prop-types` for prop validation

---

## 📊 Skip Data

Data was fetched from:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft


And mapped to interactive cards using a component called `SkipCard`.

---

## 📱 Responsive Design

The layout adapts to mobile and desktop using Tailwind's responsive utilities like `grid`, `flex-wrap`, `md:grid-cols-2`, etc.

---

## 📦 Component Structure

### `components/SkipCard.jsx`
Displays one skip option card:
- Size
- Hire period
- Price (VAT included)
- On-road & heavy waste suitability
- Clickable (used to select a skip)

---

## 🧪 Testing (optional)

- Check visual responsiveness by resizing browser
- Test selection state (highlighting selected skip)
- Check accessibility: color contrast, keyboard nav

---

## ✅ To Do

- Improve mobile spacing
- Add animations on mount (optional)
- Add loading & error handling when fetching skips

---

## 🔗 Live Preview

[👉 View on CodeSandbox](https://codesandbox.io/) *(replace with your own link after uploading)*

---

## 🙌 Thanks

Thanks for the opportunity! Looking forward to your feedback!

– **Florin Asavei**     
