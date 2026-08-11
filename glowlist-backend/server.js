const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('"Selamat Datang di GlowList API 💄');
});
    app.get("/coba", (req, res) => {
        res.send('"Selamat Datang di GlowList API 💄');
    });


app.listen(PORT, () => {
    console.log(`Server Glowlist berjalan di http://localhost:${PORT}`);
});