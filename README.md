# Population Dashboard - Data Visualization App

Web application developed with **React** to display detailed information about population. It uses **REST Countries Api** to fetch countries data with **Axios**.

## Description

This is a **React** web application built with **TypeScript** that allows users to visualize global population data. Users can:

- It features a global view showing population by continent.
- A navigation menu to switch between different continent views, and a filtering option to limit data based on population numbers.
- The data is fetched using the public **REST Countries API** and displayed with interactive bar charts.

## Features

- **Global Population View**: Displays population data by continent.
- **Continent Navigation**: A navigation menu that lets users select a continent and view population data for the countries within it.
- **Population Filter**: An input field to filter the continents or countries by population size.
- **Interactive Bar Chart**: Each view includes a bar chart to visualize the population data.
- **Table**: A table that displays the population data for each country.

## Technologies

- **React**: Frontend library for building the user interface.
- **TypeScript**: Language for better type safety and a more robust development process.
- **Vite**: A fast build tool for React development.
- **React Router DOM**: Used to manage routing between different views (global view and continent views).
- **Axios**: To fetch data from the external **REST Countries API**.
- **Recharts**: For displaying interactive bar charts with the population data.
- **Radix UI**: For creating a navigation menu and the population filter input field.
- **Tailwind CSS**: For styling the application and ensuring a responsive desig

## Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**:

```npm
git clone https://github.com/Imoa1991/react-population.git
```

2. **Navigate to the project directory**:

```
cd react-population
```

3. **Install the dependencies**:

```
npm install
```

4. **Start the development server**:

```
npm run dev
```

Open your browser and visit http://localhost:3000 to view the application
