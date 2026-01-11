# React + Redux Application

This project is a modern React application set up with TypeScript and Redux for state management, using the recommended directory structure and tooling for scalability and maintainability.

## Technologies Used

- **React 18** — Declarative front-end UI library
- **Redux** — State management solution using the Redux Toolkit
- **TypeScript** — Static type checking
- **SCSS** — Styling

## Project Structure & Flow

- Application entry point is `src/main.tsx`.  
  The app is rendered to the DOM via a React 18 root, wrapped in `Provider` to give Redux store access throughout the component tree.
- The Redux store is initialized in `src/app/store.ts` and made available using the official React-Redux Provider.
- Application styling is handled using SCSS and imported in the main entry file.
- TypeScript types are defined in relevant `.ts` and `.tsx` files.

## Development Commands

- `npm start` — Start development server on [http://localhost:3000](http://localhost:3000)
- `npm test` — Run all tests in watch mode
- `npm run build` — Bundle and optimize for production

## Approach

- Follows a modular and scalable architecture using feature-based blocks.
- Uses TypeScript for safety and improved developer experience.
- Centralizes state management using Redux, enabling predictable state logic.
- Strict mode is enabled for highlighting potential issues in development.
- All dependencies and configurations are managed to ensure maintainability and best practices.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Start the app locally:
   ```
   npm start
   ```
3. To run tests:
   ```
   npm test
   ```

## Learn More

- [React documentation](https://reactjs.org/)
- [Redux documentation](https://redux.js.org/)
- [TypeScript documentation](https://www.typescriptlang.org/)

