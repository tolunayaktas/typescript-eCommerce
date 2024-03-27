import express from "express";
import { Transaction, TransactionType } from "../entities/Transaction"
import { Client } from "../entities/Client"


const router = express.Router();

router.post("/api/client/:clientId/transaction", async (req, res) => {
    const { clientId } = req.params;
    const { type, amount } = req.body;
    const client = await Client.findOne({ where: { id: parseInt(clientId, 10) } });

    if(!client){
        return res.json({
            msg: "Client not found!"
        })
    }

    const transaction = Transaction.create({
        amount,
        type,
        client
    });

    await transaction.save();

    if (type === TransactionType.DEPOSIT) {
        client.balance = client.balance + amount
    } else if (type === TransactionType.WITHDRAW) {
        client.balance = client.balance - amount
    }

    await client.save()

    return res.json({
        msg: "Transaction added"
    })
})

export { router as createTransactionRouter}
