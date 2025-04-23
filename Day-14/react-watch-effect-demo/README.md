# React Watch Effect Demo

## Overview

This project demonstrates the use of React hooks like `useRef`, `useEffect`, and a custom `useWatch` hook to track and respond to changes in an input form.

## Features

- **Persistent Values:** Using `useRef` to store initial input values across renders.
- **Watch Effects:** Using `useEffect` to monitor and respond to state changes.
- **Custom useWatch Hook:** Observes and tracks specific input value changes efficiently.
- **DOM Manipulation:** Using `useRef` to directly focus the input field.

## Files

- `src/NameForm.jsx`: Input form with persistent value tracking using `useRef`.
- `src/WatchEffect.jsx`: Logs input changes using `useEffect`.
- `src/useWatch.js`: Custom hook to watch a value.
- `src/WatchInput.jsx`: Displays watched value using `useWatch`.
- `src/FocusInput.jsx`: Demonstrates focusing input using `useRef`.

## How to Run

1. Clone the repo
2. Install dependencies: `npm install`
3. Run the dev server: `npm run dev`
