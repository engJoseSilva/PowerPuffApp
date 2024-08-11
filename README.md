
# Powerpuff Girls App

This is a small web application that displays information about the TV show "Powerpuff Girls" and its episodes, built using Vue 3, TypeScript, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Project Architecture](#project-architecture)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Decisions & Considerations](#decisions--considerations)
- [Future Enhancements](#future-enhancements)

## Features

- **TV Show Page**: Displays the show's title, description, cover image, and a list of episodes.
- **Episode Detail Page**: Shows detailed information about a specific episode, including the title, summary, and cover image.
- **Responsive Design**: Ensured through Tailwind CSS with a breakpoint for mobile devices.
- **State Management**: Handled by Vuex to manage the state of the show and episodes.

## Project Architecture

The project is structured to follow the best practices for maintainable and scalable Vue.js applications:

- **src/**
  - **components/**: Reusable Vue components.
    - `ShowPage.vue`: Component for displaying the TV show details and list of episodes.
    - `EpisodeDetailPage.vue`: Component for displaying detailed information about a specific episode.
  - **store/**: Vuex store setup to manage global state.
    - `index.ts`: Main Vuex store configuration.
    - `modules/show.ts`: Vuex module for handling show and episode data.
  - **router/**: Vue Router configuration for handling app navigation.
    - `index.ts`: Defines routes for the TV show and episode detail pages.
  - **assets/**: Static assets like images.
  - **styles/**: Tailwind CSS setup and custom styles.
  - **App.vue**: Root component that ties everything together.
  - **main.ts**: Entry point of the application, where Vue, Router, and Vuex are initialized.

## Technologies Used

- **Vue 3**: A progressive JavaScript framework for building user interfaces.
- **TypeScript**: For type safety and better code maintainability.
- **Vuex**: State management pattern + library for Vue.js applications.
- **Vue Router**: The official router for Vue.js.
- **Tailwind CSS**: Utility-first CSS framework for custom designs.
- **Jest**: JavaScript testing framework for unit and snapshot testing.
- **@vue/test-utils**: Official testing utility library for Vue.js.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/powerpuff-app.git
   cd powerpuff-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the App

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Testing

To run the test suite:

```bash
npm run test
```

This will run both unit tests and snapshot tests to ensure the components and logic are working as expected.

## Decisions & Considerations

### 1. **Vue 3 and Composition API**
Vue 3's Composition API was chosen for its flexibility and improved logic reusability. This makes it easier to manage complex components and logic.

### 2. **State Management with Vuex**
Vuex was used to manage the global state of the application, specifically for storing the show and episode data. This ensures that the data is centralized and can be easily accessed or modified by any component in the application.

### 3. **Tailwind CSS for Styling**
Tailwind CSS was chosen for its utility-first approach, allowing for rapid and responsive design development. It also ensures that the CSS is modular and easily maintainable.

### 4. **TypeScript for Type Safety**
Using TypeScript ensures that the codebase is robust, with fewer runtime errors and better tooling support. It also makes the code more readable and maintainable.

### 5. **Jest for Testing**
Jest, combined with Vue Test Utils, provides a solid foundation for unit and snapshot testing, ensuring that components behave as expected and catching regressions early.

## Future Enhancements

- **API Error Handling**: Improve error handling and display user-friendly messages when API calls fail.
- **Caching**: Implement caching for API responses to reduce load times and API usage.
- **Accessibility**: Ensure the app meets WCAG guidelines for better accessibility.
- **Deployment**: Set up automated CI/CD pipelines and deploy the app to a platform like Vercel or Netlify.

## Conclusion

This project showcases a simple yet scalable Vue 3 application architecture, leveraging modern JavaScript tools and practices. It is built with flexibility in mind, making it easy to extend and maintain.

---

Feel free to contribute to this project by submitting issues or pull requests.
