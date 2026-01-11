# React + Redux Application

This project is a modern React application built with TypeScript and Redux Toolkit for state management. It follows recommended practices for scalability and long-term maintainability.

## Technologies Used

- **React 18**: Declarative front-end UI library
- **Redux Toolkit**: State management and logic handling
- **TypeScript**: For static type checking and reliability
- **SCSS**: Styling solution for reusable component styles
- **json-server**: Provides a mock REST API backend for development

## Project Structure & Flow

- The entry point is `src/main.tsx`, rendering the root React app and providing the Redux store with the `Provider` component.
- Redux store configuration is found in `src/app/store.ts`.
- SCSS is used for styling and is imported at the main entry point.
- TypeScript types are organized in their corresponding type definition files.
- Mock data and API endpoints are served using `json-server`.

## Development Commands

- `npm start` — Start the app locally at [http://localhost:3000](http://localhost:3000)
- `npm run build` — Create an optimized production build
- `npm run server` — Start json-server on [http://localhost:4000](http://localhost:4000) with mock data

## Approach

- Utilizes a feature-based, modular folder structure for clarity and separation of concerns.
- TypeScript ensures type safety and smooth developer experience.
- State is managed centrally via Redux Toolkit for predictable state logic.
- React Strict Mode is enabled to highlight potential issues early.
- `json-server` makes front-end development and API prototyping simpler and faster.

## Getting Started

1. Install all dependencies:
   ```
   npm install
   ```
2. Start the mock backend (in a separate terminal):
   ```
   npm run server
   ```
3. Start the application:
   ```
   npm start
   ```

## Learn More

- [React documentation](https://reactjs.org/)
- [Redux Toolkit documentation](https://redux-toolkit.js.org/)
- [TypeScript documentation](https://www.typescriptlang.org/)
- [json-server documentation](https://github.com/typicode/json-server)

