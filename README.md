## React Custom Hooks: Pagination and Debounce## 

"developing two common custom Hooks: usePagination for managing client-side pagination logic, and useDebounce for debouncing rapidly changing values, often used with search inputs."

This project demonstrates how to create and implement reusable Custom Hooks in React.

## Installation and Setup##

1. Install the project dependencies:
npm install

2. Start the development server:
npm run dev

3. Open the local URL provided by Vite in your browser.

**Learning Objectives**

Understand how to create and use Custom Hooks in React.
Implement reusable logic to manage pagination.
Implement a debounce mechanism to delay value updates.
Understand how useState and useEffect work together.
Practice passing parameters to Custom Hooks.
Understand cleanup functions and how clearTimeout() prevents unnecessary timer executions.

**Technologies Used:**
 React,JavaScript, JSX, CSS, Vite

## Project :##

1. Pagination Custom Hook (usePagination)

The usePagination hook manages pagination logic and allows users to navigate through a collection of items.

**Features:**

Navigate between pages.
Set the number of items displayed per page.
Calculate the total number of pages.
Display a specific portion of an array using slice().
Navigate to the previous and next pages.
Display the current page and total number of items.
React Hooks Used:
useState: Manages the current page and pagination state.

Component: PaginationDemo

Demonstrates how to use the usePagination hook to display a list of items divided into pages.

2. Debounce Custom Hook (useDebounce)
The useDebounce hook delays updating a value until a specified amount of time has passed without additional changes.

Features:
Capture the user's input in real time.
Delay the value update using a configurable time interval.
Display both the current input and the debounced value.
Allow users to adjust the debounce delay in milliseconds.
Simulate a search operation using console.log().
Clear previous timers when the input changes.

**React Hooks Used:**

useState: Stores the current input and debounce delay.
useEffect: Controls the timer and detects changes in dependencies.
clearTimeout(): Cancels the previous timer through the cleanup function.

Component: DebounceSearchDemo

Demonstrates how to use the useDebounce hook with a controlled input field and a simulated search operation.