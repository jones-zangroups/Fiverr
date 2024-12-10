//fiverr-frontend/src/components/Chat.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('receiveMessage', (data) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => socket.off('receiveMessage');
    }, []);

    const sendMessage = () => {
        const newMessage = { sender: 'User1', receiver: 'User2', message }; // Example sender/receiver
        socket.emit('sendMessage', newMessage);
        setMessages((prev) => [...prev, newMessage]);
        setMessage('');
    };

    return (
        <div className="chat-container">
            <h2>Live Chat</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.sender}:</strong> {msg.message}
                    </p>
                ))}
            </div>
            <input
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
