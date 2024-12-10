// /fiverr-backend/controllers/chatController.js
const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    const { sender, receiver, message } = req.body;
    try {
        const newMessage = new Message({ sender, receiver, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent', newMessage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMessages = async (req, res) => {
    const { user1, user2 } = req.query;
    try {
        const messages = await Message.find({
            $or: [
                { sender: user1, receiver: user2 },
                { sender: user2, receiver: user1 },
            ],
        }).sort({ timestamp: 1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
