# AI Stylist Prototype

The AI Stylist Prototype is an application that provides personalized fashion recommendations based on user preferences using AI technology.

## Features

- **User Registration**: Users can register with their name and fashion preferences.
- **Personalized Recommendations**: AI generates outfit recommendations based on user preferences.
- **Interactive UI**: Simple and intuitive user interface to interact with the AI Stylist.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Python 3.x
- SQLite

## Getting Started

Follow these steps to run the AI Stylist Prototype:

## ai-stylist-frontend

#### Navigate to frontend directory
`cd ai-stylist-frontend`

#### Start the React development server
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## ai-stylist-backend

#### Navigate to backend directory
`cd ai-stylist-backend`

#### Start the Node.js server
`node server.js`

## Database Setup

#### Navigate to backend directory
`cd ai-stylist-backend`

#### Initialize SQLite database (optional for memory storage)
`sqlite3 database.sqlite3`

#### Create necessary tables (if not already created)
`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  preferences TEXT
);`
