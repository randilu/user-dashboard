# User Dashboard

## Description

Allows to browse and search users fetched from a REST endpoint.

## Features

- Display users from a placeholder API
- Search on all the user fields
- Filters to sort users by name and email
- Option to sort results
- Responsive for mobile, tablets and desktop screens

## Installation

To get started with the User Dashboard, follow these steps:

1. **Clone the repository:**
  ```bash
  git clone https://github.com/randilu/user-dashboard.git
  ```
2. **Navigate to the project directory:**
  ```bash
  cd user-dashboard
  ```
3. **Install dependencies:**
  ```bash
  npm install
  ```

To Run Test Suite (optional):

```bash
npm test
```

(Follow the interactive CLI)

## Usage

To start the development server, run:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` to view the application.

## Folder Structure

```
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   ├── dashboard
│   │   ├── error
│   │   ├── filterBar
│   │   ├── filtersRow
│   │   ├── gridItem
│   │   ├── loader
│   │   ├── search
│   │   └── userGrid
│   ├── constants.ts
│   ├── helpers
│   ├── hooks
│   ├── index.css
│   ├── main.tsx
│   ├── mocks
│   ├── types.ts
│   └── vite-env.d.ts
├── test.setup.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Comments

- Ideally, in this kind of application, we would implement pagination while fetching data and debouncing in the search functionality to optimize performance. However, given that the dataset is small, these optimizations were not implemented.