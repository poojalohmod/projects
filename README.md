# Fitness Tracker - Your Personal Training Companion

A fully functional fitness training website built with React, Express, and modern web technologies.

## Features

✅ **User Authentication**
- User registration and login
- Secure JWT-based authentication
- Protected routes for authenticated users

✅ **Workout Plans**
- Multiple pre-built workout plans (Beginner, Intermediate, Advanced)
- Detailed exercise information with sets, reps, and rest periods
- Browse and view workout plan details

✅ **Exercise Tracking**
- Log custom workouts or use predefined plans
- Track sets, reps, weight, and duration
- Add personal notes for each workout session
- Delete workout history

✅ **Progress Monitoring**
- Dashboard with key statistics
- Visual analytics with charts (workout frequency, duration trends)
- Achievement system with unlockable badges
- Workout streak tracking
- Weekly and monthly statistics

✅ **Responsive Design**
- Mobile-friendly interface
- Works seamlessly on desktop, tablet, and mobile devices
- Modern, clean UI with smooth animations

## Tech Stack

- **Frontend:** React 18, React Router, Recharts, Axios
- **Backend:** Express.js, JWT, bcryptjs
- **Build Tool:** Vite
- **Styling:** Custom CSS with CSS Variables

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd fitness-tracker
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

You need to run both the backend server and the frontend development server.

#### Option 1: Run servers separately

**Terminal 1 - Start the backend server:**
```bash
npm run server
```
The backend will run on http://localhost:5000

**Terminal 2 - Start the frontend:**
```bash
npm run dev
```
The frontend will run on http://localhost:3000

#### Option 2: Run both with one command (PowerShell)

```bash
npm run server; npm run dev
```

### Usage

1. Open http://localhost:3000 in your browser
2. Click "Sign Up" to create a new account
3. Fill in your details and register
4. After registration, you'll be redirected to your dashboard
5. Explore the features:
   - Browse workout plans
   - Log a workout
   - View your workout history
   - Check your progress and analytics

## Project Structure

```
fitness-tracker/
├── public/
├── server/
│   └── server.js          # Express backend API
├── src/
│   ├── components/
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx       # Landing page
│   │   ├── Login.jsx      # Login page
│   │   ├── Register.jsx   # Registration page
│   │   ├── Dashboard.jsx  # User dashboard
│   │   ├── WorkoutPlans.jsx    # Workout plans listing
│   │   ├── LogWorkout.jsx      # Log workout form
│   │   ├── WorkoutHistory.jsx  # Workout history
│   │   ├── Progress.jsx        # Progress analytics
│   │   └── [CSS files]
│   ├── App.jsx            # Main app component
│   ├── App.css
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
└── index.html
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/user/profile` - Get user profile (protected)

### Workout Plans
- `GET /api/workout-plans` - Get all workout plans
- `GET /api/workout-plans/:id` - Get specific workout plan

### Exercises
- `GET /api/exercises` - Get all exercises

### Workouts
- `POST /api/workouts` - Log new workout (protected)
- `GET /api/workouts` - Get user's workouts (protected)
- `GET /api/workouts/:id` - Get specific workout (protected)
- `PUT /api/workouts/:id` - Update workout (protected)
- `DELETE /api/workouts/:id` - Delete workout (protected)

### Progress
- `GET /api/progress` - Get user's progress statistics (protected)

## Notes

- This is a demo application using in-memory storage. Data will be lost when the server restarts.
- For production use, implement a proper database (MongoDB, PostgreSQL, etc.)
- Update the JWT_SECRET in server/server.js for production
- Add environment variables for configuration

## Future Enhancements

- Persistent database integration
- Social features (share workouts, follow friends)
- Custom workout plan creation
- Exercise library with images/videos
- Nutrition tracking
- Mobile app version

## License

MIT License - Feel free to use this project for learning or as a starting point for your own fitness application.
