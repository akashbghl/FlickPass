# 🎬 Movie Ticket Booking App 🍿

This project is a full-stack web application for booking movie tickets online. It allows users to browse movies, view details, select seats, and make bookings. The application also includes an admin panel for managing movies, showtimes, and bookings.

## 🚀 Key Features

- **User Authentication:** Secure user authentication using Clerk.
- **Movie Browsing:** Browse a list of currently playing movies.
- **Movie Details:** View detailed information about a specific movie, including synopsis, cast, and showtimes.
- **Seat Selection:** Interactive seat layout for selecting desired seats.
- **Booking Management:** Users can view their booking history.
- **Admin Dashboard:** Overview of key metrics like bookings, revenue, and active shows.
- **Showtime Management:** Admins can add and manage movie showtimes.
- **Booking Listing:** Admins can view a list of all bookings.
- **Real-time Notifications:** Toast notifications for user feedback.

## 🛠️ Tech Stack

- **Frontend:**
    - React
    - React Router DOM
    - Tailwind CSS
    - lucide-react (icons)
    - react-hot-toast (notifications)
    - react-player
    - Axios
- **Backend:**
    - Node.js
    - Express
    - Mongoose
    - dotenv
    - cors
- **Database:**
    - MongoDB
- **Authentication:**
    - Clerk
- **Background Jobs/Workflows:**
    - Inngest
- **Build Tool:**
    - Vite

## 📦 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB installed and running
- Clerk account and API keys

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  Install server-side dependencies:

    ```bash
    cd server
    npm install  # or yarn install
    ```

3.  Install client-side dependencies:

    ```bash
    cd client
    npm install  # or yarn install
    ```

4.  Configure environment variables:

    - Create a `.env` file in the `server` directory and add the following:

        ```
        MONGO_URI=<your_mongodb_connection_string>
        PORT=5000
        CLERK_SECRET_KEY=<your_clerk_secret_key>
        CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
        VITE_CURRENCY=$
        ```

    - Create a `.env` file in the `client` directory and add the following:

        ```
        VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
        VITE_CURRENCY=$
        ```

### Running Locally

1.  Start the backend server:

    ```bash
    cd server
    npm run dev
    ```

2.  Start the frontend development server:

    ```bash
    cd client
    npm run dev
    ```

    The client application will be available at `http://localhost:5173`.

## 💻 Project Structure

```
📂 movie-ticket-booking-app
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BlurCircle.jsx
│   │   │   ├── DateSelect.jsx
│   │   │   ├── FeaturedSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── TrailersSection.jsx
│   │   │   └── admin/
│   │   │       └── Title.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Movies.jsx
│   │   │   ├── MovieDetails.jsx
│   │   │   ├── SeatLayout.jsx
│   │   │   ├── Favourite.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   └── admin/
│   │   │       ├── AddShows.jsx
│   │   │       ├── Dashboard.jsx
│   │   │       ├── ListBookings.jsx
│   │   │       └── Layout.jsx
│   │   ├── assets/
│   │   │   ├── assets.js
│   │   │   └── screenImage.svg
│   │   ├── lib/
│   │   │   ├── dateFormat.js
│   │   │   ├── isoTimeFormat.js
│   │   │   └── timeFormat.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   │   └── vite.svg
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── server/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── User.js
│   ├── inngest/
│   │   └── index.js
│   ├── index.js
│   ├── .env
│   └── package.json
├── .gitignore
└── README.md
```

## 📸 Screenshots


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the [MIT License].

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at (mailto:akashbaghel.dev@gmail.com).

## 💖 Thanks

Thanks for checking out this project! I hope it's helpful.

