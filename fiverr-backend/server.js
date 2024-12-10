// /fiverr-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Allow only the frontend (React) to access the backend
    methods: ['GET', 'POST'], // Allow only GET and POST requests (can be expanded)
    allowedHeaders: ['Content-Type'], // Allowed headers for the requests
  }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Define your routes here (e.g., auth routes)
app.use('/api/auth', require('./routes/auth'));

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Socket.io for real-time chat
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('sendMessage', (data) => {
        io.emit('receiveMessage', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});


const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});