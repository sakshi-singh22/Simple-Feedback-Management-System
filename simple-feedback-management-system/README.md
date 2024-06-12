# Simple Feedback Management System

This project consists of a simple feedback management system with a backend built using Nest.js (Express) and TypeScript, and a frontend built using React and TypeScript.

## Backend

- Set up Node.js server using Express and TypeScript.
- Implemented REST API with endpoints to retrieve all feedback entries and submit new feedback.
- Data is stored in an in-memory array.
- Rate limiting is not implemented but can be added using middleware like express-rate-limit.

## Frontend

- Set up React application using TypeScript.
- Implemented a form to submit new feedback and display a list of all feedback entries.
- Used web worker for fetching data.
- Virtual/infinite scrolling is not implemented but can be added using libraries like react-virtualized or react-window.

## Installation and Running

1. Clone the repository
2. Navigate to `simple-feedback-backend` and run `npm install`, then `npm start` to run the backend server.
3. Navigate to `simple-feedback-frontend` and run `npm install`, then `npm start` to run the frontend application.

