# Pizza Oregano - Restaurant Web Application

## Overview
Pizza Oregano is a modern restaurant web application designed initially for the "Pizza Oregano" takeaway. The project is built with scalability in mind, so the same codebase can be customized and used for different restaurants in the future.

## Technologies Used
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Spring Boot, H2 Database (in-memory)
- **Build tools:** Maven (backend), npm/yarn (frontend)

## Features
- Responsive restaurant menu and ordering system
- Backend API for order management
- Easily customizable for different restaurants

### Prerequisites
- Java 17+ (for Spring Boot backend)
- Node.js 16+ (for frontend)
- Maven
- Git

## Getting Started
## Running the Frontend

1. Navigate to the frontend directory:  

   ```bash
   cd pizza-oregano-frontend
   ```

2. Install dependencies:  

   ```bash
   npm install
   ```

3. Start the development server:  

   ```bash
   npm run dev
   ```

4. Open your browser and go to [http://localhost:5173](http://localhost:5173) (default port for Vite)

## Running the Backend

1. Navigate to the backend directory:  

   ```bash
   cd pizza-oregano-backend
   ```

2. Run the Spring Boot application using Maven wrapper:  

   ```bash
   ./mvnw spring-boot:run
   ```

3. The backend server will start by default on [http://localhost:8080](http://localhost:8080)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/EmreAlma/pizza-oregano.git
   cd pizza-oregano