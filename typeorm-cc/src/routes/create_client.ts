import express from "express";
import { Client } from "../entities/Client";

const router = express.Router();


router.post('/api/client', async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance,
    } = req.body;

    const client = Client.create({
        firstName: firstName,
        lastName: lastName,
        email,
        cardNumber: cardNumber,
        balance,
    });

    await client.save();
    
    return res.json(client)
});

export {
    router as createClientRouter
};