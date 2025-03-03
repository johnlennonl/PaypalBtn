require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;

app.get('/config', (req, res) => {
    res.json({ clientId: PAYPAL_CLIENT_ID });
});

const PORT = 5000;
app.get("/", (req, res) => {
    res.send("Servidor funcionando 🚀");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
