# Aryan Gupta - Blog

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Running Locally](#running-locally)
  - [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Aryan Gupta - Blog is a full-stack blogging website built with Next.js for both the frontend and backend.

## Features

- User-friendly and responsive design.
- View all blog posts or filter by tags.
- Pagination for blog posts..
- Deployment on Vercel for easy access.

## Technologies Used

- [Next.js](https://nextjs.org/) - Full-stack framework for building React applications.
- [MongoDB](https://www.mongodb.com/) - NoSQL database for storing blog data.
- [Vercel](https://vercel.com/) - Hosting platform for deploying web applications.

## Getting Started

### Prerequisites

Before running the project, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/aryan-gupta-blog.git
   ```
   
2. Change to the project directory:
   ```bash 
   cd aryan-gupta-blog
   ```
3. Install the project dependencies:
    ```bash 
   npm install
   ```
4. Create a .env file in the root directory and configure the following environment variables:
    ```bash 
   MONGO_URI= https://dummyurl.com
   TOKEN_SECRET=dummytoken
   DOMAIN=http://localhost:3000
    ```
* PORT: The port on which the application will run.
* MONGODB_URI: Your MongoDB connection string.
* SECRET_KEY: A secret key for JWT token generation.

## Usage
### Running Locally
To run the application locally, follow these steps:
```bash 
npm run dev
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

**Happy Blogging! 📝🚀**