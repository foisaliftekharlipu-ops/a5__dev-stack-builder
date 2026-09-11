# DevStack

A simple, interactive web app to explore web technologies and create custom stacks.

## Live Demo
Check it out here: [Live Link](https://your-deployment-link.vercel.app)

---

## What It Does
DevStack helps developers quickly browse modern frontend, backend, database, and devops tools. You can add items to your personal stack, check details, and remove them as needed.

## Tech Stack
* **React** (v19)
* **Vite**
* **Tailwind CSS & DaisyUI**
* **React-Toastify**
* **JavaScript (ES6)**

## Features
* **Live Card Grid:** Fetches technology details from a local JSON file with a clean loading spinner.
* **Stack Builder:** Lets you add cards to a side panel, prevents adding the same item twice, and tracks stack count.
* **Feedback Alerts:** Shows colored toast messages for successful additions, warnings on delete, and info alerts for duplicate items.

---

## React Questions & Answers

1. What is JSX, and why is it used in React?
Ans:
JSX stands for JavaScript XML. It lets us write HTML-like elements inside JavaScript files without using manual `document.createElement()` methods. It makes components easier to visualize, write, and maintain.

2. What is the difference between props and state?
Ans:
* **Props:** Data passed from a parent component to a child component. Props are read-only and cannot be modified by the child.
* **State:** Internal data created and managed within the component itself. When state changes, the component re-renders to display the latest updates.

2. What does the useState hook do, and where did you use it in this project?র্
Ans:
`useState` adds dynamic memory to functional components. In this project, it was used   nside `Technologies.jsx` to store:
1. The fetched technology list (`technologies`)
2. The user's selected items (`selectedStack`)
3. The loading spinner status (`loading`)

3. What does the useEffect hook do, and why did you need it to load the JSON data?
Ans:
`useEffect` lets us run side effects like API calls or data fetching after rendering. Here, an empty dependency array `[]` was used with `fetch()` to grab the `technologies.json` file once when the page first loads.

4. Why does every item in a .map() list need a unique key prop?
Ans:
React uses the `key` prop to track which items changed, were added, or were removed in a list. Without unique keys, React might re-render or reorder the entire DOM list unnecessarily, causing bugs and slow performance.

5. What is conditional rendering? Show one place you used it.
Ans: 
Conditional rendering means showing or hiding UI elements based on certain rules or conditions. For example, rendering an empty message when the stack has zero items:
```jsx
{selectedStack.length === 0 ? (
  <p className="text-gray-400">Your stack is empty.</p>
) : (
  <SelectedItems items="{selectedStack}"/>
)}