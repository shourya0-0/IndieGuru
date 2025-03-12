# IndieGuru

IndieGuru is a comprehensive platform connecting aspiring learners with expert mentors. The platform facilitates mentorship, course delivery, and community building.

## Features

- Expert mentorship and booking system
- Live webinars and classes
- Course marketplace
- Community engagement
- Assessment system
- Admin dashboard for platform management

## Tech Stack

- Frontend: React.js with Tailwind CSS
- Backend: Node.js with Express.js
- Database: MongoDB
- Authentication: JWT

## Project Structure

```
indieguru/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # Reusable components
│       ├── pages/        # Page components
│       ├── layouts/      # Layout components
│       ├── context/      # React context
│       ├── hooks/        # Custom hooks
│       ├── utils/        # Utility functions
│       └── styles/       # Global styles
├── server/                # Backend Node.js/Express application
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── utils/           # Utility functions
└── README.md
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```
3. Set up environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create `.env` files in both client and server directories:

### Client (.env)
```
VITE_API_URL=http://localhost:5000
```

### Server (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
``` 
